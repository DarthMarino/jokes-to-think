import PocketBase from "pocketbase";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@suid/material";
import { createEffect, createSignal } from "solid-js";
import Logo from "/src/logo.svg?component-solid";

export default function NavBar() {
  const pb = new PocketBase("http://127.0.0.1:8090");

  const [anchorEl, setAnchorEl] = createSignal<null | HTMLElement>(null);
  const open = () => Boolean(anchorEl());
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    pb.authStore.clear();
    location.href = "/";
  };

  createEffect(async () => {
    if (pb.authStore.token) {
      await pb.collection("users").authRefresh();
    }
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "FFFFFF" }} position="static">
        <Toolbar sx={{ paddingY: "5px" }}>
          <Box
            component="a"
            sx={{
              display: "flex",
              color: "black",
              columnGap: "5px",
              textDecoration: "none",
            }}
            height="72px"
            href="/"
          >
            <Logo />
            <Typography variant="h5" fontWeight="bold" alignSelf="center">
              JOKES TO THINK
            </Typography>
          </Box>
          <Typography variant="h6" component="a" sx={{ flexGrow: 1 }} href="/">
            Home
          </Typography>
          <Typography
            variant="h6"
            component="a"
            sx={{ flexGrow: 1 }}
            href="/jokes/new"
          >
            Write Joke
          </Typography>
          <Typography
            variant="h6"
            component="a"
            sx={{ flexGrow: 1 }}
            href="/jokes"
          >
            Jokes
          </Typography>
          {pb.authStore.isValid ? (
            <Button
              color="inherit"
              onClick={(event) => {
                setAnchorEl(event.currentTarget);
              }}
            >
              <Avatar /> {pb.authStore.model?.username}
            </Button>
          ) : (
            <Button color="inherit" href="/login">
              Login
            </Button>
          )}
        </Toolbar>
        <Menu
          anchorEl={anchorEl()}
          id="account-menu"
          open={open()}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              ["& .MuiAvatar-root"]: {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{
            horizontal: "right",
            vertical: "top",
          }}
          anchorOrigin={{
            horizontal: "right",
            vertical: "bottom",
          }}
        >
          <MenuItem
            onClick={() => (location.href = `/users/${pb.authStore.model?.id}`)}
          >
            <Avatar />
            Profile
          </MenuItem>
          <MenuItem>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem>Add another account</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </AppBar>
    </Box>
  );
}
