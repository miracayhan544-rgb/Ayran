import React from 'react';
import { PWAInstallButton } from './PWAInstallButton';

export type ActiveTab = 'brands' | 'models' | 'hidden' | 'codes' | 'compare' | 'gmail';

interface HeaderProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  compareCount: number;
  gmailConnected?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  compareCount,
  gmailConnected = false,
}) => {
  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'brands', label: 'Markalar' },
    { id: 'models', label: 'Tüm Modeller' },
    { id: 'hidden', label: 'Gizli Özellikler' },
    { id: 'codes', label: 'Gizli Kodlar' },
    { id: 'gmail', label: 'Gmail' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => onTabChange('brands')}
          className="font-display text-lg font-bold tracking-tight text-zinc-950 whitespace-nowrap shrink-0 hover:text-blue-600 transition-colors dark:text-white dark:hover:text-blue-400"
        >
          TelefonLAB
        </button>

        <nav
          aria-label="Ana gezinme"
          className="hidden md:flex items-center gap-6"
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onTabChange(item.id)}
                className={`inline-flex items-center gap-1.5 py-1.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors border-b-2 ${
                  isActive
                    ? 'border-blue-600 text-zinc-950 dark:border-blue-500 dark:text-white'
                    : 'border-transparent text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100'
                }`}
              >
                <span>{item.label}</span>
                {item.id === 'gmail' && gmailConnected && (
                  <span
                    className="h-2 w-2 rounded-full bg-emerald-500"
                    title="Gmail bağlı"
                    aria-label="Gmail bağlı"
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <PWAInstallButton />
          <button
            type="button"
            onClick={() => onTabChange('compare')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-colors tabular-nums ${
              activeTab === 'compare'
                ? 'bg-blue-600 text-white'
                : 'bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200'
            }`}
          >
            Karşılaştır ({compareCount}/3)
          </button>
        </div>
      </div>

      <nav
        aria-label="Mobil gezinme"
        className="flex md:hidden items-center gap-4 overflow-x-auto border-t border-zinc-200 px-4 py-2 dark:border-zinc-800"
      >
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onTabChange(item.id)}
              className={`inline-flex items-center gap-1.5 text-xs font-medium whitespace-nowrap shrink-0 py-1 ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-zinc-600 dark:text-zinc-400'
              }`}
            >
              <span>{item.label}</span>
              {item.id === 'gmail' && gmailConnected && (
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              )}
            </button>
          );
        })}
      </nav>
    </header>
  );
};
