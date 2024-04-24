import { useTheme } from "app/providers/ThemeProvider";
import { ToggleButton } from "shared/ui/ToggleButton/ToggleButton";
import cls from "./ToggleTheme.module.scss";
import Sun from "shared/assets/sun.svg";
import Moon from "shared/assets/moon.svg";

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();
  const isToggle = theme === "light" ? false : true;

  return (
    <ToggleButton
      className={cls.ToggleTheme}
      onClick={toggleTheme}
      isToggle={isToggle}
    >
      <img src={isToggle ? Moon : Sun} width={14} />
    </ToggleButton>
  );
};
