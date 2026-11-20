import React, { useEffect } from 'react';
import { Mail, ShieldCheck, Share2, Inbox, X } from 'lucide-react';
import { GoogleSignInButton } from './GoogleSignInButton';

interface GmailOnboardingModalProps {
  open: boolean;
  loading: boolean;
  error: string | null;
  onConnect: () => void;
  onSkip: () => void;
}

export const GmailOnboardingModal: React.FC<GmailOnboardingModalProps> = ({
  open,
  loading,
  error,
  onConnect,
  onSkip,
}) => {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !loading) {
        onSkip();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, loading, onSkip]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label="TelefonLAB Gmail bağlantısı"
      onClick={() => {
        if (!loading) onSkip();
      }}
    >
      <div
        className="oled-surface relative w-full max-w-lg rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          disabled={loading}
          onClick={onSkip}
          aria-label="Kapat ve Gmail bağlantısını atla"
          className="absolute right-4 top-4 rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-50 dark:hover:bg-zinc-900 dark:hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
              TelefonLAB İlk Açılış Kurulumu
            </div>
            <h2 className="font-display text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Gmail Hesabınızı Bağlamak İster misiniz?
            </h2>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          TelefonLAB’ı ilk kez açıyorsunuz. İsterseniz Google hesabınızla Gmail’i bağlayarak gelen kutunuzu uygulama içinden yönetebilir veya cihaz özelliklerini doğrudan e-posta olarak paylaşabilirsiniz.
        </p>

        <div className="mt-5 space-y-2.5 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-xs dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="flex items-start gap-2.5">
            <Inbox className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
            <div>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                Gelen Kutusu ve Yanıtlama:
              </span>{' '}
              <span className="text-zinc-600 dark:text-zinc-400">
                E-postalarınızı okuyun, etiketlere göre filtreleyin ve yeni mesaj gönderin.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Share2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
            <div>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                Tek Tıkla Cihaz Özeti Gönderme:
              </span>{' '}
              <span className="text-zinc-600 dark:text-zinc-400">
                Telefon/tablet teknik özelliklerini ve karşılaştırma tablolarını doğrudan Gmail üzerinden iletin.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <div>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                Kontrol Sizde:
              </span>{' '}
              <span className="text-zinc-600 dark:text-zinc-400">
                E-posta gönderme veya silme işlemleri her zaman açık onayınız olmadan yapılmaz.
              </span>
            </div>
          </div>
        </div>

        {error && (
          <div
            role="alert"
            className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300"
          >
            {error}
          </div>
        )}

        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
          <GoogleSignInButton
            onClick={onConnect}
            loading={loading}
            label="Gmail ile Bağlan (Google)"
            className="w-full sm:w-auto"
          />

          <button
            type="button"
            disabled={loading}
            onClick={onSkip}
            className="w-full sm:w-auto rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 whitespace-nowrap"
          >
            Şimdilik Atla (Gmail’siz Devam Et)
          </button>
        </div>
      </div>
    </div>
  );
};
