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
import MyAccount from "./pages/myAccount";
import Profile from "./pages/profile/inde";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axiosInstance from "./services/axiosInstance";


function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(user,"user1")
  async function fetchUser() {
    try {
      const res = await axiosInstance.get("/users/me");
      // console.log(res,"res")
      if (res.data.data.sucess) {
        dispatch({
          user: res.data.data.user,
          token: res.data.data.token,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, []);
  console.log(user, "user");
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

          <Route
            path="/my-account"
            element={
              <ProtectedRoutes>
                <MyAccount />
              </ProtectedRoutes>
            }
          />
          <Route path="/my-account/profile" element={<Profile />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
