# FCSSC Connect — Module 1 front end

FCSSC Connect is a student organization management system for the Faculty of Computing Supreme Student Council. This repository currently contains a **front-end prototype** for IT 428 Module 1. Feature workflows, persistent data, authentication, and backend APIs are not implemented yet.

## Stack and setup

React 19, JavaScript ES6+, Vite 8, React Router 7, Bootstrap 5 CSS, Lucide React icons, and Oxlint. The app is inside the existing `frontend/` directory. Bootstrap CSS is imported in `src/main.jsx`; shared theme variables and overrides are in `src/index.css`. Typography uses SF Pro when installed, with the system font (Segoe UI on Windows) as a fallback. No Bootstrap JavaScript or jQuery is used.

```bash
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite. For checks, run `npm run lint` and `npm run build` from `frontend/`.

## Source layout

```text
src/
├── assets/          # Static assets
├── components/      # Reusable UI, including FeaturePlaceholder
├── data/            # Navigation configuration and fictional mock records
├── layouts/         # MainLayout with Header, Sidebar, and Outlet
├── pages/           # One file per route
├── utils/           # Shared validation helpers
├── App.jsx          # Route definitions
├── main.jsx         # React entry point
└── index.css        # Shared styles and responsive layout
```

## Routes

| Path | Page | Owner |
| --- | --- | --- |
| `/` | Dashboard | Ellen Velarde |
| `/registration` | Membership Registration | Graczielle Conge |
| `/members` | Member Directory | Graczielle Conge |
| `/activities` | Activities / Events | Mark Sabinator |
| `/attendance` | Attendance | Mark Sabinator |
| `/penalties` | Penalties | Jaye Jimeno |
| `/announcements` | Announcements | Ellen Velarde |
| `/member-view` | Member View | Jaye Jimeno |
| Any other path | 404 page | Shared foundation |

The shared layout and route shell are owned by **Venus Morados** (foundation, layout, routing, reusable components, and integration). The feature owners above can replace the placeholder in their page file while retaining the shared layout.

## Shared components and data

- `PageHeader` accepts `title`, `description`, and optional `kicker`.
- `SummaryCard` accepts `title`, `value`, an optional Lucide `icon`, and optional `supportingText`.
- `StatusBadge` accepts `status` and `variant` (`neutral`, `success`, `warning`, or `error`).
- `FormField` accepts `label`, standard input props, optional `error` and `hint`, plus `as="textarea"` or `as="select"` with `options`.
- `DataTable` accepts `columns` (`key`, `header`, optional `render`), `records`, an optional `rowKey`, `caption`, and `emptyMessage`. Each record needs a stable key.
- `FeedbackMessage` accepts `variant` (`success`, `warning`, or `error`) and message children.
- `Header` and `Sidebar` are used by `MainLayout`; edit `data/navigation.js` when adding navigation.

The dashboard currently shows a welcome banner, four counts computed from mock records, working links to feature routes, and lists derived from activity records. These are demonstrations, not live council statistics. The other feature routes remain development scaffolds.

The records in `data/mockData.js` are fictional. Member, activity, attendance, penalty, and announcement IDs are stable and relationships use `memberId` and `activityId`. Import these records for Module 1 examples; avoid copying them into page files. `utils/validation.js` exports `validateRequired` and `validateEmail`.

## Contribution workflow

1. Implement assigned work primarily in your `src/pages/` file. Import shared components and mock data as needed.
2. Coordinate changes to `App.jsx`, `MainLayout.jsx`, `navigation.js`, and global styles with the foundation owner to avoid conflicts.
3. Keep controls honest: a button should work, and unfinished workflows should stay labeled as such.
4. Run lint and build before sharing your work. Review the page at desktop and mobile widths.

As features develop, registration and directory should share member records; activities and attendance should share activity and attendance records; penalties should reference members and activities; announcements may reference activities. For Module 1, keep page state local unless multiple pages truly need to edit the same data. Define a shared state approach together before adding it. In Module 2, a Laravel REST API can replace the mock data source; no API or database connection exists in this prototype.
