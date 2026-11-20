import React from 'react';
import { createRoot } from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import App from './App.tsx';
import './index.css';

try {
  registerSW({ immediate: true });
} catch {
  // Ignore SW registration errors in restricted preview contexts
}

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

class AppErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, message: error?.message || 'Beklenmeyen bir hata oluştu.' };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-zinc-50 p-8 text-zinc-900">
          <div className="mx-auto max-w-xl rounded-xl border border-zinc-200 bg-white p-6">
            <h1 className="text-lg font-bold">TelefonLAB Yüklenemedi</h1>
            <p className="mt-2 text-sm text-zinc-600">{this.state.message}</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <AppErrorBoundary>
    <App />
  </AppErrorBoundary>
);
