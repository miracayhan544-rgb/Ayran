import React, { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Brand, FeatureCategory, PhoneModel } from '../types/phone';

interface HiddenFeaturesViewProps {
  brands: Brand[];
  phones: PhoneModel[];
  searchQuery: string;
}

const CATEGORIES: ('Tümü' | FeatureCategory)[] = [
  'Tümü',
  'Kamera',
  'Sistem',
  'Batarya',
  'Güvenlik',
  'Verimlilik',
  'Geliştirici',
];

export const HiddenFeaturesView: React.FC<HiddenFeaturesViewProps> = ({
  brands,
  phones,
  searchQuery,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'Tümü' | FeatureCategory>('Tümü');
  const [openBrands, setOpenBrands] = useState<Record<string, boolean>>({
    apple: true,
    samsung: true,
    xiaomi: true,
  });

  const toggleBrand = (brandId: string) => {
    setOpenBrands((prev) => ({ ...prev, [brandId]: !prev[brandId] }));
  };

  const brandGroups = useMemo(() => {
    const q = searchQuery.trim().toLocaleLowerCase('tr');
    return brands
      .map((brand) => {
        const osItems = brand.osHiddenFeatures.map((f) => ({
          ...f,
          scopeLabel: `${brand.osName} (Genel)`,
        }));
        const modelItems = phones
          .filter((p) => p.brandId === brand.id)
          .flatMap((p) =>
            p.modelHiddenFeatures.map((f) => ({
              ...f,
              scopeLabel: `${p.name} (${p.releaseYear})`,
            }))
          );

        const combined = [...osItems, ...modelItems].filter((item) => {
          if (selectedCategory !== 'Tümü' && item.category !== selectedCategory) {
            return false;
          }
          if (!q) return true;
          return (
            item.title.toLocaleLowerCase('tr').includes(q) ||
            item.description.toLocaleLowerCase('tr').includes(q) ||
            item.howToAccess.toLocaleLowerCase('tr').includes(q) ||
            item.scopeLabel.toLocaleLowerCase('tr').includes(q) ||
            brand.name.toLocaleLowerCase('tr').includes(q)
          );
        });

        return { brand, items: combined };
      })
      .filter((g) => g.items.length > 0);
  }, [brands, phones, selectedCategory, searchQuery]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Markalara Göre Gizli Özellikler Rehberi
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Her markanın işletim sistemi ve modellerindeki gizli ayarları alt alta açılır sekmelerle inceleyin.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1 rounded-lg bg-zinc-100 p-1 dark:bg-zinc-900">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                selectedCategory === cat
                  ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-white'
                  : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {brandGroups.length === 0 ? (
        <div className="rounded-xl border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900/40">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Aramanızla eşleşen gizli özellik bulunamadı.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {brandGroups.map(({ brand, items }) => {
            const isOpen = !!openBrands[brand.id] || searchQuery.trim().length > 0;
            return (
              <div
                key={brand.id}
                className="oled-surface overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleBrand(brand.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-zinc-50 dark:hover:bg-zinc-900"
                >
                  <div>
                    <span className="font-display text-base sm:text-lg font-bold text-zinc-950 dark:text-white">
                      {brand.name}
                    </span>
                    <span className="ml-3 text-xs text-zinc-500 dark:text-zinc-400 tabular-nums">
                      {items.length} Gizli Özellik · {brand.osName}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-zinc-500 transition-transform ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="divide-y divide-zinc-200 border-t border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
                    {items.map((item) => (
                      <div key={`${item.scopeLabel}-${item.id}`} className="p-4 sm:p-5">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                          <span className="font-semibold text-blue-600 dark:text-blue-400">
                            {item.category}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{item.scopeLabel}</span>
                        </div>
                        <h3 className="mt-1 font-display text-base font-bold text-zinc-950 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                          {item.description}
                        </p>
                        <p className="mt-2 font-mono text-xs text-zinc-800 dark:text-zinc-200">
                          Yol: {item.howToAccess}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
