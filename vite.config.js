import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on 'mode' in the current working directory.
  // Set the third paramter to '' to load all env
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.OPENAI_API_KEY": JSON.stringify(env.OPENAI_API_KEY),
    },
    plugins: [react()],
  };
});
