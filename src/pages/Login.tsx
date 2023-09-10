import { type Component, createSignal } from "solid-js";
import PocketBase, { ClientResponseError, LocalAuthStore } from "pocketbase";

import nookies, { parseCookies, setCookie } from "nookies";

import styles from "../App.module.css";

import { Box, Button, TextField } from "@suid/material";

type LoginForm = {
  identity: string;
  password: string;
};
const Login: Component = () => {
  const [data, setData] = createSignal<LoginForm>({
    identity: "",
    password: "",
  });

  const pb = new PocketBase("http://127.0.0.1:8090", new LocalAuthStore());
  pb.beforeSend = function (url, options) {
    options.headers = Object.assign({}, options.headers, {
      x_token: "test",
    });

    return { url, options };
  };
  const checkInfo = async () => {
    const authData = await pb.collection("users").authRefresh();
    console.log(authData);

    // after the above you can also access the refreshed auth data from the authStore
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model);
  };

  const authenticate = async () => {
    const { identity, password } = data();
    try {
      await pb
        .collection("users")
        .authWithPassword(identity, password)
        .then((res) => {
          console.log(res.record);
        });
    } catch (error) {
      if (error instanceof ClientResponseError) {
        const messages = error.data.data;
        for (const key in messages) {
          console.log(`${key}: ${messages[key].message}`);
        }
      }
    }
  };

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1>Login User</h1>
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
            id="username"
            label="Username"
            variant="filled"
            value={data().identity}
            sx={{
              background: "white",
            }}
            onChange={(_, value) => {
              setData((prev) => ({
                ...prev,
                identity: value.toLowerCase(),
              }));
            }}
          />

          <TextField
            id="password"
            label="Password"
            variant="filled"
            type="password"
            value={data().password}
            sx={{
              background: "white",
            }}
            onChange={(_, value) => {
              setData((prev) => ({
                ...prev,
                password: value,
              }));
            }}
          />
        </Box>
        <Button variant="contained" onClick={authenticate}>
          Login Test
        </Button>
        <Button variant="contained" onClick={checkInfo}>
          Check Info
        </Button>
      </header>
    </div>
  );
};

export default Login;
