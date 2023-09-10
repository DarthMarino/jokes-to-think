import { type Component, createSignal } from "solid-js";
import PocketBase, { ClientResponseError, LocalAuthStore } from "pocketbase";

import nookies, { parseCookies, setCookie } from "nookies";

import styles from "../App.module.css";

import { Box, Button, TextField } from "@suid/material";

type JokeForm = {
  joke: string;
  user_id: string;
};
const NewJoke: Component = () => {
  const pb = new PocketBase("http://127.0.0.1:8090", new LocalAuthStore());

  const [data, setData] = createSignal<JokeForm>({
    joke: "",
    user_id: pb.authStore.model?.id,
  });

  const sendJoke = async () => {
    console.log(data);
    try {
      await pb
        .collection("jokes")
        .create(data())
        .then((res) => {
          location.href = `/jokes/${res.id}`;
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1>Create Joke</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            textAlign: "center",
          }}
          noValidate
          autocomplete="on"
        >
          <TextField
            id="joke"
            label="Joke"
            variant="filled"
            value={data().joke}
            sx={{
              background: "white",
            }}
            onChange={(_, value) => {
              setData((prev) => ({
                ...prev,
                joke: value.toLowerCase(),
              }));
            }}
          />
        </Box>
        <Button variant="contained" onClick={sendJoke}>
          Create Joke
        </Button>
      </header>
    </div>
  );
};

export default NewJoke;
