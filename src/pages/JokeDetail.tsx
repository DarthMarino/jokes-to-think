import { type Component, createEffect, createSignal, Show } from "solid-js";

import styles from "../App.module.css";

import { JokesRecord, JokesResponse } from "../../types/pocketbase-types";
import { getSingleJoke } from "../api/queries/getSingleJoke";
import { useParams } from "@solidjs/router";

const JokeDetail: Component = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = createSignal(false);
  const [joke, setJoke] = createSignal<JokesResponse>();

  createEffect(() => {
    try {
      getSingleJoke(id).then((res) => {
        setJoke(res);
      });
    } catch {
      console.log("error");
    }
    setLoading(false);
  });

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1>Joke:</h1>
        <Show when={loading} fallback={<>Loading...</>}>
          <p>{joke()?.joke}</p>
        </Show>
      </header>
    </div>
  );
};

export default JokeDetail;
