import { useEffect, useMemo, useState } from 'react';
import { Search, Sun, Moon, Contrast, ChevronRight, X, ArrowUpDown } from 'lucide-react';
import { ALL_BRANDS, ALL_PHONES, isTabletModel } from './data';
import { Brand, PhoneEra, PhoneModel, ThemeMode } from './types/phone';
import { ActiveTab, Header } from './components/Header';
import { BrandMenuModal } from './components/BrandMenuModal';
import { AllModelsTable } from './components/AllModelsTable';
import { HiddenFeaturesView } from './components/HiddenFeaturesView';
import { SecretCodesView } from './components/SecretCodesView';
import { CompareView } from './components/CompareView';
import { PhoneDetailModal } from './components/PhoneDetailModal';

const HERO_IMG = '/src/assets/images/hero_flagship_lineup_1795182943451.jpg';
const CAMERA_IMG = '/src/assets/images/camera_module_macro_1795182942783.jpg';
const DISPLAY_IMG = '/src/assets/images/display_engineering_detail_1795182942776.jpg';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('brands');
  const [searchQuery, setSearchQuery] = useState('');
  const [eraFilter, setEraFilter] = useState<'all' | PhoneEra>('all');
  const [yearSortOrder, setYearSortOrder] = useState<'desc' | 'asc'>('desc');
  const [theme, setTheme] = useState<ThemeMode>(() => {
    try {
      const saved = window.localStorage.getItem('cihaz-atlasi-theme');
      if (saved === 'light' || saved === 'dark' || saved === 'oled') return saved;
    } catch {
      // Ignore storage access restrictions in sandboxed iframes
    }
    return 'light';
  });

  const [activeBrandId, setActiveBrandId] = useState<string | null>(null);

  const [compareIds, setCompareIds] = useState<string[]>([
    'iphone-17-pro-max',
    'galaxy-s26-ultra',
  ]);
  const [selectedPhone, setSelectedPhone] = useState<PhoneModel | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [imgErrorMap, setImgErrorMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'oled');
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'oled') {
      root.classList.add('dark', 'oled');
    }
    try {
      window.localStorage.setItem('cihaz-atlasi-theme', theme);
    } catch {
      // Ignore storage write errors in restricted contexts
    }
  }, [theme]);

  const handleCopyCode = (code: string) => {
    navigator.clipboard?.writeText(code).catch(() => {});
    setCopiedCode(code);
    window.setTimeout(() => {
      setCopiedCode((curr) => (curr === code ? null : curr));
    }, 1800);
  };

  const handleToggleCompare = (phoneId: string) => {
    setCompareIds((prev) => {
      if (prev.includes(phoneId)) {
        return prev.filter((id) => id !== phoneId);
      }
      if (prev.length >= 3) return prev;
      return [...prev, phoneId];
    });
  };

  const filteredBrandSections = useMemo(() => {
    const q = searchQuery.trim().toLocaleLowerCase('tr');

    return ALL_BRANDS.map((brand) => {
      const brandMatches =
        q.length > 0 &&
        (brand.name.toLocaleLowerCase('tr').includes(q) ||
          brand.osName.toLocaleLowerCase('tr').includes(q) ||
          brand.osHiddenFeatures.some(
            (f) =>
              f.title.toLocaleLowerCase('tr').includes(q) ||
              f.description.toLocaleLowerCase('tr').includes(q)
          ) ||
          brand.secretCodes.some(
            (c) =>
              c.code.toLocaleLowerCase('tr').includes(q) ||
              c.title.toLocaleLowerCase('tr').includes(q)
          ));

      const brandPhones = ALL_PHONES.filter((p) => {
        if (p.brandId !== brand.id) return false;
        if (eraFilter !== 'all' && p.era !== eraFilter) return false;
        if (!q || brandMatches) return true;
        return (
          p.name.toLocaleLowerCase('tr').includes(q) ||
          p.series.toLocaleLowerCase('tr').includes(q) ||
          p.summary.toLocaleLowerCase('tr').includes(q) ||
          p.specs.performance.chipset.toLocaleLowerCase('tr').includes(q) ||
          p.specs.camera.main.toLocaleLowerCase('tr').includes(q) ||
          p.specs.display.panel.toLocaleLowerCase('tr').includes(q) ||
          p.modelHiddenFeatures.some(
            (f) =>
              f.title.toLocaleLowerCase('tr').includes(q) ||
              f.description.toLocaleLowerCase('tr').includes(q)
          )
        );
      });

      const sortedBrandPhones = [...brandPhones].sort((a, b) =>
        yearSortOrder === 'desc'
          ? b.releaseYear - a.releaseYear || a.name.localeCompare(b.name, 'tr')
          : a.releaseYear - b.releaseYear || a.name.localeCompare(b.name, 'tr')
      );

      return {
        brand,
        phones: sortedBrandPhones,
        shouldShow:
          sortedBrandPhones.length > 0 || (brandMatches && eraFilter === 'all'),
      };
    }).filter((section) => section.shouldShow);
  }, [searchQuery, eraFilter, yearSortOrder]);

  const activeBrandSection = useMemo(() => {
    if (!activeBrandId) return null;
    const found = filteredBrandSections.find((s) => s.brand.id === activeBrandId);
    if (found) return found;
    const brandObj: Brand | undefined = ALL_BRANDS.find((b) => b.id === activeBrandId);
    if (!brandObj) return null;
    const fallbackPhones = ALL_PHONES.filter((p) => p.brandId === brandObj.id).sort((a, b) =>
      yearSortOrder === 'desc'
        ? b.releaseYear - a.releaseYear || a.name.localeCompare(b.name, 'tr')
        : a.releaseYear - b.releaseYear || a.name.localeCompare(b.name, 'tr')
    );
    return {
      brand: brandObj,
      phones: fallbackPhones,
      shouldShow: true,
    };
  }, [activeBrandId, filteredBrandSections, yearSortOrder]);

  const comparePhones = useMemo(
    () =>
      compareIds
        .map((id) => ALL_PHONES.find((p) => p.id === id))
        .filter((p): p is PhoneModel => Boolean(p)),
    [compareIds]
  );

  const totalHiddenFeatureCount = useMemo(() => {
    const osCount = ALL_BRANDS.reduce((s, b) => s + b.osHiddenFeatures.length, 0);
    const modelCount = ALL_PHONES.reduce(
      (s, p) => s + p.modelHiddenFeatures.length,
      0
    );
    return osCount + modelCount;
  }, []);

  const totalCodeCount = useMemo(
    () => ALL_BRANDS.reduce((s, b) => s + b.secretCodes.length, 0),
    []
  );

  const totalPhoneCount = useMemo(
    () => ALL_PHONES.filter((p) => !isTabletModel(p)).length,
    []
  );

  const totalTabletCount = useMemo(
    () => ALL_PHONES.filter((p) => isTabletModel(p)).length,
    []
  );

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-zinc-100">
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        compareCount={comparePhones.length}
      />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {activeTab === 'brands' && (
          <section className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-12 items-stretch">
            <div className="oled-surface flex flex-col justify-center rounded-xl border border-zinc-200 bg-white p-5 sm:p-6 lg:col-span-8 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 tabular-nums">
                {ALL_BRANDS.length} Marka · {totalPhoneCount} Telefon · {totalTabletCount} Tablet ·{' '}
                {totalHiddenFeatureCount} Gizli Özellik · {totalCodeCount} Servis Kodu
              </div>
              <h1 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white text-balance">
                Tüm Telefon ve Tablet Markaları — Seçtiğiniz Markanın Menüsünü Açın
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Herhangi bir markanın üzerine bastığınızda o markaya özel menü açılır; içeride tüm telefon modelleri ve altlarında tablet serileri, teknik özellikler, gizli ayarlar ve servis kodları yer alır.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 lg:col-span-4">
              <div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900">
                {!imgErrorMap.hero ? (
                  <img
                    src={HERO_IMG}
                    alt="Amiral gemisi akıllı telefonlar"
                    referrerPolicy="no-referrer"
                    onError={() => setImgErrorMap((m) => ({ ...m, hero: true }))}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full min-h-[110px] items-center justify-center bg-zinc-800 text-[11px] text-zinc-300">
                    Amiral
                  </div>
                )}
              </div>
              <div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900">
                {!imgErrorMap.camera ? (
                  <img
                    src={CAMERA_IMG}
                    alt="Periskop kamera lens modülü"
                    referrerPolicy="no-referrer"
                    onError={() => setImgErrorMap((m) => ({ ...m, camera: true }))}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full min-h-[110px] items-center justify-center bg-zinc-800 text-[11px] text-zinc-300">
                    Kamera
                  </div>
                )}
              </div>
              <div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900">
                {!imgErrorMap.display ? (
                  <img
                    src={DISPLAY_IMG}
                    alt="LTPO OLED ekran ve titanyum kasa"
                    referrerPolicy="no-referrer"
                    onError={() => setImgErrorMap((m) => ({ ...m, display: true }))}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full min-h-[110px] items-center justify-center bg-zinc-800 text-[11px] text-zinc-300">
                    Ekran
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Araç Çubuğu: Arama, Dönem Filtresi ve Tema Değiştirici */}
        <div className="oled-surface mb-6 flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-3 sm:p-4 lg:flex-row lg:items-center lg:justify-between dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="relative flex-1 max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Marka, model, işlemci, kamera veya gizli özellik ara..."
              aria-label="Telefon, marka veya gizli özellik ara"
              className="w-full rounded-lg border border-zinc-300 bg-zinc-50 py-2 pl-9 pr-8 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-blue-600 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            />
            {searchQuery && (
              <button
                type="button"
                aria-label="Aramayı temizle"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {activeTab === 'brands' && (
              <>
                <div className="flex items-center gap-1 rounded-lg bg-zinc-100 p-1 dark:bg-zinc-950">
                  {(
                    [
                      ['all', 'Tümü'],
                      ['2025-2026', '2025–2026'],
                      ['2020-2024', '2020–2024'],
                      ['2000-2019', '2000–2019'],
                    ] as const
                  ).map(([val, label]) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setEraFilter(val)}
                      className={`rounded-md px-2.5 py-1 text-xs font-medium whitespace-nowrap shrink-0 transition-colors tabular-nums ${
                        eraFilter === val
                          ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-white'
                          : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setYearSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'))
                  }
                  className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900 whitespace-nowrap shrink-0 tabular-nums"
                  title="Modelleri çıkış yılına göre sırala"
                >
                  <ArrowUpDown className="h-3.5 w-3.5" />
                  {yearSortOrder === 'desc' ? 'Yıl: 2026 → 2000' : 'Yıl: 2000 → 2026'}
                </button>
              </>
            )}

            <div
              role="group"
              aria-label="Görünüm teması seç"
              className="flex items-center gap-1 rounded-lg bg-zinc-100 p-1 dark:bg-zinc-950"
            >
              <button
                type="button"
                onClick={() => setTheme('light')}
                aria-pressed={theme === 'light'}
                className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                  theme === 'light'
                    ? 'bg-white text-zinc-950 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
                }`}
              >
                <Sun className="h-3.5 w-3.5" />
                Aydınlık
              </button>
              <button
                type="button"
                onClick={() => setTheme('dark')}
                aria-pressed={theme === 'dark'}
                className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                  theme === 'dark'
                    ? 'bg-zinc-800 text-white shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
                }`}
              >
                <Moon className="h-3.5 w-3.5" />
                Karanlık
              </button>
              <button
                type="button"
                onClick={() => setTheme('oled')}
                aria-pressed={theme === 'oled'}
                className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                  theme === 'oled'
                    ? 'bg-black text-white ring-1 ring-zinc-700'
                    : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
                }`}
              >
                <Contrast className="h-3.5 w-3.5" />
                OLED
              </button>
            </div>
          </div>
        </div>

        {/* Sekme 1: TÜM MARKALAR (Üzerine basınca yeni menü açılır) */}
        {activeTab === 'brands' && (
          <div className="oled-surface divide-y divide-zinc-200 overflow-hidden rounded-xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/50">
            {filteredBrandSections.length === 0 ? (
              <div className="p-10 text-center">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Arama veya dönem filtrenize uygun marka veya model bulunamadı.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setEraFilter('all');
                  }}
                  className="mt-4 rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white dark:bg-zinc-100 dark:text-zinc-950"
                >
                  Filtreleri Temizle
                </button>
              </div>
            ) : (
              filteredBrandSections.map(({ brand, phones }) => {
                const phoneCount = phones.filter((p) => !isTabletModel(p)).length;
                const tabletCount = phones.filter((p) => isTabletModel(p)).length;
                const totalHidden =
                  brand.osHiddenFeatures.length +
                  phones.reduce((s, p) => s + p.modelHiddenFeatures.length, 0);
                const modelNames = phones
                  .map((p) => `${p.name} (${p.releaseYear})`)
                  .join(' · ');

                return (
                  <button
                    key={brand.id}
                    type="button"
                    onClick={() => setActiveBrandId(brand.id)}
                    className="group flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h2 className="font-display text-lg sm:text-xl font-bold tracking-tight text-zinc-950 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 transition-colors">
                          {brand.name}
                        </h2>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">
                          {brand.country} · {brand.osName}
                        </span>
                      </div>
                      <p className="mt-1 line-clamp-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                        {modelNames || brand.tagline}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 tabular-nums">
                        <span>{phoneCount} Telefon</span>
                        {tabletCount > 0 && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span>{tabletCount} Tablet</span>
                          </>
                        )}
                        <span aria-hidden="true">·</span>
                        <span>{totalHidden} Gizli Özellik</span>
                        <span aria-hidden="true">·</span>
                        <span>{brand.secretCodes.length} Kod</span>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-800 group-hover:border-blue-600 group-hover:text-blue-600 dark:border-zinc-700 dark:text-zinc-200 dark:group-hover:border-blue-400 dark:group-hover:text-blue-400 whitespace-nowrap shrink-0 transition-colors">
                        Menüyü Aç
                        <ChevronRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </button>
                );
              })
            )}
          </div>
        )}

        {activeTab === 'models' && (
          <AllModelsTable
            phones={ALL_PHONES.filter((p) => {
              const q = searchQuery.trim().toLocaleLowerCase('tr');
              if (!q) return true;
              return (
                p.name.toLocaleLowerCase('tr').includes(q) ||
                p.brandId.toLocaleLowerCase('tr').includes(q) ||
                p.specs.performance.chipset.toLocaleLowerCase('tr').includes(q) ||
                p.specs.camera.main.toLocaleLowerCase('tr').includes(q)
              );
            })}
            brands={ALL_BRANDS}
            compareIds={compareIds}
            onSelectPhone={setSelectedPhone}
            onToggleCompare={handleToggleCompare}
          />
        )}

        {activeTab === 'hidden' && (
          <HiddenFeaturesView
            brands={ALL_BRANDS}
            phones={ALL_PHONES}
            searchQuery={searchQuery}
          />
        )}

        {activeTab === 'codes' && (
          <SecretCodesView
            brands={ALL_BRANDS.filter((b) => {
              const q = searchQuery.trim().toLocaleLowerCase('tr');
              if (!q) return true;
              return (
                b.name.toLocaleLowerCase('tr').includes(q) ||
                b.secretCodes.some(
                  (c) =>
                    c.code.toLocaleLowerCase('tr').includes(q) ||
                    c.title.toLocaleLowerCase('tr').includes(q) ||
                    c.description.toLocaleLowerCase('tr').includes(q)
                )
              );
            })}
            copiedCode={copiedCode}
            onCopyCode={handleCopyCode}
          />
        )}

        {activeTab === 'compare' && (
          <CompareView
            selectedPhones={comparePhones}
            allPhones={ALL_PHONES}
            brands={ALL_BRANDS}
            onRemovePhone={(id) => handleToggleCompare(id)}
            onAddPhone={(id) => handleToggleCompare(id)}
            onSelectPhone={setSelectedPhone}
          />
        )}
      </main>

      <footer className="mt-12 border-t border-zinc-200 py-6 dark:border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 dark:text-zinc-400">
          <span>
            TelefonLAB — 2000’den 2026’ya Akıllı Telefon Özellikleri ve Gizli Yetenekler Rehberi
          </span>
          <span>
            Servis ve donanım test kodları bölgesel operatör ve yazılım sürümüne göre farklılık gösterebilir.
          </span>
        </div>
      </footer>

      {/* Markaya Basınca Açılan Yeni Menü */}
      <BrandMenuModal
        brand={activeBrandSection?.brand ?? null}
        phones={activeBrandSection?.phones ?? []}
        compareIds={compareIds}
        copiedCode={copiedCode}
        yearSortOrder={yearSortOrder}
        onToggleYearSort={() =>
          setYearSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'))
        }
        onClose={() => setActiveBrandId(null)}
        onSelectPhone={setSelectedPhone}
        onToggleCompare={handleToggleCompare}
        onCopyCode={handleCopyCode}
      />

      {/* Tekil Model Tam Detay Penceresi */}
      <PhoneDetailModal
        phone={selectedPhone}
        brand={selectedPhone ? ALL_BRANDS.find((b) => b.id === selectedPhone.brandId) : undefined}
        isCompared={selectedPhone ? compareIds.includes(selectedPhone.id) : false}
        canAddCompare={compareIds.length < 3}
        copiedCode={copiedCode}
        onClose={() => setSelectedPhone(null)}
        onToggleCompare={handleToggleCompare}
        onCopyCode={handleCopyCode}
      />

      {copiedCode && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 z-50 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-xs font-medium text-white shadow-lg dark:border-zinc-700 dark:bg-zinc-900"
        >
          Kod panoya kopyalandı: <code className="font-mono text-blue-400">{copiedCode}</code>
        </div>
      )}
    </div>
  );
}
