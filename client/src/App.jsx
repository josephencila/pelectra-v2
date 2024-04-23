import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import NotFoundPage from "./pages/NotFoundPage";
import LandingPage from "./pages/LandingPage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AuthContextProvider />}>
        <Route index element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
