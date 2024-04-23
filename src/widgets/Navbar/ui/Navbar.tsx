import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(classes.Navbar, [className ?? ""])}>
      <div className={classes.links}>
        <AppLink to={RoutePath.main}>Главная</AppLink>
        <AppLink to={RoutePath.about}>О сайте</AppLink>
      </div>
    </div>
  );
};
