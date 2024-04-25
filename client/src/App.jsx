import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

import Layout from "./Layout";
import NotFoundPage from "./pages/NotFoundPage";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AuthContextProvider />}>
        <Route element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
