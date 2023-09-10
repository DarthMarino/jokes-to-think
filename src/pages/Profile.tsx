import { type Component, createEffect, createSignal, Show } from "solid-js";

import styles from "../App.module.css";

import { UsersResponse } from "../../types/pocketbase-types";
import { useParams } from "@solidjs/router";
import { getSingleUser } from "../api/queries/getSingleUser";

const Profile: Component = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = createSignal(false);
  const [data, setData] = createSignal<UsersResponse>();

  createEffect(() => {
    try {
      getSingleUser(id).then((res) => {
        setData(res);
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
        </Show>
      </header>
    </div>
  );
};

export default Profile;
