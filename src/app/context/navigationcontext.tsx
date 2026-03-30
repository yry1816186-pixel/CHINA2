import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface NavigationContextType {
  isTransitioning: boolean;
  transitionType: 'enter' | 'exit' | 'none';
  startTransition: (type: 'enter' | 'exit', callback?: () => void) => void;
  endTransition: () => void;
}

const NavigationContext = createContext<NavigationContextType | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionType, setTransitionType] = useState<'enter' | 'exit' | 'none'>('none');

  const startTransition = useCallback((type: 'enter' | 'exit', callback?: () => void) => {
    setTransitionType(type);
    setIsTransitioning(true);
    
    setTimeout(() => {
      callback?.();
    }, 400);

    setTimeout(() => {
      setIsTransitioning(false);
      setTransitionType('none');
    }, 800);
  }, []);

  const endTransition = useCallback(() => {
    setIsTransitioning(false);
    setTransitionType('none');
  }, []);

  return (
    <NavigationContext.Provider value={{
      isTransitioning,
      transitionType,
      startTransition,
      endTransition
    }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
}
