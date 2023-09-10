/* @refresh reload */
import { render } from "solid-js/web";
import { lazy } from "solid-js";

import "./index.css";
const App = lazy(() => import("./App"));
import { Router } from "@solidjs/router";
import { ThemeProvider, createTheme } from "@suid/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto", // Set the font family to Roboto
  },
});

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  ),
  root!
);
