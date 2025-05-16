import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/components/theme-provider";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Toaster } from "sonner"; // ✅ Make sure this is imported!

import "@/styles/globals.css";
import Root from "./Roots.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <Root />
        <Toaster position="bottom-center" richColors closeButton />
      </>
    </ThemeProvider>
  </Provider>
);
