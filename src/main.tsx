import ReactDOM from "react-dom/client";
import "./app/styles/reset.scss";
import App from "./app/App.tsx";
import { ThemeProvider } from "src/app/providers/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import { QueryProvider } from "src/app/providers/QueryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </QueryProvider>
  </BrowserRouter>
);
