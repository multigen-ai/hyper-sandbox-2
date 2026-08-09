import { defineConfig } from "vite"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [devtools(), tailwindcss(), tanstackStart(), viteReact()],
  server: {
    // Sandboxes serve through the platform proxy on generated hostnames
    // (*.apps.hyperfx.ai / *.e2b.app), so the dev server must bind publicly
    // and accept those hosts. Port 3000 is the platform's pinned dev port.
    host: "0.0.0.0",
    port: 3000,
    allowedHosts: true,
    cors: true,
  },
})

export default config
