import React, { useState } from 'react';
import { ChevronDown, Copy, Check } from 'lucide-react';
import { Brand } from '../types/phone';

interface SecretCodesViewProps {
  brands: Brand[];
  copiedCode: string | null;
  onCopyCode: (code: string) => void;
}

export const SecretCodesView: React.FC<SecretCodesViewProps> = ({
  brands,
  copiedCode,
  onCopyCode,
}) => {
  const [openMap, setOpenMap] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    brands.forEach((b) => {
      initial[b.id] = true;
    });
    return initial;
  });

  const toggle = (id: string) => {
    setOpenMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
          Gizli Arama ve Servis Teşhis Kodları
        </h2>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Telefon uygulamasından tuşlanan donanım testi, pil döngüsü ve sinyal mühendislik kodları. Kopyalayıp Arama ekranına yapıştırabilirsiniz.
        </p>
      </div>

      <div className="space-y-3">
        {brands
          .filter((b) => b.secretCodes.length > 0)
          .map((brand) => {
            const isOpen = !!openMap[brand.id];
            return (
              <div
                key={brand.id}
                className="oled-surface overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(brand.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-zinc-50 dark:hover:bg-zinc-900"
                >
                  <div>
                    <span className="font-display text-base sm:text-lg font-bold text-zinc-950 dark:text-white">
                      {brand.name}
                    </span>
                    <span className="ml-3 text-xs text-zinc-500 dark:text-zinc-400 tabular-nums">
                      {brand.secretCodes.length} Kod · {brand.osName}
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
                          <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
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
                              Kodu Kopyala
                            </>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};
