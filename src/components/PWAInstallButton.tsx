import React, { useEffect, useState } from 'react';
import { Download, Smartphone, Tablet, X, Copy, Check, Share } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, isInIframe, install } = usePWAInstall();
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  useEffect(() => {
    if (!showGuideModal) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowGuideModal(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [showGuideModal]);

  // Zaten tablet/telefon ana ekranından uygulama olarak açıldıysa gizle
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = () => {
    if (isInstallable) {
      void install();
      return;
    }
    setShowGuideModal(true);
  };

  const handleCopyCurrentUrl = () => {
    const url = window.location.href;
    navigator.clipboard?.writeText(url).catch(() => {});
    setCopiedUrl(true);
    window.setTimeout(() => setCopiedUrl(false), 2000);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleInstallClick}
        className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
          isInstallable
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800'
        }`}
        title="TelefonLAB’ı tablet veya telefonunuza uygulama olarak yükleyin"
      >
        <Download className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Tablete Yükle</span>
        <span className="sm:hidden">Yükle</span>
      </button>

      {showGuideModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          aria-label="TelefonLAB tablet kurulum rehberi"
          onClick={() => setShowGuideModal(false)}
        >
          <div
            className="oled-surface relative w-full max-w-lg rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowGuideModal(false)}
              aria-label="Kurulum rehberini kapat"
              className="absolute right-4 top-4 rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                <Tablet className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display text-lg font-bold text-zinc-950 dark:text-white">
                  TelefonLAB’ı Tabletinize Yükleyin
                </h2>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Play Store gerektirmeden çevrimdışı çalışan tam ekran uygulama olarak kurulur.
                </p>
              </div>
            </div>

            {isInIframe && (
              <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-200">
                Şu anda önizleme penceresi içindesiniz. Doğrudan kurulum için aşağıdaki adresi tabletinizin tarayıcısında (Chrome veya Safari) tam sekmede açın:
                <div className="mt-2 flex items-center gap-2">
                  <code className="flex-1 truncate rounded border border-amber-300/70 bg-white/80 px-2 py-1 font-mono text-[11px] text-zinc-900 dark:border-amber-800 dark:bg-zinc-900 dark:text-zinc-100">
                    {typeof window !== 'undefined' ? window.location.origin : ''}
                  </code>
                  <button
                    type="button"
                    onClick={handleCopyCurrentUrl}
                    className="inline-flex items-center gap-1 rounded-md bg-zinc-900 px-2.5 py-1 text-[11px] font-semibold text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950"
                  >
                    {copiedUrl ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400 dark:text-emerald-600" />
                        Kopyalandı
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        Kopyala
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            <div className="mt-4 space-y-3 text-xs">
              {(!isIOS || isInIframe) && (
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <div className="flex items-center gap-2 font-display text-sm font-bold text-zinc-950 dark:text-white">
                    <Smartphone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    Android Tablet / Telefon (Chrome, Samsung Internet)
                  </div>
                  <ol className="mt-2 list-decimal space-y-1.5 pl-4 text-zinc-600 dark:text-zinc-300">
                    <li>Uygulama adresini tabletinizdeki <strong>Chrome</strong> tarayıcısında açın.</li>
                    <li>Sağ üstteki üç nokta menüsüne (<strong>⋮</strong>) dokunun.</li>
                    <li>
                      <strong>Ana ekrana ekle</strong> veya <strong>Uygulamayı yükle</strong> seçeneğine basın.
                    </li>
                    <li>
                      <strong>Yükle</strong> onayını verdiğinizde TelefonLAB ana ekranınıza gerçek uygulama ikonuyla eklenir.
                    </li>
                  </ol>
                </div>
              )}

              {(isIOS || isInIframe) && (
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <div className="flex items-center gap-2 font-display text-sm font-bold text-zinc-950 dark:text-white">
                    <Share className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    iPad / iPhone (Safari)
                  </div>
                  <ol className="mt-2 list-decimal space-y-1.5 pl-4 text-zinc-600 dark:text-zinc-300">
                    <li>Uygulama adresini <strong>Safari</strong> tarayıcısında açın.</li>
                    <li>
                      Üst (veya alt) araç çubuğundaki <strong>Paylaş</strong> simgesine dokunun.
                    </li>
                    <li>
                      Aşağı kaydırıp <strong>Ana Ekrana Ekle</strong> (Add to Home Screen) seçeneğini seçin ve <strong>Ekle</strong>’ye dokunun.
                    </li>
                  </ol>
                </div>
              )}
            </div>

            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setShowGuideModal(false)}
                className="rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                Anladım
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
