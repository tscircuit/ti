import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv, type Plugin } from "vite";

import { handleTiRecommendationsRequest } from "./server/ti-recommendations.ts";

const repositoryRoot = fileURLToPath(new URL("..", import.meta.url));
const applicationRoot = fileURLToPath(new URL(".", import.meta.url));

function tiRecommendationsDevPlugin(credentials: {
  clientId?: string;
  clientSecret?: string;
}): Plugin {
  return {
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        if (!request.url?.startsWith("/api/ti-recommendations")) {
          next();
          return;
        }
        const result = await handleTiRecommendationsRequest(
          new Request(new URL(request.url, "http://127.0.0.1"), {
            method: request.method,
          }),
          credentials,
        );
        response.statusCode = result.status;
        result.headers.forEach((value, key) => response.setHeader(key, value));
        response.end(await result.text());
      });
    },
    name: "ti-recommendations-dev-api",
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, applicationRoot, "TI_SIE_");
  return {
    plugins: [
      react(),
      tiRecommendationsDevPlugin({
        clientId: process.env.TI_SIE_CLIENT_ID ?? env.TI_SIE_CLIENT_ID,
        clientSecret:
          process.env.TI_SIE_CLIENT_SECRET ?? env.TI_SIE_CLIENT_SECRET,
      }),
    ],
    server: {
      fs: {
        allow: [repositoryRoot],
      },
      port: 5173,
    },
  };
});
