import React from 'react';
import { X, ArrowUpRight, Mail } from 'lucide-react';
import { Brand, PhoneModel } from '../types/phone';

interface CompareViewProps {
  selectedPhones: PhoneModel[];
  allPhones: PhoneModel[];
  brands: Brand[];
  onRemovePhone: (phoneId: string) => void;
  onAddPhone: (phoneId: string) => void;
  onSelectPhone: (phone: PhoneModel) => void;
  onShareComparisonViaGmail?: () => void;
}

export const CompareView: React.FC<CompareViewProps> = ({
  selectedPhones,
  allPhones,
  brands,
  onRemovePhone,
  onAddPhone,
  onSelectPhone,
  onShareComparisonViaGmail,
}) => {
  const getBrandName = (brandId: string) =>
    brands.find((b) => b.id === brandId)?.name ?? brandId;

  const availableToAdd = allPhones.filter(
    (p) => !selectedPhones.some((s) => s.id === p.id)
  );

  const comparisonRows: { label: string; getValue: (p: PhoneModel) => string }[] = [
    { label: 'Marka / Yıl', getValue: (p) => `${getBrandName(p.brandId)} · ${p.releaseYear}` },
    { label: 'Ekran Boyutu', getValue: (p) => p.specs.display.size },
    { label: 'Panel & Yenileme', getValue: (p) => `${p.specs.display.panel} · ${p.specs.display.refreshRate}` },
    { label: 'Çözünürlük', getValue: (p) => p.specs.display.resolution },
    { label: 'Tepe Parlaklık', getValue: (p) => p.specs.display.peakBrightness },
    { label: 'İşlemci (SoC)', getValue: (p) => `${p.specs.performance.chipset} (${p.specs.performance.processNode})` },
    { label: 'RAM & Depolama', getValue: (p) => `${p.specs.memory.ram} · ${p.specs.memory.storage}` },
    { label: 'Ana Kamera', getValue: (p) => p.specs.camera.main },
    { label: 'Ultra Geniş', getValue: (p) => p.specs.camera.ultrawide },
    { label: 'Telefoto / Zoom', getValue: (p) => p.specs.camera.telephoto },
    { label: 'Ön Kamera', getValue: (p) => p.specs.camera.front },
    { label: 'Video', getValue: (p) => p.specs.camera.video },
    { label: 'Pil Kapasitesi', getValue: (p) => p.specs.battery.capacity },
    { label: 'Kablolu Şarj', getValue: (p) => p.specs.battery.wiredCharging },
    { label: 'Kablosuz Şarj', getValue: (p) => p.specs.battery.wirelessCharging },
    { label: 'IP Dayanıklılık', getValue: (p) => p.specs.buildAndConnectivity.waterResistance },
    { label: 'Boyut & Ağırlık', getValue: (p) => `${p.specs.buildAndConnectivity.dimensions} · ${p.specs.buildAndConnectivity.weight}` },
    { label: 'İşletim Sistemi', getValue: (p) => p.specs.software.osAtLaunch },
    { label: 'Güncelleme Politikası', getValue: (p) => p.specs.software.updatePolicy },
    { label: 'Ayırt Edici Donanım', getValue: (p) => p.specs.buildAndConnectivity.audioAndExtras },
    {
      label: 'Modele Özel Gizli Yetenek',
      getValue: (p) =>
        p.modelHiddenFeatures.map((f) => f.title).join(' / ') || 'OS Genel Özellikleri',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Yan Yana Cihaz Karşılaştırma
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Farklı marka ve dönemlerden en fazla 3 cihazı donanım ve gizli özellikleriyle kıyaslayın.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {selectedPhones.length > 0 && onShareComparisonViaGmail && (
            <button
              type="button"
              onClick={onShareComparisonViaGmail}
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs font-semibold text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800 whitespace-nowrap"
            >
              <Mail className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              Gmail ile Gönder
            </button>
          )}

          {selectedPhones.length < 3 && (
            <select
              aria-label="Karşılaştırmaya telefon ekle"
              value=""
              onChange={(e) => {
                if (e.target.value) onAddPhone(e.target.value);
              }}
              className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs font-medium text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            >
              <option value="">+ Karşılaştırmaya Model Ekle...</option>
              {availableToAdd.map((p) => (
                <option key={p.id} value={p.id}>
                  {getBrandName(p.brandId)} — {p.name} ({p.releaseYear})
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {selectedPhones.length === 0 ? (
        <div className="oled-surface rounded-xl border border-zinc-200 bg-white p-10 text-center dark:border-zinc-800 dark:bg-zinc-900/40">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Henüz karşılaştırma listesine cihaz eklemediniz. Yukarıdaki menüden seçebilir veya marka listelerindeki "Kıyasla" düğmesine basabilirsiniz.
          </p>
        </div>
      ) : (
        <div className="oled-surface overflow-x-auto rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50">
          <table className="w-full min-w-[700px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                <th className="w-48 px-4 py-4 font-semibold text-zinc-500 dark:text-zinc-400">
                  Özellik
                </th>
                {selectedPhones.map((phone) => (
                  <th key={phone.id} className="px-4 py-4 align-top">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
                          {getBrandName(phone.brandId)}
                        </span>
                        <div className="mt-0.5 font-display text-base font-bold text-zinc-950 dark:text-white">
                          {phone.name}
                        </div>
                        <button
                          type="button"
                          onClick={() => onSelectPhone(phone)}
                          className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:underline dark:text-blue-400"
                        >
                          Tam Detay
                          <ArrowUpRight className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        type="button"
                        aria-label={`${phone.name} modelini çıkar`}
                        onClick={() => onRemovePhone(phone.id)}
                        className="rounded-md p-1 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {comparisonRows.map((row) => (
                <tr key={row.label} className="hover:bg-zinc-50/70 dark:hover:bg-zinc-900/60">
                  <td className="px-4 py-3 font-medium text-zinc-500 dark:text-zinc-400">
                    {row.label}
                  </td>
                  {selectedPhones.map((phone) => (
                    <td
                      key={`${row.label}-${phone.id}`}
                      className="px-4 py-3 font-mono text-[12px] text-zinc-900 dark:text-zinc-100 tabular-nums align-top"
                    >
                      {row.getValue(phone)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
