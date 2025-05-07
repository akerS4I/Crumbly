import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<SignupPage />} />
          {/* 

          <Route path="concerts">
            <Route index element={<ConcertsHome />} />
            <Route path=":city" element={<City />} />
            <Route path="trending" element={<Trending />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
