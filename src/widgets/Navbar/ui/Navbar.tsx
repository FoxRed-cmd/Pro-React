import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { ToggleTheme } from "widgets/ToggleTheme";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(classes.Navbar, [className ?? ""])}>
      <div className={classes.links}>
        <AppLink to={RoutePath.main}>Главная</AppLink>
        <AppLink to={RoutePath.about}>О сайте</AppLink>
        <ToggleTheme />
      </div>
    </div>
  );
};
