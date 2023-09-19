import { type Component, createEffect, createSignal, Show } from "solid-js";

import styles from "../App.module.css";

import { JokesResponse } from "../../types/pocketbase-types";
import { getJokes } from "../api/queries/getJokes";
import JokeCard from "../components/JokeCard";
import { UserExpand } from "../../types/query-types";
import { Motion } from "@motionone/solid";
import { Box } from "@suid/material";

const Jokes: Component = () => {
  const [loading, setLoading] = createSignal(false);
  const [jokes, setJokes] = createSignal<JokesResponse<UserExpand>[]>([]);

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
        <Motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1, easing: "ease-in-out" }}
        >
          <Box
            displayRaw="flex"
            flexDirection="column"
            width="100%"
            alignItems="center"
            rowGap="3rem"
          >
            <Show when={!loading()}>
              {jokes().map((jokeObj) => (
                <JokeCard {...jokeObj} />
              ))}
            </Show>
          </Box>
        </Motion.div>
      </header>
    </div>
  );
};

export default Jokes;
