import { type Component, createEffect, createSignal, Show } from "solid-js";

import styles from "../App.module.css";

import { JokesResponse } from "../../types/pocketbase-types";
import { getJokes } from "../api/queries/getJokes";

const Jokes: Component = () => {
  const [loading, setLoading] = createSignal(false);
  const [jokes, setJokes] = createSignal<JokesResponse[]>([]);

  createEffect(() => {
    try {
      getJokes().then((res) => {
        setJokes(res);
      });
    } catch {
      console.log("error");
    }
    setLoading(false);
  });

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1>List of Jokes:</h1>
        <Show when={loading} fallback={<>Loading...</>}>
          <ul>
            {jokes().map((jokeObj) => (
              <li
                id={jokeObj.id}
                onClick={() => (location.href = `/jokes/${jokeObj.id}`)}
              >
                {jokeObj.joke}
              </li>
            ))}
          </ul>
        </Show>
      </header>
    </div>
  );
};

export default Jokes;
