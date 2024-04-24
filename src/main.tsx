import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./app/providers/ThemeProvider/index.ts";
import { StoreProvider } from "app/providers/StoreProvider";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StoreProvider>
);
