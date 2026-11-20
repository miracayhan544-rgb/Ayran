import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { User } from 'firebase/auth';
import {
  Mail,
  Search,
  RefreshCw,
  Send,
  Inbox,
  Star,
  Trash2,
  Archive,
  LogOut,
  Plus,
  MailOpen,
  Smartphone,
  ChevronRight,
  Loader2,
  X,
  Reply,
  AlertCircle,
} from 'lucide-react';
import { Brand, PhoneModel } from '../types/phone';
import {
  fetchGmailLabels,
  fetchGmailProfile,
  formatPhoneSpecsForEmail,
  getGmailMessageDetail,
  GmailAuthError,
  GmailLabel,
  GmailMessageDetail,
  GmailMessageSummary,
  GmailProfile,
  listGmailMessages,
  modifyGmailMessageLabels,
  sendGmailMessage,
  trashGmailMessage,
} from '../services/gmailApi';
import { getAccessToken, clearCachedAccessToken } from '../services/gmailAuth';
import { GoogleSignInButton } from './GoogleSignInButton';
import { GmailConfirmModal, GmailPendingConfirmation } from './GmailConfirmModal';

export interface GmailDraftPreset {
  to?: string;
  subject: string;
  body: string;
  threadId?: string;
  inReplyTo?: string;
}

interface GmailViewProps {
  user: User | null;
  needsAuth: boolean;
  tokenVersion: number;
  authLoading: boolean;
  authError: string | null;
  onSignIn: () => Promise<void>;
  onSignOut: () => Promise<void>;
  onRequireReauth: () => void;
  allPhones: PhoneModel[];
  brands: Brand[];
  draftPreset: GmailDraftPreset | null;
  onClearDraftPreset: () => void;
}

const SYSTEM_FOLDERS: { id: string; label: string }[] = [
  { id: 'INBOX', label: 'Gelen Kutusu' },
  { id: 'STARRED', label: 'Yıldızlı' },
  { id: 'SENT', label: 'Gönderilenler' },
  { id: 'DRAFT', label: 'Taslaklar' },
  { id: 'TRASH', label: 'Çöp Kutusu' },
  { id: 'ALL', label: 'Tüm Postalar' },
];

export const GmailView: React.FC<GmailViewProps> = ({
  user,
  needsAuth,
  tokenVersion,
  authLoading,
  authError,
  onSignIn,
  onSignOut,
  onRequireReauth,
  allPhones,
  brands,
  draftPreset,
  onClearDraftPreset,
}) => {
  const [profile, setProfile] = useState<GmailProfile | null>(null);
  const [labels, setLabels] = useState<GmailLabel[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<string>('INBOX');
  const [searchInput, setSearchInput] = useState('');
  const [activeQuery, setActiveQuery] = useState('');
  const [messages, setMessages] = useState<GmailMessageSummary[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | undefined>(undefined);
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<GmailMessageDetail | null>(null);

  const [listLoading, setListLoading] = useState(false);
  const [detailLoading, setDetailLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Composer state
  const [composerOpen, setComposerOpen] = useState(false);
  const [composeTo, setComposeTo] = useState('');
  const [composeSubject, setComposeSubject] = useState('');
  const [composeBody, setComposeBody] = useState('');
  const [composeThreadId, setComposeThreadId] = useState<string | undefined>(undefined);
  const [composeInReplyTo, setComposeInReplyTo] = useState<string | undefined>(undefined);
  const [selectedInsertPhoneId, setSelectedInsertPhoneId] = useState<string>('');

  // Mandatory confirmation dialog state
  const [pendingConfirm, setPendingConfirm] = useState<GmailPendingConfirmation | null>(null);
  const [confirmBusy, setConfirmBusy] = useState(false);

  // Apply external draft preset (e.g., from PhoneDetailModal or CompareView)
  useEffect(() => {
    if (!draftPreset) return;
    setComposerOpen(true);
    setComposeTo(draftPreset.to ?? '');
    setComposeSubject(draftPreset.subject);
    setComposeBody(draftPreset.body);
    setComposeThreadId(draftPreset.threadId);
    setComposeInReplyTo(draftPreset.inReplyTo);
    onClearDraftPreset();
  }, [draftPreset, onClearDraftPreset]);

  const handleApiError = useCallback(
    (err: unknown) => {
      if (err instanceof GmailAuthError) {
        clearCachedAccessToken();
        onRequireReauth();
        setErrorMsg(err.message);
        return;
      }
      const message = err instanceof Error ? err.message : 'Gmail işlemi sırasında hata oluştu.';
      setErrorMsg(message);
    },
    [onRequireReauth]
  );

  const loadMailbox = useCallback(
    async (folderId: string, queryText: string, pageToken?: string, append = false) => {
      const token = getAccessToken();
      if (!token) {
        onRequireReauth();
        return;
      }

      setListLoading(true);
      setErrorMsg(null);
      try {
        const [prof, lbls, listRes] = await Promise.all([
          !append ? fetchGmailProfile(token) : Promise.resolve(null),
          !append ? fetchGmailLabels(token) : Promise.resolve(null),
          listGmailMessages(token, {
            labelIds: folderId === 'ALL' ? undefined : [folderId],
            q: queryText || undefined,
            maxResults: 20,
            pageToken,
          }),
        ]);

        if (prof) setProfile(prof);
        if (lbls) setLabels(lbls);
        setNextPageToken(listRes.nextPageToken);
        setMessages((prev) => (append ? [...prev, ...listRes.messages] : listRes.messages));
      } catch (err) {
        handleApiError(err);
      } finally {
        setListLoading(false);
      }
    },
    [handleApiError, onRequireReauth]
  );

  useEffect(() => {
    if (!user || needsAuth) return;
    const token = getAccessToken();
    if (!token) return;
    loadMailbox(selectedFolder, activeQuery);
  }, [user, needsAuth, tokenVersion, selectedFolder, activeQuery, loadMailbox]);

  const handleSelectMessage = async (msg: GmailMessageSummary) => {
    const token = getAccessToken();
    if (!token) {
      onRequireReauth();
      return;
    }

    setSelectedMessageId(msg.id);
    setDetailLoading(true);
    setErrorMsg(null);
    try {
      const detail = await getGmailMessageDetail(token, msg.id);
      setSelectedMessage(detail);
    } catch (err) {
      handleApiError(err);
    } finally {
      setDetailLoading(false);
    }
  };

  const userCustomLabels = useMemo(
    () => labels.filter((l) => l.type === 'user').sort((a, b) => a.name.localeCompare(b.name, 'tr')),
    [labels]
  );

  const formatShortDate = (rawDate: string, internalDate?: string) => {
    try {
      const d = internalDate ? new Date(Number(internalDate)) : new Date(rawDate);
      if (Number.isNaN(d.getTime())) return rawDate;
      return d.toLocaleDateString('tr-TR', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return rawDate;
    }
  };

  const openReplyComposer = (msg: GmailMessageDetail) => {
    const emailMatch = msg.from.match(/<([^>]+)>/);
    const replyAddr = emailMatch ? emailMatch[1] : msg.from;
    const subj = msg.subject.toLowerCase().startsWith('re:') ? msg.subject : `Re: ${msg.subject}`;
    setComposerOpen(true);
    setComposeTo(replyAddr);
    setComposeSubject(subj);
    setComposeBody(`\n\n--- Önceki Mesaj (${msg.from}) ---\n${msg.bodyText.slice(0, 800)}`);
    setComposeThreadId(msg.threadId);
    setComposeInReplyTo(msg.messageIdHeader);
  };

  const handleInsertPhoneSpec = (phoneId: string) => {
    setSelectedInsertPhoneId(phoneId);
    if (!phoneId) return;
    const phone = allPhones.find((p) => p.id === phoneId);
    if (!phone) return;
    const brand = brands.find((b) => b.id === phone.brandId);
    const formatted = formatPhoneSpecsForEmail(phone, brand);
    setComposeSubject((prev) => (prev.trim() ? prev : formatted.subject));
    setComposeBody((prev) =>
      prev.trim() ? `${prev.trim()}\n\n${formatted.body}` : formatted.body
    );
  };

  const requestSendEmailConfirmation = (e: React.FormEvent) => {
    e.preventDefault();
    const toTrim = composeTo.trim();
    if (!toTrim) {
      setErrorMsg('Lütfen geçerli bir alıcı e-posta adresi girin.');
      return;
    }

    const token = getAccessToken();
    if (!token) {
      onRequireReauth();
      return;
    }

    setPendingConfirm({
      title: 'E-postayı Gönderme Onayı',
      description: 'Bu e-postayı Gmail hesabınız üzerinden göndermek istediğinize emin misiniz?',
      details: [
        { label: 'Alıcı', value: toTrim },
        { label: 'Konu', value: composeSubject.trim() || '(Konusuz)' },
        {
          label: 'İçerik Özeti',
          value:
            composeBody.trim().slice(0, 120) +
            (composeBody.trim().length > 120 ? '...' : ''),
        },
      ],
      confirmLabel: 'Onayla ve Gönder',
      isDestructive: false,
      onConfirm: async () => {
        const freshToken = getAccessToken();
        if (!freshToken) {
          onRequireReauth();
          return;
        }
        await sendGmailMessage(freshToken, {
          to: toTrim,
          subject: composeSubject.trim() || '(Konusuz)',
          body: composeBody,
          threadId: composeThreadId,
          inReplyTo: composeInReplyTo,
        });
        setComposerOpen(false);
        setComposeTo('');
        setComposeSubject('');
        setComposeBody('');
        setComposeThreadId(undefined);
        setComposeInReplyTo(undefined);
        setSelectedInsertPhoneId('');
        setStatusMessage(`E-posta gönderildi: ${toTrim}`);
        await loadMailbox(selectedFolder, activeQuery);
      },
    });
  };

  const requestToggleReadConfirmation = (msg: GmailMessageDetail) => {
    const markAsRead = msg.isUnread;
    setPendingConfirm({
      title: markAsRead ? 'Okundu Olarak İşaretle' : 'Okunmadı Olarak İşaretle',
      description: `"${msg.subject}" konulu e-postanın okunma durumunu değiştirmek istiyor musunuz?`,
      details: [{ label: 'Gönderen', value: msg.from }],
      confirmLabel: markAsRead ? 'Okundu İşaretle' : 'Okunmadı İşaretle',
      onConfirm: async () => {
        const token = getAccessToken();
        if (!token) {
          onRequireReauth();
          return;
        }
        await modifyGmailMessageLabels(token, msg.id, {
          addLabelIds: markAsRead ? [] : ['UNREAD'],
          removeLabelIds: markAsRead ? ['UNREAD'] : [],
        });
        setMessages((prev) =>
          prev.map((m) => (m.id === msg.id ? { ...m, isUnread: !markAsRead } : m))
        );
        setSelectedMessage((prev) => (prev && prev.id === msg.id ? { ...prev, isUnread: !markAsRead } : prev));
        setStatusMessage(markAsRead ? 'E-posta okundu olarak işaretlendi.' : 'E-posta okunmadı olarak işaretlendi.');
      },
    });
  };

  const requestToggleStarConfirmation = (msg: GmailMessageDetail) => {
    const addStar = !msg.isStarred;
    setPendingConfirm({
      title: addStar ? 'Yıldız Ekleme Onayı' : 'Yıldızı Kaldırma Onayı',
      description: `"${msg.subject}" konulu e-postayı ${addStar ? 'yıldızlılara eklemek' : 'yıldızlılardan çıkarmak'} istiyor musunuz?`,
      confirmLabel: addStar ? 'Yıldızla' : 'Yıldızı Kaldır',
      onConfirm: async () => {
        const token = getAccessToken();
        if (!token) {
          onRequireReauth();
          return;
        }
        await modifyGmailMessageLabels(token, msg.id, {
          addLabelIds: addStar ? ['STARRED'] : [],
          removeLabelIds: addStar ? [] : ['STARRED'],
        });
        setMessages((prev) =>
          prev.map((m) => (m.id === msg.id ? { ...m, isStarred: addStar } : m))
        );
        setSelectedMessage((prev) => (prev && prev.id === msg.id ? { ...prev, isStarred: addStar } : prev));
        setStatusMessage(addStar ? 'E-posta yıldızlandı.' : 'Yıldız kaldırıldı.');
      },
    });
  };

  const requestArchiveConfirmation = (msg: GmailMessageDetail) => {
    setPendingConfirm({
      title: 'E-postayı Arşivle',
      description: 'Bu e-postayı Gelen Kutusundan arşivlemek (INBOX etiketini kaldırmak) istiyor musunuz?',
      details: [
        { label: 'Konu', value: msg.subject },
        { label: 'Gönderen', value: msg.from },
      ],
      confirmLabel: 'Arşivle',
      onConfirm: async () => {
        const token = getAccessToken();
        if (!token) {
          onRequireReauth();
          return;
        }
        await modifyGmailMessageLabels(token, msg.id, {
          removeLabelIds: ['INBOX'],
        });
        setMessages((prev) => prev.filter((m) => m.id !== msg.id));
        setSelectedMessage(null);
        setSelectedMessageId(null);
        setStatusMessage('E-posta arşivlendi.');
      },
    });
  };

  const requestTrashConfirmation = (msg: GmailMessageDetail) => {
    setPendingConfirm({
      title: 'Çöp Kutusuna Taşı',
      description: 'Bu e-postayı Çöp Kutusuna taşımak istediğinize emin misiniz?',
      details: [
        { label: 'Konu', value: msg.subject },
        { label: 'Gönderen', value: msg.from },
      ],
      confirmLabel: 'Çöp Kutusuna Taşı',
      isDestructive: true,
      onConfirm: async () => {
        const token = getAccessToken();
        if (!token) {
          onRequireReauth();
          return;
        }
        await trashGmailMessage(token, msg.id);
        setMessages((prev) => prev.filter((m) => m.id !== msg.id));
        setSelectedMessage(null);
        setSelectedMessageId(null);
        setStatusMessage('E-posta çöp kutusuna taşındı.');
      },
    });
  };

  const executePendingConfirmation = async () => {
    if (!pendingConfirm) return;
    setConfirmBusy(true);
    setErrorMsg(null);
    try {
      await pendingConfirm.onConfirm();
      setPendingConfirm(null);
    } catch (err) {
      setPendingConfirm(null);
      handleApiError(err);
    } finally {
      setConfirmBusy(false);
    }
  };

  // Auth Gate — Sign in with Google button
  if (!user || needsAuth) {
    return (
      <div className="oled-surface mx-auto max-w-2xl rounded-xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Gmail Hesabınızı Bağlayın
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {user && needsAuth
                ? 'Güvenlik nedeniyle tarayıcı yenilendikten sonra Gmail erişim izninin yeniden onaylanması gerekir. Devam etmek için Google ile yeniden oturum açın.'
                : 'TelefonLAB içinden gelen kutunuzu görüntülemek, arama yapmak, e-posta göndermek ve telefon/tablet özelliklerini doğrudan paylaşmak için Google hesabınızla oturum açın.'}
            </p>
          </div>
        </div>

        {(authError || errorMsg) && (
          <div
            role="alert"
            className="mt-5 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-xs text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{authError || errorMsg}</span>
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <GoogleSignInButton
            onClick={() => {
              setErrorMsg(null);
              void onSignIn();
            }}
            loading={authLoading}
            label={user && needsAuth ? 'Gmail İzniyle Yeniden Oturum Aç' : 'Sign in with Google — Gmail Bağla'}
          />
          {user && (
            <button
              type="button"
              onClick={() => void onSignOut()}
              className="rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              Oturumu Kapat ({user.email})
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Üst Durum Çubuğu */}
      <div className="oled-surface flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-display text-lg font-bold text-zinc-950 dark:text-white">
                {profile?.emailAddress ?? user.email ?? 'Gmail'}
              </h2>
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
                Bağlı
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 tabular-nums">
              {profile?.messagesTotal != null
                ? `Toplam ${profile.messagesTotal.toLocaleString('tr-TR')} ileti · ${profile.threadsTotal?.toLocaleString('tr-TR') ?? 0} konu`
                : 'Gmail gelen kutusu aktif'}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setComposerOpen(true);
              setComposeThreadId(undefined);
              setComposeInReplyTo(undefined);
            }}
            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            <Plus className="h-3.5 w-3.5" />
            Yeni E-posta
          </button>

          <button
            type="button"
            disabled={listLoading}
            onClick={() => void loadMailbox(selectedFolder, activeQuery)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-800 hover:bg-zinc-50 disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 whitespace-nowrap"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${listLoading ? 'animate-spin' : ''}`} />
            Yenile
          </button>

          <button
            type="button"
            onClick={() => void onSignOut()}
            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 whitespace-nowrap"
          >
            <LogOut className="h-3.5 w-3.5" />
            Çıkış Yap
          </button>
        </div>
      </div>

      {statusMessage && (
        <div
          role="status"
          className="flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-xs font-medium text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300"
        >
          <span>{statusMessage}</span>
          <button
            type="button"
            onClick={() => setStatusMessage(null)}
            aria-label="Bildirimi kapat"
            className="text-emerald-700 hover:text-emerald-950 dark:text-emerald-300"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {errorMsg && (
        <div
          role="alert"
          className="flex items-center justify-between rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-xs font-medium text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300"
        >
          <span>{errorMsg}</span>
          <button
            type="button"
            onClick={() => setErrorMsg(null)}
            aria-label="Hatayı kapat"
            className="text-red-700 hover:text-red-950 dark:text-red-300"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* E-posta Oluşturucu Paneli */}
      {composerOpen && (
        <form
          onSubmit={requestSendEmailConfirmation}
          className="oled-surface rounded-xl border border-blue-200 bg-white p-5 shadow-sm dark:border-blue-900/60 dark:bg-zinc-900/60"
        >
          <div className="flex items-center justify-between gap-3 border-b border-zinc-200 pb-3 dark:border-zinc-800">
            <h3 className="font-display text-base font-bold text-zinc-950 dark:text-white">
              {composeThreadId ? 'Yanıt Yaz' : 'Yeni E-posta Oluştur'}
            </h3>
            <button
              type="button"
              onClick={() => setComposerOpen(false)}
              aria-label="Oluşturucuyu kapat"
              className="rounded-lg p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label
                htmlFor="gmail-to"
                className="block text-xs font-medium text-zinc-600 dark:text-zinc-400"
              >
                Kime (E-posta Adresi)
              </label>
              <input
                id="gmail-to"
                type="email"
                required
                value={composeTo}
                onChange={(e) => setComposeTo(e.target.value)}
                placeholder="ornek@gmail.com"
                className="mt-1 w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-blue-600 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
              />
            </div>

            <div>
              <label
                htmlFor="gmail-insert-device"
                className="block text-xs font-medium text-zinc-600 dark:text-zinc-400"
              >
                TelefonLAB Cihaz Özeti Ekle (İsteğe Bağlı)
              </label>
              <div className="relative mt-1">
                <Smartphone className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
                <select
                  id="gmail-insert-device"
                  value={selectedInsertPhoneId}
                  onChange={(e) => handleInsertPhoneSpec(e.target.value)}
                  className="w-full rounded-lg border border-zinc-300 bg-zinc-50 py-2 pl-8 pr-3 text-xs text-zinc-900 focus:border-blue-600 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
                >
                  <option value="">Listeden telefon veya tablet seç...</option>
                  {allPhones.map((p) => {
                    const b = brands.find((br) => br.id === p.brandId)?.name ?? p.brandId;
                    return (
                      <option key={p.id} value={p.id}>
                        {b} — {p.name} ({p.releaseYear})
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <label
              htmlFor="gmail-subject"
              className="block text-xs font-medium text-zinc-600 dark:text-zinc-400"
            >
              Konu
            </label>
            <input
              id="gmail-subject"
              type="text"
              value={composeSubject}
              onChange={(e) => setComposeSubject(e.target.value)}
              placeholder="E-posta konusu..."
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-blue-600 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            />
          </div>

          <div className="mt-3">
            <label
              htmlFor="gmail-body"
              className="block text-xs font-medium text-zinc-600 dark:text-zinc-400"
            >
              Mesaj
            </label>
            <textarea
              id="gmail-body"
              rows={6}
              value={composeBody}
              onChange={(e) => setComposeBody(e.target.value)}
              placeholder="Mesajınızı yazın veya yukarıdan bir TelefonLAB cihaz özeti ekleyin..."
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-2 font-sans text-sm text-zinc-900 focus:border-blue-600 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            />
          </div>

          <div className="mt-4 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setComposerOpen(false)}
              className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              Vazgeç
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              <Send className="h-3.5 w-3.5" />
              Gönder (Onay İster)
            </button>
          </div>
        </form>
      )}

      {/* Ana 3 Kolonlu Posta Düzeni */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* Sol: Klasörler ve Etiketler */}
        <aside className="oled-surface rounded-xl border border-zinc-200 bg-white p-3 lg:col-span-3 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Klasörler
          </div>
          <div className="mt-1 space-y-1">
            {SYSTEM_FOLDERS.map((folder) => {
              const active = selectedFolder === folder.id;
              return (
                <button
                  key={folder.id}
                  type="button"
                  onClick={() => {
                    setSelectedFolder(folder.id);
                    setSelectedMessage(null);
                    setSelectedMessageId(null);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                    active
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 font-semibold'
                      : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Inbox className="h-3.5 w-3.5" />
                    {folder.label}
                  </span>
                  <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                </button>
              );
            })}
          </div>

          {userCustomLabels.length > 0 && (
            <>
              <div className="mt-4 px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Etiketleriniz
              </div>
              <div className="mt-1 max-h-48 space-y-1 overflow-y-auto">
                {userCustomLabels.map((lbl) => {
                  const active = selectedFolder === lbl.id;
                  return (
                    <button
                      key={lbl.id}
                      type="button"
                      onClick={() => {
                        setSelectedFolder(lbl.id);
                        setSelectedMessage(null);
                        setSelectedMessageId(null);
                      }}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-1.5 text-xs transition-colors ${
                        active
                          ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 font-semibold'
                          : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'
                      }`}
                    >
                      <span className="truncate">{lbl.name}</span>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </aside>

        {/* Orta: Arama ve Mesaj Listesi */}
        <section className="oled-surface flex flex-col rounded-xl border border-zinc-200 bg-white lg:col-span-4 dark:border-zinc-800 dark:bg-zinc-900/50">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setActiveQuery(searchInput.trim());
            }}
            className="border-b border-zinc-200 p-3 dark:border-zinc-800"
          >
            <div className="relative flex gap-2">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
                <input
                  type="search"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Gmail içinde ara (ör. from:apple)..."
                  aria-label="Gmail mesajlarında ara"
                  className="w-full rounded-lg border border-zinc-300 bg-zinc-50 py-1.5 pl-8 pr-2 text-xs text-zinc-900 focus:border-blue-600 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
                />
              </div>
              <button
                type="submit"
                className="rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                Ara
              </button>
            </div>
          </form>

          <div className="max-h-[540px] flex-1 divide-y divide-zinc-200 overflow-y-auto dark:divide-zinc-800">
            {listLoading && messages.length === 0 ? (
              <div className="flex items-center justify-center gap-2 p-8 text-xs text-zinc-500">
                <Loader2 className="h-4 w-4 animate-spin" />
                E-postalar yükleniyor...
              </div>
            ) : messages.length === 0 ? (
              <div className="p-8 text-center text-xs text-zinc-500 dark:text-zinc-400">
                Bu klasörde veya aramada e-posta bulunamadı.
              </div>
            ) : (
              messages.map((msg) => {
                const isSelected = selectedMessageId === msg.id;
                return (
                  <button
                    key={msg.id}
                    type="button"
                    onClick={() => void handleSelectMessage(msg)}
                    className={`w-full px-4 py-3 text-left transition-colors ${
                      isSelected
                        ? 'bg-blue-50/70 dark:bg-blue-950/30'
                        : 'hover:bg-zinc-50 dark:hover:bg-zinc-900/70'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`truncate text-xs ${
                          msg.isUnread
                            ? 'font-bold text-zinc-950 dark:text-white'
                            : 'font-medium text-zinc-700 dark:text-zinc-300'
                        }`}
                      >
                        {msg.from.replace(/<[^>]+>/g, '').trim() || msg.from}
                      </span>
                      <span className="shrink-0 font-mono text-[10px] text-zinc-500 dark:text-zinc-400 tabular-nums">
                        {formatShortDate(msg.date, msg.internalDate)}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-1.5">
                      {msg.isUnread && (
                        <span
                          className="h-2 w-2 shrink-0 rounded-full bg-blue-600"
                          title="Okunmadı"
                        />
                      )}
                      {msg.isStarred && (
                        <Star className="h-3 w-3 shrink-0 fill-amber-400 text-amber-400" />
                      )}
                      <span
                        className={`truncate text-xs ${
                          msg.isUnread
                            ? 'font-semibold text-zinc-900 dark:text-zinc-100'
                            : 'text-zinc-700 dark:text-zinc-300'
                        }`}
                      >
                        {msg.subject}
                      </span>
                    </div>
                    <p className="mt-1 line-clamp-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                      {msg.snippet}
                    </p>
                  </button>
                );
              })
            )}
          </div>

          {nextPageToken && (
            <div className="border-t border-zinc-200 p-2.5 text-center dark:border-zinc-800">
              <button
                type="button"
                disabled={listLoading}
                onClick={() => void loadMailbox(selectedFolder, activeQuery, nextPageToken, true)}
                className="w-full rounded-lg border border-zinc-200 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                {listLoading ? 'Yükleniyor...' : 'Daha Fazla E-posta Yükle'}
              </button>
            </div>
          )}
        </section>

        {/* Sağ: Mesaj Okuma ve Eylemler */}
        <section className="oled-surface flex flex-col rounded-xl border border-zinc-200 bg-white p-5 lg:col-span-5 dark:border-zinc-800 dark:bg-zinc-900/50">
          {detailLoading ? (
            <div className="flex flex-1 items-center justify-center gap-2 py-16 text-xs text-zinc-500">
              <Loader2 className="h-4 w-4 animate-spin" />
              E-posta içeriği yükleniyor...
            </div>
          ) : !selectedMessage ? (
            <div className="flex flex-1 flex-col items-center justify-center py-16 text-center">
              <Mail className="h-8 w-8 text-zinc-300 dark:text-zinc-700" />
              <p className="mt-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Okumak için listeden bir e-posta seçin
              </p>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Veya "Yeni E-posta" düğmesiyle TelefonLAB cihaz özeti gönderin.
              </p>
            </div>
          ) : (
            <div className="flex flex-1 flex-col">
              <div className="border-b border-zinc-200 pb-4 dark:border-zinc-800">
                <h3 className="font-display text-lg font-bold text-zinc-950 dark:text-white">
                  {selectedMessage.subject}
                </h3>
                <div className="mt-2 space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
                  <div>
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                      Kimden:
                    </span>{' '}
                    {selectedMessage.from}
                  </div>
                  {selectedMessage.to && (
                    <div>
                      <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                        Kime:
                      </span>{' '}
                      {selectedMessage.to}
                    </div>
                  )}
                  <div className="font-mono text-[11px] tabular-nums">
                    {formatShortDate(selectedMessage.date, selectedMessage.internalDate)}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => openReplyComposer(selectedMessage)}
                    className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700"
                  >
                    <Reply className="h-3.5 w-3.5" />
                    Yanıtla
                  </button>

                  <button
                    type="button"
                    onClick={() => requestToggleReadConfirmation(selectedMessage)}
                    className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 px-2.5 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                  >
                    <MailOpen className="h-3.5 w-3.5" />
                    {selectedMessage.isUnread ? 'Okundu Yap' : 'Okunmadı Yap'}
                  </button>

                  <button
                    type="button"
                    onClick={() => requestToggleStarConfirmation(selectedMessage)}
                    className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 px-2.5 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                  >
                    <Star
                      className={`h-3.5 w-3.5 ${
                        selectedMessage.isStarred ? 'fill-amber-400 text-amber-400' : ''
                      }`}
                    />
                    {selectedMessage.isStarred ? 'Yıldızı Kaldır' : 'Yıldızla'}
                  </button>

                  {selectedMessage.labelIds.includes('INBOX') && (
                    <button
                      type="button"
                      onClick={() => requestArchiveConfirmation(selectedMessage)}
                      className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 px-2.5 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                    >
                      <Archive className="h-3.5 w-3.5" />
                      Arşivle
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => requestTrashConfirmation(selectedMessage)}
                    className="inline-flex items-center gap-1 rounded-lg border border-red-200 px-2.5 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 dark:border-red-900/60 dark:text-red-400 dark:hover:bg-red-950/40"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    Sil
                  </button>
                </div>
              </div>

              <div className="mt-4 max-h-[420px] flex-1 overflow-y-auto whitespace-pre-wrap break-words text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
                {selectedMessage.bodyText || selectedMessage.snippet || '(Mesaj içeriği boş)'}
              </div>
            </div>
          )}
        </section>
      </div>

      {/* Zorunlu İşlem Onay Modalı */}
      <GmailConfirmModal
        pending={pendingConfirm}
        busy={confirmBusy}
        onCancel={() => setPendingConfirm(null)}
        onExecute={() => void executePendingConfirmation()}
      />
    </div>
  );
};
