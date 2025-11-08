import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BaseLayout } from "./components/layout";
import Signin from "./pages/auth/signIn";
import { ForgotPasswordView } from "./pages/auth/forgotPassword";
import ResetPasswordView from "./pages/auth/resetPassword";
import SuccessView from "./pages/auth/sucessVIew";
import { SignUp } from "./pages/auth/signup";
function App() {
  return (
    <>
      <BaseLayout>
        <Router>
          <Routes>
            <Route path="/login" element={<Signin />} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/forgot-password" element={<ForgotPasswordView />} />
            <Route path="/reset-password" element={<ResetPasswordView />} />
            <Route path="/sucess-view" element={<SuccessView />} />

          </Routes>
        </Router>
      </BaseLayout>
    </>
  );
}

export default App;
