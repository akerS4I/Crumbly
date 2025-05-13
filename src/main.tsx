import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/components/theme-provider";
import { Provider } from "react-redux";
import { store } from "./store/store";

import "@/styles/globals.css";
import Root from "./Roots.tsx";
import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Root />
    </ThemeProvider>
  </Provider>
);
