import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';

// Toast 类型定义
export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastMessage {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
  icon?: React.ReactNode;
}

interface ToastContextValue {
  toasts: ToastMessage[];
  addToast: (toast: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
  clearAllToasts: () => void;
}

// 创建 Toast 上下文
const ToastContext = createContext<ToastContextValue | undefined>(undefined);

// Toast 配置
const TOAST_CONFIG = {
  success: {
    icon: <CheckCircle className="w-5 h-5" />,
    bgColor: 'bg-[#2D5016]/90',
    borderColor: 'border-[#4A7C23]/50',
    iconColor: 'text-[#7CBA3D]',
    accentColor: '#7CBA3D'
  },
  error: {
    icon: <XCircle className="w-5 h-5" />,
    bgColor: 'bg-[#5C1A1A]/90',
    borderColor: 'border-[#8B3A3A]/50',
    iconColor: 'text-[#E57373]',
    accentColor: '#E57373'
  },
  warning: {
    icon: <AlertTriangle className="w-5 h-5" />,
    bgColor: 'bg-[#5C4A1A]/90',
    borderColor: 'border-[#8B7335]/50',
    iconColor: 'text-[#FFB74D]',
    accentColor: '#FFB74D'
  },
  info: {
    icon: <Info className="w-5 h-5" />,
    bgColor: 'bg-[#1A3A5C]/90',
    borderColor: 'border-[#355C8B]/50',
    iconColor: 'text-[#64B5F6]',
    accentColor: '#64B5F6'
  }
};

const DEFAULT_DURATION = 5000;

// Toast Provider 组件
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((toast: Omit<ToastMessage, 'id'>) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newToast: ToastMessage = {
      ...toast,
      id,
      duration: toast.duration ?? DEFAULT_DURATION
    };

    setToasts(prev => [...prev, newToast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const clearAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, clearAllToasts }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

// Toast 容器组件
const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useContext(ToastContext)!;

  return (
    <div
      className="fixed top-24 right-8 z-[3000] flex flex-col gap-3 pointer-events-none"
      role="region"
      aria-label="通知区域"
      aria-live="polite"
    >
      <AnimatePresence>
        {toasts.map((toast, index) => (
          <ToastItem
            key={toast.id}
            toast={toast}
            onClose={() => removeToast(toast.id)}
            index={index}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

// 单个 Toast 组件
interface ToastItemProps {
  toast: ToastMessage;
  onClose: () => void;
  index: number;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onClose, index }) => {
  const config = TOAST_CONFIG[toast.type];

  useEffect(() => {
    if (toast.duration && toast.duration > 0) {
      const timer = setTimeout(onClose, toast.duration);
      return () => clearTimeout(timer);
    }
  }, [toast.duration, onClose]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' || e.key === 'Enter') {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`
        pointer-events-auto
        w-80
        ${config.bgColor}
        backdrop-blur-md
        border
        ${config.borderColor}
        rounded-sm
        shadow-[0_8px_32px_rgba(0,0,0,0.4)]
        overflow-hidden
        relative
      `}
      role="alert"
      aria-labelledby={`toast-title-${toast.id}`}
      aria-describedby={toast.description ? `toast-description-${toast.id}` : undefined}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* 顶部装饰条 */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ backgroundColor: config.accentColor }}
      />

      {/* 内容区域 */}
      <div className="p-4">
        <div className="flex items-start gap-3">
          {/* 图标 */}
          <div className={`flex-shrink-0 ${config.iconColor}`}>
            {toast.icon || config.icon}
          </div>

          {/* 文字内容 */}
          <div className="flex-1 min-w-0">
            <h4
              id={`toast-title-${toast.id}`}
              className="text-[#F5F5DC] text-sm font-medium tracking-wider mb-1"
            >
              {toast.title}
            </h4>
            {toast.description && (
              <p
                id={`toast-description-${toast.id}`}
                className="text-[#F5F5DC]/70 text-xs tracking-wide leading-relaxed"
              >
                {toast.description}
              </p>
            )}
          </div>

          {/* 关闭按钮 */}
          <button
            onClick={onClose}
            className="flex-shrink-0 p-1 text-[#F5F5DC]/40 hover:text-[#F5F5DC] transition-colors rounded-sm hover:bg-white/5 cursor-pointer"
            aria-label="关闭提示"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* 进度条（如果设置了 duration） */}
      {toast.duration && toast.duration > 0 && (
        <motion.div
          className="absolute bottom-0 left-0 h-[2px]"
          style={{ backgroundColor: config.accentColor }}
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ duration: toast.duration / 1000, ease: 'linear' }}
        />
      )}

      {/* 装饰性角落 */}
      <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 32 32" className="w-full h-full opacity-10">
          <path
            d="M32 0 L32 32 L0 32"
            fill="none"
            stroke={config.accentColor}
            strokeWidth="1"
          />
        </svg>
      </div>
    </motion.div>
  );
};

// useToast Hook
export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  const { addToast, removeToast, clearAllToasts } = context;

  const toast = {
    success: (title: string, description?: string, duration?: number) => {
      addToast({ type: 'success', title, description, duration });
    },
    error: (title: string, description?: string, duration?: number) => {
      addToast({ type: 'error', title, description, duration });
    },
    warning: (title: string, description?: string, duration?: number) => {
      addToast({ type: 'warning', title, description, duration });
    },
    info: (title: string, description?: string, duration?: number) => {
      addToast({ type: 'info', title, description, duration });
    },
    custom: (options: Omit<ToastMessage, 'id'>) => {
      addToast(options);
    },
    dismiss: removeToast,
    clearAll: clearAllToasts
  };

  return toast;
};

// 导出类型和组件
export default ToastProvider;
