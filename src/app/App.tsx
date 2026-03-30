import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { ProgressProvider, NavigationProvider } from './context';
import '../styles/index.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const BuildingDetailPage = lazy(() => import('./pages/BuildingDetailPage'));
const FinalePage = lazy(() => import('./pages/FinalePage'));

const LoadingFallback = () => (
  <div className="w-screen h-screen bg-[#0A1110] flex items-center justify-center">
    <div className="w-12 h-12 border-2 border-[#D4AF37]/30 border-t-[#D4AF37] rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <ProgressProvider>
        <NavigationProvider>
          <a href="#main-content" className="skip-link">
            跳转到主要内容
          </a>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/building/:id" element={<BuildingDetailPage />} />
              <Route path="/finale" element={<FinalePage />} />
            </Routes>
          </Suspense>
        </NavigationProvider>
      </ProgressProvider>
    </BrowserRouter>
  );
}
