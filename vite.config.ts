import solid from "solid-start/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import suidPlugin from "@suid/vite-plugin";


  
export default defineConfig(() => {
  return {
    plugins: [solid({ ssr: false }), suidPlugin(), solidPlugin()],
    build: {
      target: "esnext",
    }
  };
});