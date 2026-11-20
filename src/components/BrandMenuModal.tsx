import React, { useEffect, useState } from 'react';
import { X, ArrowLeft, Copy, Check, Plus, Minus, ArrowUpRight, ChevronDown, ArrowUpDown, Smartphone, Tablet } from 'lucide-react';
import { Brand, PhoneModel } from '../types/phone';
import { isTabletModel } from '../data';

interface BrandMenuModalProps {
  brand: Brand | null;
  phones: PhoneModel[];
  compareIds: string[];
  copiedCode: string | null;
  yearSortOrder: 'desc' | 'asc';
  onToggleYearSort: () => void;
  onClose: () => void;
  onSelectPhone: (phone: PhoneModel) => void;
  onToggleCompare: (phoneId: string) => void;
  onCopyCode: (code: string) => void;
}

type BrandMenuTab = 'models' | 'hidden' | 'codes';

export const BrandMenuModal: React.FC<BrandMenuModalProps> = ({
  brand,
  phones,
  compareIds,
  copiedCode,
  yearSortOrder,
  onToggleYearSort,
  onClose,
  onSelectPhone,
  onToggleCompare,
  onCopyCode,
}) => {
  const [activeInnerTab, setActiveInnerTab] = useState<BrandMenuTab>('models');
  const [expandedModelIds, setExpandedModelIds] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setActiveInnerTab('models');
    setExpandedModelIds({});
  }, [brand?.id]);

  useEffect(() => {
    if (!brand) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [brand, onClose]);

  if (!brand) return null;

  const toggleModelInline = (id: string) => {
    setExpandedModelIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div
      className="fixed inset-0 z-40 flex justify-end bg-black/60 backdrop-blur-[2px]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${brand.name} modelleri ve özellikleri menüsü`}
    >
      <div
        className="oled-surface relative flex h-full w-full max-w-4xl flex-col overflow-hidden border-l border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Üst Sabit Menü Başlığı */}
        <div className="border-b border-zinc-200 bg-white px-5 py-4 sm:px-8 sm:py-5 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex items-start justify-between gap-4">
            <div>
              <button
                type="button"
                onClick={onClose}
                className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Tüm Markalara Dön
              </button>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                  {brand.name}
                </h2>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {brand.country} · {brand.osName}
                </span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {brand.ecosystemSummary}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label={`${brand.name} menüsünü kapat`}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Menü İçi Sekmeler */}
          <div
            role="tablist"
            aria-label={`${brand.name} menü sekmeleri`}
            className="mt-4 flex flex-wrap items-center gap-1 rounded-lg bg-zinc-100 p-1 w-fit dark:bg-zinc-900"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeInnerTab === 'models'}
              onClick={() => setActiveInnerTab('models')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors tabular-nums ${
                activeInnerTab === 'models'
                  ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-white'
                  : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              Modeller ({phones.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeInnerTab === 'hidden'}
              onClick={() => setActiveInnerTab('hidden')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors tabular-nums ${
                activeInnerTab === 'hidden'
                  ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-white'
                  : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              OS Gizli Özellikler ({brand.osHiddenFeatures.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeInnerTab === 'codes'}
              onClick={() => setActiveInnerTab('codes')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors tabular-nums ${
                activeInnerTab === 'codes'
                  ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-white'
                  : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              Gizli Kodlar ({brand.secretCodes.length})
            </button>
          </div>
        </div>

        {/* Kaydırılabilir Menü Gövdesi */}
        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-8 sm:py-6">
          {activeInnerTab === 'models' && (
            <div className="space-y-6">
              {phones.length > 1 && (
                <div className="flex flex-wrap items-center justify-between gap-2 pb-1">
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 tabular-nums">
                    Çıkış yılına göre sıralı ({yearSortOrder === 'desc' ? 'En Yeni → En Eski' : 'En Eski → En Yeni'})
                  </span>
                  <button
                    type="button"
                    onClick={onToggleYearSort}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 whitespace-nowrap shrink-0 tabular-nums"
                  >
                    <ArrowUpDown className="h-3.5 w-3.5" />
                    {yearSortOrder === 'desc' ? 'Yıl: Yeni → Eski' : 'Yıl: Eski → Yeni'}
                  </button>
                </div>
              )}

              {phones.length === 0 ? (
                <p className="py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
                  Seçili dönem veya arama filtresine uyan model bulunamadı.
                </p>
              ) : (() => {
                const phoneModels = phones.filter((p) => !isTabletModel(p));
                const tabletModels = phones.filter((p) => isTabletModel(p));

                const renderDeviceCard = (phone: PhoneModel) => {
                  const isExpanded = Boolean(expandedModelIds[phone.id]);
                  const isCompared = compareIds.includes(phone.id);
                  const canAddCompare = compareIds.length < 3;

                  return (
                    <article
                      key={phone.id}
                      className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50/40 dark:border-zinc-800 dark:bg-zinc-900/40"
                    >
                      <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                        <button
                          type="button"
                          onClick={() => toggleModelInline(phone.id)}
                          aria-expanded={isExpanded}
                          className="group min-w-0 flex-1 text-left focus:outline-none"
                        >
                          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 tabular-nums">
                            <span className="font-mono font-semibold text-zinc-900 dark:text-zinc-200">
                              {phone.releaseYear}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>{phone.series}</span>
                            <span aria-hidden="true">·</span>
                            <span>{phone.segment}</span>
                            <span aria-hidden="true">·</span>
                            <span>{phone.modelHiddenFeatures.length} Gizli Özellik</span>
                          </div>
                          <h3 className="mt-1 font-display text-lg font-bold text-zinc-950 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 transition-colors">
                            {phone.name}
                          </h3>
                          <p className="mt-0.5 font-mono text-xs text-zinc-600 dark:text-zinc-400 tabular-nums">
                            {phone.highlightSpec}
                          </p>
                        </button>

                        <div className="flex flex-wrap items-center gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => toggleModelInline(phone.id)}
                            aria-expanded={isExpanded}
                            className="inline-flex items-center gap-1 rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-xs font-medium text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 whitespace-nowrap shrink-0"
                          >
                            {isExpanded ? 'Özellikleri Gizle' : 'Özellikleri Göster'}
                            <ChevronDown
                              className={`h-3.5 w-3.5 transition-transform ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          <button
                            type="button"
                            onClick={() => onSelectPhone(phone)}
                            className="inline-flex items-center gap-1 rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 whitespace-nowrap shrink-0"
                          >
                            Tam Detay
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </button>

                          <button
                            type="button"
                            disabled={!isCompared && !canAddCompare}
                            onClick={() => onToggleCompare(phone.id)}
                            className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                              isCompared
                                ? 'bg-blue-600 text-white'
                                : canAddCompare
                                ? 'border border-zinc-300 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800'
                                : 'cursor-not-allowed border border-zinc-200 text-zinc-400 dark:border-zinc-800 dark:text-zinc-600'
                            }`}
                          >
                            {isCompared ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                            Kıyasla
                          </button>
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="border-t border-zinc-200 bg-white p-4 sm:p-5 dark:border-zinc-800 dark:bg-zinc-950">
                          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                            {phone.summary}
                          </p>

                          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 text-xs">
                            <div className="border-t border-zinc-200 pt-2.5 dark:border-zinc-800">
                              <span className="font-semibold text-zinc-500 dark:text-zinc-400">
                                Ekran Boyutu & Teknolojisi
                              </span>
                              <p className="mt-1 font-mono text-zinc-900 dark:text-zinc-100 tabular-nums">
                                {phone.specs.display.size} · {phone.specs.display.panel}
                              </p>
                              <p className="mt-0.5 font-mono text-[11px] text-zinc-500 dark:text-zinc-400 tabular-nums">
                                {phone.specs.display.resolution} · {phone.specs.display.refreshRate} · {phone.specs.display.peakBrightness}
                              </p>
                            </div>

                            <div className="border-t border-zinc-200 pt-2.5 dark:border-zinc-800">
                              <span className="font-semibold text-zinc-500 dark:text-zinc-400">
                                İşlemci, RAM & Depolama
                              </span>
                              <p className="mt-1 font-mono text-zinc-900 dark:text-zinc-100 tabular-nums">
                                {phone.specs.performance.chipset} ({phone.specs.performance.processNode})
                              </p>
                              <p className="mt-0.5 font-mono text-[11px] text-zinc-500 dark:text-zinc-400 tabular-nums">
                                RAM: {phone.specs.memory.ram} · Depolama: {phone.specs.memory.storage}
                              </p>
                            </div>

                            <div className="border-t border-zinc-200 pt-2.5 dark:border-zinc-800 sm:col-span-2">
                              <span className="font-semibold text-zinc-500 dark:text-zinc-400">
                                Arka & Ön Kamera (MP, Diyafram, Zoom, Video)
                              </span>
                              <p className="mt-1 font-mono text-zinc-900 dark:text-zinc-100 tabular-nums">
                                Ana: {phone.specs.camera.main} | Ultra Geniş: {phone.specs.camera.ultrawide} | Telefoto: {phone.specs.camera.telephoto}
                              </p>
                              <p className="mt-0.5 font-mono text-[11px] text-zinc-500 dark:text-zinc-400 tabular-nums">
                                Ön Kamera: {phone.specs.camera.front} · Video: {phone.specs.camera.video}
                              </p>
                            </div>

                            <div className="border-t border-zinc-200 pt-2.5 dark:border-zinc-800">
                              <span className="font-semibold text-zinc-500 dark:text-zinc-400">
                                Pil Kapasitesi & Şarj Hızı
                              </span>
                              <p className="mt-1 font-mono text-zinc-900 dark:text-zinc-100 tabular-nums">
                                {phone.specs.battery.capacity}
                              </p>
                              <p className="mt-0.5 font-mono text-[11px] text-zinc-500 dark:text-zinc-400 tabular-nums">
                                Kablolu: {phone.specs.battery.wiredCharging} · Kablosuz: {phone.specs.battery.wirelessCharging}
                              </p>
                            </div>

                            <div className="border-t border-zinc-200 pt-2.5 dark:border-zinc-800">
                              <span className="font-semibold text-zinc-500 dark:text-zinc-400">
                                IP Dayanıklılık, İşletim Sistemi & Öne Çıkanlar
                              </span>
                              <p className="mt-1 font-mono text-zinc-900 dark:text-zinc-100 tabular-nums">
                                {phone.specs.buildAndConnectivity.waterResistance} · {phone.specs.software.osAtLaunch}
                              </p>
                              <p className="mt-0.5 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                                {phone.specs.buildAndConnectivity.audioAndExtras}
                              </p>
                            </div>
                          </div>

                          {phone.modelHiddenFeatures.length > 0 && (
                            <div className="mt-4 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                              <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                                {phone.name} — Modele Özel Gizli Özellikler
                              </h4>
                              <div className="mt-2.5 grid grid-cols-1 gap-3 md:grid-cols-2">
                                {phone.modelHiddenFeatures.map((feat) => (
                                  <div
                                    key={feat.id}
                                    className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-800"
                                  >
                                    <div className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                                      {feat.category}
                                    </div>
                                    <div className="mt-0.5 text-sm font-semibold text-zinc-950 dark:text-white">
                                      {feat.title}
                                    </div>
                                    <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                                      {feat.description}
                                    </p>
                                    <p className="mt-1.5 font-mono text-[11px] text-zinc-700 dark:text-zinc-300">
                                      Nasıl Açılır: {feat.howToAccess}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </article>
                  );
                };

                return (
                  <div className="space-y-8">
                    {phoneModels.length > 0 && (
                      <section className="space-y-3">
                        <div className="flex items-center gap-2 border-b border-zinc-200 pb-2 dark:border-zinc-800">
                          <Smartphone className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                          <h3 className="font-display text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100 tabular-nums">
                            Telefon Modelleri ({phoneModels.length})
                          </h3>
                        </div>
                        <div className="space-y-3">
                          {phoneModels.map(renderDeviceCard)}
                        </div>
                      </section>
                    )}

                    {tabletModels.length > 0 && (
                      <section className="space-y-3">
                        <div className="flex items-center justify-between gap-2 border-b border-zinc-200 pb-2 dark:border-zinc-800">
                          <div className="flex items-center gap-2">
                            <Tablet className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            <h3 className="font-display text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100 tabular-nums">
                              Tablet Modelleri ({tabletModels.length})
                            </h3>
                          </div>
                          <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                            {brand.name} Tablet Serisi
                          </span>
                        </div>
                        <div className="space-y-3">
                          {tabletModels.map(renderDeviceCard)}
                        </div>
                      </section>
                    )}
                  </div>
                );
              })()}
            </div>
          )}

          {activeInnerTab === 'hidden' && (
            <div className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
              {brand.osHiddenFeatures.map((feat) => (
                <div key={feat.id} className="p-4 sm:p-5">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {feat.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{brand.osName}</span>
                  </div>
                  <h3 className="mt-1 font-display text-base font-bold text-zinc-950 dark:text-white">
                    {feat.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {feat.description}
                  </p>
                  <p className="mt-2 font-mono text-xs text-zinc-800 dark:text-zinc-200">
                    Nasıl Açılır: {feat.howToAccess}
                  </p>
                  {feat.tip && (
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      İpucu: {feat.tip}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeInnerTab === 'codes' && (
            <div className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
              {brand.secretCodes.map((sc) => (
                <div
                  key={sc.code}
                  className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <code className="font-mono text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {sc.code}
                      </code>
                      <span className="text-sm font-semibold text-zinc-950 dark:text-white">
                        {sc.title}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {sc.description}
                    </p>
                    {sc.caution && (
                      <p className="mt-1 text-xs font-medium text-amber-700 dark:text-amber-400">
                        Dikkat: {sc.caution}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => onCopyCode(sc.code)}
                    className="inline-flex items-center gap-1.5 self-start rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800 whitespace-nowrap shrink-0"
                  >
                    {copiedCode === sc.code ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        Kopyalandı
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        Kopyala
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
