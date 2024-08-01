import type { Config } from "tailwindcss";

export default {
  content: [
      "./src/**/*.{html,js,svelte,ts}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        "IBMPlexMono": ['"IBM Plex Mono"', "monospace"],
      }
    }
  },
  plugins: []
} as Config;
