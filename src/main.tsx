
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";

  createRoot(document.getElementById("root")!).render(
  <div className="page-bg">
    <div className="mobile-shell">
      <App />
    </div>
  </div>
);
