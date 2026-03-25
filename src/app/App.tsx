import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFoundState from "./components/NotFoundState";
import RouteLoadingScreen from "./components/RouteLoadingScreen";
import { ProgressProvider } from "./context/ProgressContext";
import "../styles/index.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const BuildingDetailPage = lazy(() => import("./pages/BuildingDetailPage"));

function RouteViewportManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ErrorBoundary onError={(error) => console.error("Application error:", error)}>
      <BrowserRouter>
        <ProgressProvider>
          <RouteViewportManager />
          <a
            href="#main-content"
            className="skip-link"
          >
            跳转到正文
          </a>
          <Suspense fallback={<RouteLoadingScreen />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/building/:id" element={<BuildingDetailPage />} />
              <Route
                path="*"
                element={
                  <NotFoundState description="当前访问的路径不存在。你可以返回首页，从专题总览重新进入对应建筑个案。" />
                }
              />
            </Routes>
          </Suspense>
        </ProgressProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
