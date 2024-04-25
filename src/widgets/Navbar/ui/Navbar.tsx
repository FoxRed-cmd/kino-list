import { classNames } from "src/shared/lib/classNames/classNames";
import classes from "./Navbar.module.scss";
import { AppLink } from "src/shared/ui/AppLink/AppLink";
import { RoutePath } from "src/shared/config/routeConfig/routeConfig";
import { ToggleTheme } from "src/widgets/ToggleTheme";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(classes.Navbar, [className ?? ""])}>
      <AppLink to={RoutePath.main}>
        <h1>Кино справочник</h1>
      </AppLink>
      <div className={classes.links}>
        <AppLink to={RoutePath.main}>Главная</AppLink>
        <ToggleTheme />
      </div>
    </div>
  );
};
