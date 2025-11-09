import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BaseLayout } from "./components/layout";
import Home from "./pages/home";
import Signin from "./pages/auth/signIn";
import { ForgotPasswordView } from "./pages/auth/forgotPassword";
import ResetPasswordView from "./pages/auth/resetPassword";
import SuccessView from "./pages/auth/sucessVIew";
import { SignUp } from "./pages/auth/signup";
import ProtectedRoutes from "./routes/protectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route path="/login" element={<Signin />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPasswordView />} />
          <Route path="/reset-password" element={<ResetPasswordView />} />
          <Route path="/sucess-view" element={<SuccessView />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
