import { type Component } from "solid-js";

import styles from "./App.module.css";
import NavBar from "./components/NavBar";

import { lazy } from "solid-js";
import { useRoutes } from "@solidjs/router";
import Login from "./pages/Login";

const routes = [
  {
    path: "/",
    component: lazy(() => import("./pages/Home")),
  },
  {
    path: "/jokes",
    component: lazy(() => import("./pages/Jokes")),
  },
  {
    path: "/jokes/new",
    component: lazy(() => import("./pages/NewJoke")),
  },
  {
    path: "/users/:id",
    component: lazy(() => import("./pages/Profile")),
  },
  {
    path: "/jokes/:id",
    component: lazy(() => import("./pages/JokeDetail")),
  },
  {
    path: "/login",
    component: Login,
  },
];

const App: Component = () => {
  const Routes = useRoutes(routes); // 👈 useRoutes takes in the routes config

  return (
    <div class={styles.App}>
      <NavBar />
      <Routes />
    </div>
  );
};

export default App;
