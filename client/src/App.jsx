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
import SignUpPage from "./pages/SignUpPage";
import { PasswordValidationProvider } from "./context/PasswordValidationContext";
import Tracker from "./pages/Tracker";
import { MonthlyAppliancesProvider } from "./context/MonthlyAppliancesContext";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AuthContextProvider />}>
        <Route element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route element={<PasswordValidationProvider />}>
            <Route path="/sign-up" element={<SignUpPage />} />
          </Route>
          <Route element={<MonthlyAppliancesProvider />}>
            <Route path="/tracker" element={<Tracker />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
