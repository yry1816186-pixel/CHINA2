import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { ProgressProvider, NavigationProvider } from './context';
import { HomePage, BuildingDetailPage } from './pages';
import FinalePage from './pages/FinalePage';
import '../styles/index.css';

export default function App() {
  return (
    <BrowserRouter>
      <ProgressProvider>
        <NavigationProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/building/:id" element={<BuildingDetailPage />} />
            <Route path="/finale" element={<FinalePage />} />
          </Routes>
        </NavigationProvider>
      </ProgressProvider>
    </BrowserRouter>
  );
}
