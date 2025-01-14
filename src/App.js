import { Suspense } from "react";
import Home from "./pages/Home/Home";
import MainLayout from "./components/Layouts/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import NotFound from "./pages/not-found/NotFound";
import Projectparts from "./pages/Projectparts/Projectparts";
// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "project-parts",
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Projectparts />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <div className="App" style={{ direction: "rtl" }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
