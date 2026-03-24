import { Component, type ErrorInfo, type ReactNode } from "react";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

interface ErrorBoundaryProps {
  children: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.props.onError?.(error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleHome = () => {
    window.location.href = "/";
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg)] px-6">
        <div className="max-w-xl rounded-[2rem] border border-[var(--color-accent)]/25 bg-[rgba(10,16,17,0.92)] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/12 text-[var(--color-accent)]">
            <AlertTriangle size={28} />
          </div>
          <h1 className="mt-6 text-center text-3xl tracking-[0.12em] text-[var(--color-ink-contrast)]">
            页面加载异常
          </h1>
          <p className="mt-4 text-center text-base leading-8 text-[var(--color-ink-muted)]">
            应用在渲染过程中遇到了未处理错误。你可以尝试重新加载页面，或先返回首页继续浏览。
          </p>
          {this.state.error && (
            <pre className="mt-6 overflow-x-auto rounded-2xl border border-white/8 bg-black/20 p-4 text-xs leading-6 text-[var(--color-ink-soft)]">
              {this.state.error.message}
            </pre>
          )}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={this.handleReload}
              className="inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-[var(--color-gold-soft)] px-5 py-3 text-sm tracking-[0.16em] text-[var(--color-bg)] transition hover:brightness-105"
            >
              <RefreshCw size={16} />
              重新加载
            </button>
            <button
              type="button"
              onClick={this.handleHome}
              className="inline-flex flex-1 items-center justify-center gap-3 rounded-full border border-white/12 px-5 py-3 text-sm tracking-[0.16em] text-[var(--color-ink-contrast)] transition hover:border-[var(--color-gold-soft)]/40 hover:bg-white/4"
            >
              <Home size={16} />
              返回首页
            </button>
          </div>
        </div>
      </div>
    );
  }
}
