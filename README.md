# Plancord

Shared calendar app for a small group of friends.

## What is in this repo

- `web/` contains the current SPA frontend.
- Root-level docs like `PLAN.md` and `AGENTS.md` describe the project direction.
- Backend services are expected to be added later as sibling folders, such as `api/` or `workers/`.

## Current status

The repository currently contains a frontend-only React app. The longer-term plan is to add a Cloudflare-based backend for calendars, events, invitations, and availability matching, with Firebase Auth as the login system.

## Running the app

From `web/`:

```bash
bun install
bun dev
```

Other useful commands:

- `bun build` to create a production build
- `bun lint` to run ESLint
- `bun pretty` to format the codebase

## Planned stack

- Cloudflare Pages for frontend hosting
- Cloudflare Workers for backend APIs
- Cloudflare D1 for structured app data
- Cloudflare Durable Objects for coordination where needed
- Firebase Auth for user authentication

## Notes

- Cloudflare Access may still be useful for private admin or staging routes, but not for the main friend-facing login flow.
- The app should stay invite-only at first, with private calendars and shared availability.
