import React, { useEffect } from 'react';
import { X, Copy, Check, Plus, Minus } from 'lucide-react';
import { Brand, PhoneModel } from '../types/phone';

interface PhoneDetailModalProps {
  phone: PhoneModel | null;
  brand: Brand | undefined;
  isCompared: boolean;
  canAddCompare: boolean;
  copiedCode: string | null;
  onClose: () => void;
  onToggleCompare: (phoneId: string) => void;
  onCopyCode: (code: string) => void;
}

export const PhoneDetailModal: React.FC<PhoneDetailModalProps> = ({
  phone,
  brand,
  isCompared,
  canAddCompare,
  copiedCode,
  onClose,
  onToggleCompare,
  onCopyCode,
}) => {
  useEffect(() => {
    if (!phone) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [phone, onClose]);

  if (!phone) return null;

  const specGroups = [
    {
      title: 'Ekran ve Tasarım',
      rows: [
        ['Ekran Boyutu', phone.specs.display.size],
        ['Panel Teknolojisi', phone.specs.display.panel],
        ['Çözünürlük', phone.specs.display.resolution],
        ['Yenileme Hızı', phone.specs.display.refreshRate],
        ['Tepe Parlaklık', phone.specs.display.peakBrightness],
        ['Cam Koruması', phone.specs.display.protection],
      ],
    },
    {
      title: 'İşlemci ve Bellek',
      rows: [
        ['Yonga Seti (SoC)', phone.specs.performance.chipset],
        ['İşlemci (CPU)', phone.specs.performance.cpu],
        ['Grafik Birimi (GPU)', phone.specs.performance.gpu],
        ['Üretim Süreci', phone.specs.performance.processNode],
        ['RAM Seçenekleri', phone.specs.memory.ram],
        ['Depolama', `${phone.specs.memory.storage} (${phone.specs.memory.storageType})`],
        ['Genişletilebilir Hafıza', phone.specs.memory.expandable],
      ],
    },
    {
      title: 'Kamera Sistemi',
      rows: [
        ['Ana Kamera', phone.specs.camera.main],
        ['Ultra Geniş Açı', phone.specs.camera.ultrawide],
        ['Telefoto / Zoom', phone.specs.camera.telephoto],
        ['Ön Kamera', phone.specs.camera.front],
        ['Video Kayıt', phone.specs.camera.video],
        ...(phone.specs.camera.opticsNote
          ? [['Optik Notu', phone.specs.camera.opticsNote]]
          : []),
      ],
    },
    {
      title: 'Batarya, Gövde ve Yazılım',
      rows: [
        ['Pil Kapasitesi', phone.specs.battery.capacity],
        ['Kablolu Şarj', phone.specs.battery.wiredCharging],
        ['Kablosuz Şarj', phone.specs.battery.wirelessCharging],
        ['Ters Şarj', phone.specs.battery.reverseCharging],
        ['Boyut ve Ağırlık', `${phone.specs.buildAndConnectivity.dimensions} · ${phone.specs.buildAndConnectivity.weight}`],
        ['Malzeme', phone.specs.buildAndConnectivity.materials],
        ['IP Dayanıklılık', phone.specs.buildAndConnectivity.waterResistance],
        ['Bağlantı', phone.specs.buildAndConnectivity.connectivity],
        ['Ayırt Edici Donanım', phone.specs.buildAndConnectivity.audioAndExtras],
        ['İşletim Sistemi', phone.specs.software.osAtLaunch],
        ['Güncelleme Desteği', phone.specs.software.updatePolicy],
      ],
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-[2px]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${phone.name} teknik özellikleri`}
    >
      <div
        className="oled-surface relative h-full w-full max-w-3xl overflow-y-auto border-l border-zinc-200 bg-white p-6 sm:p-8 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-zinc-200 pb-6 dark:border-zinc-800">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="font-medium text-zinc-900 dark:text-zinc-200">
                {brand?.name ?? phone.brandId}
              </span>
              <span aria-hidden="true">·</span>
              <span>{phone.series}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">{phone.releaseYear}</span>
              <span aria-hidden="true">·</span>
              <span>{phone.segment}</span>
            </div>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
              {phone.name}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {phone.summary}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Detay penceresini kapat"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 pb-4 dark:border-zinc-800">
          <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400 tabular-nums">
            {phone.highlightSpec}
          </p>
          <button
            type="button"
            disabled={!isCompared && !canAddCompare}
            onClick={() => onToggleCompare(phone.id)}
            className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
              isCompared
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : canAddCompare
                ? 'border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800'
                : 'cursor-not-allowed border border-zinc-200 text-zinc-400 dark:border-zinc-800 dark:text-zinc-600'
            }`}
          >
            {isCompared ? (
              <>
                <Minus className="h-3.5 w-3.5" />
                Karşılaştırmadan Çıkar
              </>
            ) : (
              <>
                <Plus className="h-3.5 w-3.5" />
                Karşılaştırmaya Ekle
              </>
            )}
          </button>
        </div>

        {/* Teknik Özellikler */}
        <section className="mt-8 space-y-8">
          <div>
            <h3 className="font-display text-lg font-bold text-zinc-950 dark:text-white">
              Tam Teknik Özellikler
            </h3>
            <div className="mt-4 space-y-6">
              {specGroups.map((group) => (
                <div
                  key={group.title}
                  className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800"
                >
                  <div className="border-b border-zinc-200 bg-zinc-50 px-4 py-2.5 text-xs font-semibold text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-100">
                    {group.title}
                  </div>
                  <dl className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    {group.rows.map(([label, val]) => (
                      <div
                        key={label}
                        className="grid grid-cols-1 gap-1 px-4 py-3 text-sm sm:grid-cols-3 sm:gap-4"
                      >
                        <dt className="font-medium text-zinc-500 dark:text-zinc-400">
                          {label}
                        </dt>
                        <dd className="sm:col-span-2 font-mono text-[13px] text-zinc-900 dark:text-zinc-100 tabular-nums">
                          {val}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>

          {/* Modele Özel Gizli Özellikler */}
          <div>
            <h3 className="font-display text-lg font-bold text-zinc-950 dark:text-white">
              Bu Modele Özel Gizli Özellikler ({phone.modelHiddenFeatures.length})
            </h3>
            <div className="mt-3 divide-y divide-zinc-200 rounded-xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
              {phone.modelHiddenFeatures.map((feat) => (
                <div key={feat.id} className="p-4 sm:p-5">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {feat.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>Modele Özel</span>
                  </div>
                  <h4 className="mt-1 font-display text-base font-semibold text-zinc-950 dark:text-white">
                    {feat.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {feat.description}
                  </p>
                  <p className="mt-2 font-mono text-xs text-zinc-800 dark:text-zinc-200">
                    Nasıl Açılır: {feat.howToAccess}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Marka İşletim Sistemi Gizli Özellikleri */}
          {brand && brand.osHiddenFeatures.length > 0 && (
            <div>
              <h3 className="font-display text-lg font-bold text-zinc-950 dark:text-white">
                {brand.name} ({brand.osName}) Genel Gizli Özellikleri
              </h3>
              <div className="mt-3 divide-y divide-zinc-200 rounded-xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
                {brand.osHiddenFeatures.map((feat) => (
                  <div key={feat.id} className="p-4 sm:p-5">
                    <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                      {feat.category}
                    </div>
                    <h4 className="mt-1 font-display text-base font-semibold text-zinc-950 dark:text-white">
                      {feat.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                      {feat.description}
                    </p>
                    <p className="mt-2 font-mono text-xs text-zinc-800 dark:text-zinc-200">
                      Yol: {feat.howToAccess}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Markanın Gizli Servis Kodları */}
          {brand && brand.secretCodes.length > 0 && (
            <div className="pb-6">
              <h3 className="font-display text-lg font-bold text-zinc-950 dark:text-white">
                {brand.name} Gizli Arama ve Servis Kodları
              </h3>
              <div className="mt-3 divide-y divide-zinc-200 rounded-xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
                {brand.secretCodes.map((sc) => (
                  <div
                    key={sc.code}
                    className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <code className="font-mono text-sm font-semibold text-blue-600 dark:text-blue-400">
                          {sc.code}
                        </code>
                        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                          {sc.title}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                        {sc.description}
                      </p>
                      {sc.caution && (
                        <p className="mt-1 text-xs font-medium text-amber-700 dark:text-amber-400">
                          Uyarı: {sc.caution}
                        </p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => onCopyCode(sc.code)}
                      className="inline-flex items-center gap-1.5 self-start rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800 whitespace-nowrap shrink-0"
                    >
                      {copiedCode === sc.code ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-600" />
                          Kopyalandı
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          Kodu Kopyala
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
