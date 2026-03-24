import { BrowserRouter, Route, Routes } from "react-router";
import ErrorBoundary from "./components/ErrorBoundary";
import { ProgressProvider } from "./context/ProgressContext";
import { BuildingDetailPage, HomePage } from "./pages";
import "../styles/index.css";

export default function App() {
  return (
    <ErrorBoundary onError={(error) => console.error("Application error:", error)}>
      <BrowserRouter>
        <ProgressProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/building/:id" element={<BuildingDetailPage />} />
          </Routes>
        </ProgressProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
