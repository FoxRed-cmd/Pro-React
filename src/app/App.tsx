import "app/styles/main.scss";
import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { MainPage } from "pages/MainPage/index";
import { classNames } from "shared/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage/index";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", [theme], {})}>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <button onClick={toggleTheme}>Изменить тему</button>
      <Suspense>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
