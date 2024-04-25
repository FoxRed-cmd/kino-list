import ReactDOM from "react-dom/client";
import "./app/styles/reset.scss";
import App from "./app/App.tsx";
import { ThemeProvider } from "./app/providers/ThemeProvider/index.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
