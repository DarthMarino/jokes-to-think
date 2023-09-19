import { type Component, createEffect, createSignal, Show } from "solid-js";

import styles from "../App.module.css";

import { JokesResponse, UsersResponse } from "../../types/pocketbase-types";
import { useParams } from "@solidjs/router";
import { getSingleUser } from "../api/queries/getSingleUser";
import { getUserJokes } from "../api/queries/getUserJokes";
import JokeCard from "../components/JokeCard";

const Profile: Component = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = createSignal(false);
  const [data, setData] = createSignal<UsersResponse>();
  const [jokes, setJokes] = createSignal<JokesResponse[]>([]);

  createEffect(() => {
    try {
      getSingleUser(id).then((res) => {
        setData(res);
      });
      getUserJokes(id).then((res) => {
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
        <h1>User:</h1>
        <Show when={loading} fallback={<>Loading...</>}>
          <p>{data()?.username}</p>
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

export default Profile;
