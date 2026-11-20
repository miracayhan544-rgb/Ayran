import { Brand, PhoneModel } from '../types/phone';

const GMAIL_API_BASE = 'https://gmail.googleapis.com/gmail/v1/users/me';

export class GmailAuthError extends Error {
  constructor(message = 'Gmail oturum süresi doldu veya yetki gerekiyor.') {
    super(message);
    this.name = 'GmailAuthError';
  }
}

export interface GmailProfile {
  emailAddress: string;
  messagesTotal?: number;
  threadsTotal?: number;
}

export interface GmailLabel {
  id: string;
  name: string;
  type?: 'system' | 'user';
  messagesTotal?: number;
  messagesUnread?: number;
}

export interface GmailMessageHeader {
  name: string;
  value: string;
}

export interface GmailMessagePart {
  partId?: string;
  mimeType?: string;
  filename?: string;
  headers?: GmailMessageHeader[];
  body?: {
    size?: number;
    data?: string;
  };
  parts?: GmailMessagePart[];
}

export interface GmailMessageSummary {
  id: string;
  threadId: string;
  labelIds: string[];
  snippet: string;
  internalDate?: string;
  subject: string;
  from: string;
  to: string;
  date: string;
  messageIdHeader?: string;
  isUnread: boolean;
  isStarred: boolean;
}

export interface GmailMessageDetail extends GmailMessageSummary {
  bodyText: string;
}

function decodeBase64UrlUtf8(data?: string): string {
  if (!data) return '';
  try {
    const normalized = data.replace(/-/g, '+').replace(/_/g, '/');
    const padLength = (4 - (normalized.length % 4)) % 4;
    const padded = normalized + '='.repeat(padLength);
    const binary = atob(padded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    return new TextDecoder('utf-8').decode(bytes);
  } catch {
    return '';
  }
}

function encodeBase64UrlUtf8(input: string): string {
  const bytes = new TextEncoder().encode(input);
  let binary = '';
  for (let i = 0; i < bytes.length; i += 1) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function encodeMimeSubject(subject: string): string {
  // ASCII kontrolü — Türkçe karakterler varsa RFC 2047 UTF-8 Base64 kullan
  if (/^[\x20-\x7E]*$/.test(subject)) {
    return subject;
  }
  const bytes = new TextEncoder().encode(subject);
  let binary = '';
  for (let i = 0; i < bytes.length; i += 1) {
    binary += String.fromCharCode(bytes[i]);
  }
  return `=?UTF-8?B?${btoa(binary)}?=`;
}

function decodeHtmlEntitiesToPlainText(html: string): string {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    doc.querySelectorAll('script, style, noscript').forEach((el) => el.remove());
    return (doc.body?.textContent ?? '').replace(/\n{3,}/g, '\n\n').trim();
  } catch {
    return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }
}

function extractBodyFromPayload(payload?: GmailMessagePart): string {
  if (!payload) return '';

  const findPart = (
    part: GmailMessagePart,
    targetMime: string
  ): string | null => {
    if (part.mimeType === targetMime && part.body?.data) {
      return decodeBase64UrlUtf8(part.body.data);
    }
    if (part.parts) {
      for (const child of part.parts) {
        const found = findPart(child, targetMime);
        if (found) return found;
      }
    }
    return null;
  };

  const plainText = findPart(payload, 'text/plain');
  if (plainText && plainText.trim().length > 0) {
    return plainText.trim();
  }

  const htmlText = findPart(payload, 'text/html');
  if (htmlText && htmlText.trim().length > 0) {
    return decodeHtmlEntitiesToPlainText(htmlText);
  }

  if (payload.body?.data) {
    const raw = decodeBase64UrlUtf8(payload.body.data);
    if (payload.mimeType === 'text/html') {
      return decodeHtmlEntitiesToPlainText(raw);
    }
    return raw.trim();
  }

  return '';
}

function getHeaderValue(headers: GmailMessageHeader[] | undefined, name: string): string {
  if (!headers) return '';
  const target = name.toLowerCase();
  const found = headers.find((h) => h.name.toLowerCase() === target);
  return found?.value ?? '';
}

async function gmailFetch<T>(
  accessToken: string,
  path: string,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(`${GMAIL_API_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      ...(init?.body ? { 'Content-Type': 'application/json' } : {}),
      ...(init?.headers ?? {}),
    },
  });

  if (res.status === 401 || res.status === 403) {
    throw new GmailAuthError(
      'Gmail erişim izni sona erdi veya yetki yenilenmesi gerekiyor. Lütfen yeniden oturum açın.'
    );
  }

  if (!res.ok) {
    let errorMsg = `Gmail API hatası (${res.status})`;
    try {
      const errJson = (await res.json()) as { error?: { message?: string } };
      if (errJson?.error?.message) {
        errorMsg = errJson.error.message;
      }
    } catch {
      // ignore json parse failure
    }
    throw new Error(errorMsg);
  }

  if (res.status === 204) {
    return {} as T;
  }
  return (await res.json()) as T;
}

export async function fetchGmailProfile(accessToken: string): Promise<GmailProfile> {
  return gmailFetch<GmailProfile>(accessToken, '/profile');
}

export async function fetchGmailLabels(accessToken: string): Promise<GmailLabel[]> {
  const data = await gmailFetch<{ labels?: GmailLabel[] }>(accessToken, '/labels');
  return data.labels ?? [];
}

interface RawMessageResource {
  id: string;
  threadId: string;
  labelIds?: string[];
  snippet?: string;
  internalDate?: string;
  payload?: GmailMessagePart;
}

function mapRawToSummary(raw: RawMessageResource): GmailMessageSummary {
  const headers = raw.payload?.headers;
  const labelIds = raw.labelIds ?? [];
  return {
    id: raw.id,
    threadId: raw.threadId,
    labelIds,
    snippet: raw.snippet ?? '',
    internalDate: raw.internalDate,
    subject: getHeaderValue(headers, 'Subject') || '(Konusuz)',
    from: getHeaderValue(headers, 'From') || 'Bilinmeyen Gönderen',
    to: getHeaderValue(headers, 'To') || '',
    date: getHeaderValue(headers, 'Date') || '',
    messageIdHeader: getHeaderValue(headers, 'Message-ID') || undefined,
    isUnread: labelIds.includes('UNREAD'),
    isStarred: labelIds.includes('STARRED'),
  };
}

export interface ListMessagesResult {
  messages: GmailMessageSummary[];
  nextPageToken?: string;
  resultSizeEstimate?: number;
}

export async function listGmailMessages(
  accessToken: string,
  options: {
    labelIds?: string[];
    q?: string;
    maxResults?: number;
    pageToken?: string;
  } = {}
): Promise<ListMessagesResult> {
  const params = new URLSearchParams();
  params.set('maxResults', String(options.maxResults ?? 20));
  if (options.q && options.q.trim()) {
    params.set('q', options.q.trim());
  }
  if (options.pageToken) {
    params.set('pageToken', options.pageToken);
  }
  if (options.labelIds && options.labelIds.length > 0) {
    for (const lid of options.labelIds) {
      params.append('labelIds', lid);
    }
  }

  const listData = await gmailFetch<{
    messages?: { id: string; threadId: string }[];
    nextPageToken?: string;
    resultSizeEstimate?: number;
  }>(accessToken, `/messages?${params.toString()}`);

  const ids = listData.messages ?? [];
  if (ids.length === 0) {
    return {
      messages: [],
      nextPageToken: listData.nextPageToken,
      resultSizeEstimate: listData.resultSizeEstimate ?? 0,
    };
  }

  const details = await Promise.all(
    ids.map((item) =>
      gmailFetch<RawMessageResource>(
        accessToken,
        `/messages/${encodeURIComponent(item.id)}?format=metadata&metadataHeaders=Subject&metadataHeaders=From&metadataHeaders=To&metadataHeaders=Date&metadataHeaders=Message-ID`
      )
    )
  );

  return {
    messages: details.map(mapRawToSummary),
    nextPageToken: listData.nextPageToken,
    resultSizeEstimate: listData.resultSizeEstimate,
  };
}

export async function getGmailMessageDetail(
  accessToken: string,
  messageId: string
): Promise<GmailMessageDetail> {
  const raw = await gmailFetch<RawMessageResource>(
    accessToken,
    `/messages/${encodeURIComponent(messageId)}?format=full`
  );
  const summary = mapRawToSummary(raw);
  const bodyText = extractBodyFromPayload(raw.payload) || summary.snippet;
  return {
    ...summary,
    bodyText,
  };
}

export async function sendGmailMessage(
  accessToken: string,
  payload: {
    to: string;
    subject: string;
    body: string;
    threadId?: string;
    inReplyTo?: string;
  }
): Promise<{ id: string; threadId: string }> {
  const lines = [
    `To: ${payload.to.trim()}`,
    `Subject: ${encodeMimeSubject(payload.subject.trim() || '(Konusuz)')}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset="UTF-8"',
    'Content-Transfer-Encoding: 8bit',
  ];

  if (payload.inReplyTo) {
    lines.push(`In-Reply-To: ${payload.inReplyTo}`);
    lines.push(`References: ${payload.inReplyTo}`);
  }

  lines.push('', payload.body);

  const rawMime = lines.join('\r\n');
  const rawEncoded = encodeBase64UrlUtf8(rawMime);

  return gmailFetch<{ id: string; threadId: string }>(accessToken, '/messages/send', {
    method: 'POST',
    body: JSON.stringify({
      raw: rawEncoded,
      ...(payload.threadId ? { threadId: payload.threadId } : {}),
    }),
  });
}

export async function modifyGmailMessageLabels(
  accessToken: string,
  messageId: string,
  changes: {
    addLabelIds?: string[];
    removeLabelIds?: string[];
  }
): Promise<void> {
  await gmailFetch(accessToken, `/messages/${encodeURIComponent(messageId)}/modify`, {
    method: 'POST',
    body: JSON.stringify({
      addLabelIds: changes.addLabelIds ?? [],
      removeLabelIds: changes.removeLabelIds ?? [],
    }),
  });
}

export async function trashGmailMessage(
  accessToken: string,
  messageId: string
): Promise<void> {
  await gmailFetch(accessToken, `/messages/${encodeURIComponent(messageId)}/trash`, {
    method: 'POST',
  });
}

export function formatPhoneSpecsForEmail(
  phone: PhoneModel,
  brand?: Brand
): { subject: string; body: string } {
  const brandName = brand?.name ?? phone.brandId;
  const deviceLabel = phone.deviceType === 'tablet' ? 'Tablet' : 'Telefon';
  const subject = `TelefonLAB Teknik Özeti: ${brandName} ${phone.name} (${phone.releaseYear})`;

  const hiddenList = phone.modelHiddenFeatures
    .map((f, idx) => `  ${idx + 1}. ${f.title}: ${f.description} (${f.howToAccess})`)
    .join('\n');

  const body = [
    `${brandName} ${phone.name} (${phone.releaseYear} · ${deviceLabel})`,
    `${phone.summary}`,
    '',
    'ÖNE ÇIKAN TEKNİK ÖZELLİKLER',
    `- Ekran: ${phone.specs.display.size} | ${phone.specs.display.panel} (${phone.specs.display.refreshRate})`,
    `- Çözünürlük / Parlaklık: ${phone.specs.display.resolution} · ${phone.specs.display.peakBrightness}`,
    `- İşlemci (SoC): ${phone.specs.performance.chipset} (${phone.specs.performance.processNode})`,
    `- RAM & Depolama: ${phone.specs.memory.ram} · ${phone.specs.memory.storage}`,
    `- Ana Kamera: ${phone.specs.camera.main}`,
    `- Ultra Geniş / Telefoto: ${phone.specs.camera.ultrawide} / ${phone.specs.camera.telephoto}`,
    `- Ön Kamera & Video: ${phone.specs.camera.front} · ${phone.specs.camera.video}`,
    `- Batarya & Şarj: ${phone.specs.battery.capacity} · Kablolu: ${phone.specs.battery.wiredCharging} · Kablosuz: ${phone.specs.battery.wirelessCharging}`,
    `- İşletim Sistemi: ${phone.specs.software.osAtLaunch} (${phone.specs.software.updatePolicy})`,
    '',
    hiddenList ? 'MODELE ÖZEL GİZLİ ÖZELLİKLER\n' + hiddenList : '',
    '',
    '— TelefonLAB ile hazırlandı',
  ]
    .filter(Boolean)
    .join('\n');

  return { subject, body };
}

export function formatComparisonForEmail(
  phones: PhoneModel[],
  brands: Brand[]
): { subject: string; body: string } {
  const getBrand = (id: string) => brands.find((b) => b.id === id)?.name ?? id;
  const names = phones.map((p) => `${getBrand(p.brandId)} ${p.name}`).join(' vs ');
  const subject = `TelefonLAB Karşılaştırma Raporu: ${names}`;

  const sections = phones.map((p) => {
    const bName = getBrand(p.brandId);
    return [
      `=== ${bName} ${p.name} (${p.releaseYear}) ===`,
      `• Ekran: ${p.specs.display.size} · ${p.specs.display.panel} · ${p.specs.display.refreshRate}`,
      `• İşlemci: ${p.specs.performance.chipset} (${p.specs.performance.processNode})`,
      `• RAM / Depolama: ${p.specs.memory.ram} / ${p.specs.memory.storage}`,
      `• Kamera: ${p.specs.camera.main} | Telefoto: ${p.specs.camera.telephoto}`,
      `• Pil & Şarj: ${p.specs.battery.capacity} · ${p.specs.battery.wiredCharging}`,
      `• Yazılım: ${p.specs.software.osAtLaunch}`,
    ].join('\n');
  });

  const body = [
    `TelefonLAB Yan Yana Cihaz Karşılaştırması (${phones.length} Cihaz)`,
    '',
    ...sections,
    '',
    '— TelefonLAB ile hazırlandı',
  ].join('\n\n');

  return { subject, body };
}
