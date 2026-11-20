import React, { useMemo, useState } from 'react';
import { ArrowUpRight, Plus, Minus, ArrowUpDown } from 'lucide-react';
import { Brand, PhoneEra, PhoneModel } from '../types/phone';
import { isTabletModel } from '../data';

interface AllModelsTableProps {
  phones: PhoneModel[];
  brands: Brand[];
  compareIds: string[];
  onSelectPhone: (phone: PhoneModel) => void;
  onToggleCompare: (phoneId: string) => void;
}

type SortKey = 'year-desc' | 'year-asc' | 'name';

export const AllModelsTable: React.FC<AllModelsTableProps> = ({
  phones,
  brands,
  compareIds,
  onSelectPhone,
  onToggleCompare,
}) => {
  const [brandFilter, setBrandFilter] = useState<string>('all');
  const [eraFilter, setEraFilter] = useState<'all' | PhoneEra>('all');
  const [deviceFilter, setDeviceFilter] = useState<'all' | 'phone' | 'tablet'>('all');
  const [sortKey, setSortKey] = useState<SortKey>('year-desc');

  const brandMap = useMemo(() => {
    const map: Record<string, Brand> = {};
    for (const b of brands) map[b.id] = b;
    return map;
  }, [brands]);

  const filtered = useMemo(() => {
    const list = phones.filter((p) => {
      if (brandFilter !== 'all' && p.brandId !== brandFilter) return false;
      if (eraFilter !== 'all' && p.era !== eraFilter) return false;
      if (deviceFilter === 'phone' && isTabletModel(p)) return false;
      if (deviceFilter === 'tablet' && !isTabletModel(p)) return false;
      return true;
    });

    return [...list].sort((a, b) => {
      if (sortKey === 'year-desc') {
        return b.releaseYear - a.releaseYear || a.name.localeCompare(b.name, 'tr');
      }
      if (sortKey === 'year-asc') {
        return a.releaseYear - b.releaseYear || a.name.localeCompare(b.name, 'tr');
      }
      return a.name.localeCompare(b.name, 'tr');
    });
  }, [phones, brandFilter, eraFilter, deviceFilter, sortKey]);

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Tüm Modeller Teknik Tablosu
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            2000 yılından 2026 güncel amiral gemilerine kadar {filtered.length} telefonun teknik verileri.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <select
            aria-label="Cihaz türüne göre filtrele"
            value={deviceFilter}
            onChange={(e) => setDeviceFilter(e.target.value as 'all' | 'phone' | 'tablet')}
            className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs font-medium text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          >
            <option value="all">Telefon + Tablet ({phones.length})</option>
            <option value="phone">Sadece Telefonlar</option>
            <option value="tablet">Sadece Tabletler</option>
          </select>

          <select
            aria-label="Markaya göre filtrele"
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
            className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs font-medium text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          >
            <option value="all">Tüm Markalar ({brands.length})</option>
            {brands.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>

          <select
            aria-label="Döneme göre filtrele"
            value={eraFilter}
            onChange={(e) => setEraFilter(e.target.value as 'all' | PhoneEra)}
            className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs font-medium text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          >
            <option value="all">Tüm Dönemler (2000–2026)</option>
            <option value="2025-2026">2025–2026 En Güncel</option>
            <option value="2020-2024">2020–2024 Modern</option>
            <option value="2000-2019">2000–2019 Klasikler</option>
          </select>

          <button
            type="button"
            onClick={() =>
              setSortKey((prev) =>
                prev === 'year-desc'
                  ? 'year-asc'
                  : prev === 'year-asc'
                  ? 'name'
                  : 'year-desc'
              )
            }
            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs font-medium text-zinc-800 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 whitespace-nowrap shrink-0"
          >
            <ArrowUpDown className="h-3.5 w-3.5" />
            {sortKey === 'year-desc'
              ? 'En Yeni'
              : sortKey === 'year-asc'
              ? 'En Eski (2000+)'
              : 'İsme Göre'}
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900/40">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Seçili filtrelere uygun cihaz bulunamadı.
          </p>
          <button
            type="button"
            onClick={() => {
              setBrandFilter('all');
              setEraFilter('all');
              setDeviceFilter('all');
            }}
            className="mt-3 rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white dark:bg-zinc-100 dark:text-zinc-950"
          >
            Filtreleri Sıfırla
          </button>
        </div>
      ) : (
        <div className="oled-surface overflow-x-auto rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50">
          <table className="w-full min-w-[960px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                <th className="px-4 py-3 font-semibold">Marka & Model</th>
                <th className="px-3 py-3 font-semibold">Yıl</th>
                <th className="px-3 py-3 font-semibold">Ekran</th>
                <th className="px-3 py-3 font-semibold">İşlemci</th>
                <th className="px-3 py-3 font-semibold">RAM / Depolama</th>
                <th className="px-3 py-3 font-semibold">Kamera</th>
                <th className="px-3 py-3 font-semibold">Pil & Şarj</th>
                <th className="px-3 py-3 font-semibold">IP</th>
                <th className="px-4 py-3 font-semibold text-right">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {filtered.map((phone) => {
                const isCompared = compareIds.includes(phone.id);
                const canAddCompare = compareIds.length < 3;

                return (
                  <tr
                    key={phone.id}
                    className="hover:bg-zinc-50/80 dark:hover:bg-zinc-900/70 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                        {brandMap[phone.brandId]?.name} · {phone.segment}
                      </div>
                      <button
                        type="button"
                        onClick={() => onSelectPhone(phone)}
                        className="mt-0.5 font-display text-sm font-bold text-zinc-950 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 text-left"
                      >
                        {phone.name}
                      </button>
                    </td>
                    <td className="px-3 py-3 font-mono tabular-nums text-zinc-800 dark:text-zinc-200">
                      {phone.releaseYear}
                    </td>
                    <td className="px-3 py-3 font-mono text-zinc-700 dark:text-zinc-300 max-w-[160px]">
                      <div>{phone.specs.display.size}</div>
                      <div className="truncate text-[11px] text-zinc-500 dark:text-zinc-400">
                        {phone.specs.display.refreshRate} · {phone.specs.display.panel}
                      </div>
                    </td>
                    <td className="px-3 py-3 font-mono text-zinc-800 dark:text-zinc-200 max-w-[160px]">
                      <div className="truncate">{phone.specs.performance.chipset}</div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                        {phone.specs.performance.processNode}
                      </div>
                    </td>
                    <td className="px-3 py-3 font-mono tabular-nums text-zinc-700 dark:text-zinc-300 max-w-[150px]">
                      <div>{phone.specs.memory.ram}</div>
                      <div className="truncate text-[11px] text-zinc-500 dark:text-zinc-400">
                        {phone.specs.memory.storage}
                      </div>
                    </td>
                    <td className="px-3 py-3 font-mono text-zinc-700 dark:text-zinc-300 max-w-[200px]">
                      <div className="truncate">{phone.specs.camera.main}</div>
                      <div className="truncate text-[11px] text-zinc-500 dark:text-zinc-400">
                        Ön: {phone.specs.camera.front}
                      </div>
                    </td>
                    <td className="px-3 py-3 font-mono tabular-nums text-zinc-700 dark:text-zinc-300 max-w-[160px]">
                      <div>{phone.specs.battery.capacity}</div>
                      <div className="truncate text-[11px] text-zinc-500 dark:text-zinc-400">
                        {phone.specs.battery.wiredCharging}
                      </div>
                    </td>
                    <td className="px-3 py-3 font-mono text-zinc-700 dark:text-zinc-300 whitespace-nowrap">
                      {phone.specs.buildAndConnectivity.waterResistance.split(' ')[0]}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="inline-flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => onSelectPhone(phone)}
                          className="inline-flex items-center gap-1 rounded-md border border-zinc-300 px-2.5 py-1 text-[11px] font-semibold text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800 whitespace-nowrap"
                        >
                          Detay
                          <ArrowUpRight className="h-3 w-3" />
                        </button>
                        <button
                          type="button"
                          disabled={!isCompared && !canAddCompare}
                          onClick={() => onToggleCompare(phone.id)}
                          className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-semibold whitespace-nowrap ${
                            isCompared
                              ? 'bg-blue-600 text-white'
                              : canAddCompare
                              ? 'border border-zinc-300 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800'
                              : 'cursor-not-allowed border border-zinc-200 text-zinc-400 dark:border-zinc-800'
                          }`}
                        >
                          {isCompared ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
