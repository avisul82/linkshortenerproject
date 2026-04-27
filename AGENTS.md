# Agent Instructions — Link Shortener Project

This file is the entry point for LLM coding agents. Before writing any code, read the relevant guide(s) from the `/docs` directory listed below.
ALWAYS refer to the relevent .md file
BEFORE generetiong any code:

## Docs

| Topic | File |
|---|---|
| Auth (Clerk) | [`/docs/auth.md`](./docs/auth.md) |
| UI (shadcn/ui) | [`/docs/ui.md`](./docs/ui.md) |

## Stack Quick Reference

| Concern | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS v4 |
| Database | Neon PostgreSQL (serverless) |
| ORM | Drizzle ORM 0.45 |
| Auth | Clerk v7 (`@clerk/nextjs`) |
| Runtime | React 19 |



# Non-Negotiable Rules

- **Never** install additional dependencies without explicit user approval.
- **Never** use `any` in TypeScript.
- **Never** bypass ESLint rules or add `// eslint-disable` comments without explicit approval.
- **Never** write raw SQL — use Drizzle ORM for all database access.
- **Never** store secrets in code — all credentials go in `.env` and are accessed via `process.env`.
- **Always** use Server Actions or Route Handlers for data mutations — no direct DB calls from Client Components.
- **Always** run `npm run lint` and `npm run build` mentally check before considering a task complete.



 