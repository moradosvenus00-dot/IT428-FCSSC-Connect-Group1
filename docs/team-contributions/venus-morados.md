# Venus C. Morados — contribution record

## Member information

- **Role:** Project Foundation and Integration
- **Assigned feature screens:** Shared shell for all eight screens; integration across feature pages
- **Suggested feature branch:** `feature/layout-routing` (not observed as an existing branch)

## Assigned responsibilities

- [ ] Initialize and configure the React/Vite project.
- [ ] Establish the modular source architecture.
- [ ] Implement the shared application layout, header, and sidebar.
- [ ] Configure React Router for eight screens, active navigation, and 404 handling.
- [ ] Develop reusable UI components.
- [ ] Establish shared mock data and validation utilities.
- [ ] Integrate Bootstrap 5 and the black, maroon, and white design system.
- [ ] Implement responsive shared navigation and layouts.
- [ ] Prepare shared component usage guidance.
- [ ] Review and integrate teammates' completed features.
- [ ] Perform integration testing and final build verification.

The checkboxes above track **individually evidenced completion**. Much of the foundation is present in the untracked workspace, but Git does not yet attribute that implementation to a person. Initialization of the project also has no attributable commit in the available history.

## Source code contributions

| File path | Current workspace evidence | Contribution status | GitHub commit or PR |
| --- | --- | --- | --- |
| [`frontend/src/components/`](../../frontend/src/components/) | Header, Sidebar, PageHeader, SummaryCard, StatusBadge, FormField, DataTable, FeedbackMessage, and placeholder components exist. | Implemented in untracked workspace; individual authorship unverified | None for these files |
| [`frontend/src/layouts/MainLayout.jsx`](../../frontend/src/layouts/MainLayout.jsx) | Shared layout uses `Outlet`, route title, and React state for mobile navigation. | Implemented in untracked workspace; authorship unverified | None |
| [`frontend/src/App.jsx`](../../frontend/src/App.jsx) | Eight routes and a 404 route are defined. | Implemented in untracked workspace; authorship unverified | None |
| [`frontend/src/main.jsx`](../../frontend/src/main.jsx), [`frontend/src/index.css`](../../frontend/src/index.css) | Bootstrap CSS import, design tokens, shared styling, and responsive rules exist. | Implemented in untracked workspace; authorship unverified | None |
| [`frontend/src/data/`](../../frontend/src/data/), [`frontend/src/utils/`](../../frontend/src/utils/) | Navigation, fictional linked records, and validation helpers exist. | Implemented in untracked workspace; authorship unverified | None |
| [`frontend/README.md`](../../frontend/README.md) | Setup, routes, ownership, and component usage are documented. | Present in untracked workspace; authorship unverified | None |
| [`README.md`](../../README.md), [`.gitignore`](../../.gitignore) | Initial repository files only; later root README edits are uncommitted. | Initial versions committed by Venus | [fb4f72f](https://github.com/moradosvenus00-dot/IT428-FCSSC-Connect-Group1/commit/fb4f72fc9a9f3f6b15ea14047afcd2b6369aae71) |

**Verified individual technical contribution:** The initial GitHub commit created the root README and `.gitignore`. The frontend implementation is visible locally but is not yet a verified GitHub contribution. No PR was found.

## Development progress

- [ ] Not started
- [x] In progress — foundation code is present in the local workspace; attribution and review remain unverified.
- [ ] Implemented — individual frontend commit evidence pending.
- [ ] Tested — member-performed testing evidence pending; workspace checks are listed below.
- [ ] Reviewed and merged — no frontend PR or merge evidence.

## Testing record

These checks were run in the shared workspace by Codex; they verify the current frontend build, **not** individual authorship or an instructor demonstration.

| Function or feature tested | Expected result | Actual result | Pass/fail | Date verified |
| --- | --- | --- | --- | --- |
| `cd frontend && npm run lint` | Oxlint completes without diagnostics | Exit code 0; no diagnostics | Pass — workspace check | 2026-11-14 |
| `cd frontend && npm run build` | Vite produces a production bundle | Exit code 0; bundle produced | Pass — workspace check | 2026-11-14 |
| Mobile visual layout and navigation | Drawer opens/closes and pages remain usable at mobile widths | No browser verification recorded for this documentation snapshot | Not tested | — |
| Integration of completed teammate features | Assigned pages work together with shared state/data | Teammate feature implementations and PRs are not yet present | Pending | — |

## Technical verification preparation

Be prepared to explain nested routes, `Outlet`, `NavLink` active state, mobile menu state and focus behavior, reusable component props, Bootstrap import order, CSS variables and breakpoints, linked mock-data IDs, validation helpers, and how later page features will integrate without duplicating the shared shell. Demonstrate a small layout or route change live using your own committed code.

## Issues and notes

- `frontend/` is untracked, so it must be committed under the correct contributor identity before it can count as GitHub evidence.
- Shared files may be edited by multiple members; document exact changes and PR reviews rather than claiming exclusive ownership.
- No frontend PR, review, or merge is verified. Do not mark integration complete until teammate features are actually reviewed and combined.
