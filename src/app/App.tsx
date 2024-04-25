import { classNames } from "src/shared/lib/classNames/classNames";
import { Navbar } from "../widgets/Navbar";
import { useTheme } from "./providers/ThemeProvider";
import "./styles/main.scss";
import { AppRouter } from "./providers/router";
import { Footer } from "src/widgets/Footer";

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
