import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    {/* Le reste de votre application, y compris le Router et le LanguageProvider */}
    
    <App />
  </HelmetProvider>
);
