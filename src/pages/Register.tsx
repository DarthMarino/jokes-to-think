import { type Component, createSignal } from "solid-js";
import PocketBase, { ClientResponseError } from "pocketbase";

import styles from "../App.module.css";

import { Box, Button, Checkbox, TextField } from "@suid/material";

type RegisterForm = {
  username: string;
  email: string;
  emailVisibility: boolean;
  password: string;
  passwordConfirm: string;
};
const Register: Component = () => {
  const [data, setData] = createSignal<RegisterForm>({
    username: "",
    email: "",
    emailVisibility: false,
    password: "",
    passwordConfirm: "",
  });

  const pb = new PocketBase("http://127.0.0.1:8090");

  const createUser = async () => {
    try {
      await pb.collection("users").create(data());
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
        <h1>Create Test User</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            textAlign: "center",
          }}
          noValidate
          autocomplete="off"
        >
          <TextField
            id="username"
            label="Username"
            variant="filled"
            value={data().username}
            sx={{
              background: "white",
            }}
            onChange={(_, value) => {
              setData((prev) => ({
                ...prev,
                username: value.toLowerCase(),
              }));
            }}
          />
          <TextField
            id="email"
            label="Email"
            variant="filled"
            type="email"
            value={data().email}
            sx={{
              background: "white",
            }}
            onChange={(_, value) => {
              setData((prev) => ({
                ...prev,
                email: value,
              }));
            }}
          />
          <div>
            Visible Email
            <Checkbox
              value={data().emailVisibility}
              onChange={(_, checked) => {
                setData((prev) => ({
                  ...prev,
                  emailVisibility: checked,
                }));
              }}
            />
          </div>
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
          <TextField
            id="passwordConfirm"
            label="Confirm Password"
            variant="filled"
            type="password"
            value={data().passwordConfirm}
            sx={{
              background: "white",
            }}
            onChange={(_, value) => {
              setData((prev) => ({
                ...prev,
                passwordConfirm: value,
              }));
            }}
          />
        </Box>
        <Button variant="contained" onClick={createUser}>
          Create Test
        </Button>
      </header>
    </div>
  );
};

export default Register;
