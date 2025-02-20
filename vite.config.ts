import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    minify: "esbuild",
    sourcemap: true,
    lib: {
      entry: "src/index.ts",
      name: "mui-flamengo-theme",
      fileName: () => "index.js",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "@emotion/react", "@emotion/styled", "@mui/material"],
    },
  },
  plugins: [dts()],
});
