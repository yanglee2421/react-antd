// Vite Imports
import { ConfigEnv, defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// NodeJs Imports
import { resolve } from "node:path";
// import { readFileSync } from "node:fs";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const { mode } = configEnv;
  void mode;

  return {
    plugins: [react()],

    // Path Alias
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },

    // ** CSS
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss" as *;`,
        },
      },
      modules: {
        localsConvention: "camelCaseOnly",
      },
    },

    base: "/react-antd",

    // ENV File
    envDir: resolve(__dirname, "./"),

    // ** Build
    build: build(configEnv),

    // DEV Server
    server: server(configEnv),
  };
});

function build({ mode }: ConfigEnv): UserConfig["build"] {
  void mode;

  return {
    outDir: "docs",
    manifest: false,
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      output: {
        manualChunks(id) {
          const isAntd = id.includes("node_modules/antd");
          if (isAntd) return "antd";
        },
      },
    },
  };
}

function server({ mode }: ConfigEnv): UserConfig["server"] {
  void mode;

  return {
    https: false,
    fs: { allow: [".."] },
    port: 3004,
    proxy: {
      "/dev": {
        ws: true,
        changeOrigin: true,
        target: "http://127.0.0.1",
        rewrite(path) {
          return path.replace(/^\/dev/, "");
        },
      },
    },
  };
}
