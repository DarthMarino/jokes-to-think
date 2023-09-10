import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import solidSvg from "vite-plugin-solid-svg";
// import devtools from "solid-devtools/vite";
import suidPlugin from "@suid/vite-plugin";

export default defineConfig({
  plugins: [
    suidPlugin(),
    // devtools(),
    solidPlugin(),
    solidSvg({
      defaultAsComponent: false,
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
