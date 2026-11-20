import React, { useEffect } from 'react';
import { AlertTriangle, Send, X, Loader2 } from 'lucide-react';

export interface GmailPendingConfirmation {
  title: string;
  description: string;
  details?: { label: string; value: string }[];
  confirmLabel: string;
  isDestructive?: boolean;
  onConfirm: () => Promise<void>;
}

interface GmailConfirmModalProps {
  pending: GmailPendingConfirmation | null;
  busy: boolean;
  onCancel: () => void;
  onExecute: () => void;
}

export const GmailConfirmModal: React.FC<GmailConfirmModalProps> = ({
  pending,
  busy,
  onCancel,
  onExecute,
}) => {
  useEffect(() => {
    if (!pending) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !busy) {
        onCancel();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [pending, busy, onCancel]);

  if (!pending) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label={pending.title}
      onClick={() => {
        if (!busy) onCancel();
      }}
    >
      <div
        className="oled-surface w-full max-w-md rounded-xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                pending.isDestructive
                  ? 'bg-red-50 text-red-600 dark:bg-red-950/60 dark:text-red-400'
                  : 'bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400'
              }`}
            >
              {pending.isDestructive ? (
                <AlertTriangle className="h-4.5 w-4.5" />
              ) : (
                <Send className="h-4.5 w-4.5" />
              )}
            </div>
            <h3 className="font-display text-lg font-bold text-zinc-950 dark:text-white">
              {pending.title}
            </h3>
          </div>
          <button
            type="button"
            disabled={busy}
            onClick={onCancel}
            aria-label="Onay penceresini kapat"
            className="rounded-lg p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-50 dark:hover:bg-zinc-900 dark:hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          {pending.description}
        </p>

        {pending.details && pending.details.length > 0 && (
          <dl className="mt-4 divide-y divide-zinc-200 rounded-lg border border-zinc-200 bg-zinc-50 text-xs dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/60">
            {pending.details.map((item) => (
              <div key={item.label} className="grid grid-cols-3 gap-2 px-3 py-2">
                <dt className="font-medium text-zinc-500 dark:text-zinc-400">{item.label}</dt>
                <dd className="col-span-2 break-words font-medium text-zinc-900 dark:text-zinc-100">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-6 flex items-center justify-end gap-2.5">
          <button
            type="button"
            disabled={busy}
            onClick={onCancel}
            className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-xs font-semibold text-zinc-800 hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            İptal
          </button>
          <button
            type="button"
            disabled={busy}
            onClick={onExecute}
            className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold text-white transition-colors disabled:opacity-60 ${
              pending.isDestructive
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {busy && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
            {pending.confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
