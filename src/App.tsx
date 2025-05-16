import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import TeamPage from "./pages/TeamPage";
import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<SignupPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="video" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
