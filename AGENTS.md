# Plancord Project Notes

## Goal
- Build a shared calendar app for a small group of friends.
- Each person should keep a private calendar for their own events and availability.
- The app should support shared events, invitations, RSVP state, and scheduling-assistant style availability matching.

## Repository Structure
- `web/` contains the current SPA.
- Keep frontend code, assets, and UI-only tooling inside `web/`.
- Keep repo-wide docs and coordination files at the repository root.
- Add backend services as sibling folders later, such as `api/` or `workers/`, instead of folding them into `web/`.

## Technical Direction
- Prefer Cloudflare products where they fit the problem well:
  - Pages for frontend hosting.
  - Workers for backend API logic.
  - D1 for relational app data.
  - Durable Objects for coordination where concurrent writes matter.
  - R2 only when object storage is needed.
- Keep the first version metadata-only unless a feature truly needs file storage.
- Use Firebase Auth for consumer-facing login unless a later decision replaces it.
- Treat Cloudflare Access as an optional gate for private admin or staging surfaces, not as the primary long-term friend auth system.

## Working Rules
- Keep changes small and aligned with the current scope.
- Prefer editing existing files over creating new ones unless a new file is clearly the right place.
- Do not add dependencies without approval.
- Verify changes after editing by running the relevant checks when practical.
- When making design or architecture choices, explain the tradeoff briefly and plainly.

## Current Priority
- Evolve the SPA into a calendar product first.
- Introduce backend services only when the UI and data model need them.
- Keep the repo ready for a future monorepo-style setup, but do not split code into separate repositories yet.
