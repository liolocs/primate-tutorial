import config from "primate/config";
import react from "@primate/react";
import tailwind from "@primate/tailwind";

export default config({
  entrypoints: {
    css: "master.css",
  },

  modules: [
    react(),
    tailwind({
      content: [
        "./components/**/*.{ts,tsx,jsx}",
        "./routes/**/*.{ts,tsx,jsx}",
        "./views/**/*.{ts,tsx,jsx}",
      ],
    }),
  ],
});
