import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import GeneralProvider from "./stateManager/General.tsx";
import ThemeManagerProvider from "./stateManager/Theme.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeManagerProvider>
        <GeneralProvider>
          <App />
        </GeneralProvider>
      </ThemeManagerProvider>
    </QueryClientProvider>
  </StrictMode>
);
