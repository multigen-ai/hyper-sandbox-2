# hyper-sandbox-2

The Hyper sandbox starter: TanStack Start + React 19 + Tailwind CSS v4 +
shadcn/ui (Base UI primitives). This is the repository agents clone to build
web apps inside a sandbox.

## Commands

```bash
pnpm install    # install dependencies (pnpm only — the lockfile is pnpm's)
pnpm dev        # dev server on 0.0.0.0:3000 (the platform's pinned port)
pnpm build      # production build
pnpm test       # vitest
pnpm typecheck  # tsc --noEmit
```

## Structure

- `src/routes/` — file-based routes (TanStack Router). `index.tsx` is `/`;
  add `about.tsx` for `/about`. The route tree regenerates on dev/build.
- `src/components/` — app components; `src/components/ui/` is shadcn/ui.
- `src/styles.css` — Tailwind v4 CSS-first config and design tokens
  (no tailwind.config file).
- `src/router.tsx` — router setup; `src/routes/__root.tsx` — root layout.

## Adding shadcn/ui components

```bash
pnpm dlx shadcn@latest add button card dialog
```

## Rules for agents

- Do not change the dev port or server host: the sandbox preview and the
  public URL depend on `0.0.0.0:3000` and `allowedHosts: true`.
- Use pnpm. Do not introduce npm or bun lockfiles.
- Keep routes in `src/routes/`; do not hand-edit `src/routeTree.gen.ts`.
