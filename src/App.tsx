import CountBtn from "@/components/count-btn";
import ReactSVG from "@/assets/react.svg";
import { Badge } from "@/components/ui/badge";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center gap-y-4">
          <div className="inline-flex items-center gap-x-4">
            <img src={ReactSVG} alt="React Logo" className="w-32" />
            <span className="text-6xl">+</span>
            <img src={"/vite.svg"} alt="Vite Logo" className="w-32" />
          </div>
          <a
            href="https://ui.shadcn.com"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <Badge variant="outline">shadcn/ui</Badge>
          </a>
          <CountBtn />
          <ModeToggle />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
