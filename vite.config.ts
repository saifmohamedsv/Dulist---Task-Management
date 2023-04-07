import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

export default () => {
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  });
};
