import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  base: "/tailwindNike/", // Change to your GitHub repo name
});

// export default defineConfig({
//   plugins: [react(), svgr()],
//   server: {
//     port: 3000,
//   },
// })
