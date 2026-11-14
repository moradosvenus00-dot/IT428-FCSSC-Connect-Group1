# Venus C. Morados — Module 1 Development Contribution

**Project:** FCSSC Connect  
**Subject:** IT 428 – Web Systems and Technologies  
**Group:** Group 1  
**Role:** Front-End Foundation, UI Design, Routing, and Integration

## Contribution Overview

Established the front-end foundation of FCSSC Connect using React.js and Vite. The implementation includes a modular project structure, shared application layout, responsive navigation, reusable React components, client-side routing, and fictional sample data. Bootstrap 5 was integrated to develop a consistent black, maroon, and white interface, providing a common foundation for the system's eight required screens.

## Implemented Contributions

| Development Area | Implementation |
|---|---|
| Project Setup | Configured React.js, Vite, JavaScript ES6+, and Oxlint. |
| Application Architecture | Organized reusable components, layouts, pages, data, and utility modules. |
| Shared Layout | Developed the header, sidebar, and responsive main content area. |
| Client-Side Routing | Configured eight application routes, active navigation, and 404 handling. |
| Reusable Components | Implemented summary cards, status badges, form fields, data tables, page headers, and feedback messages. |
| UI/UX Design | Integrated Bootstrap 5 and developed the black–maroon–white gradient design system. |
| Dashboard Foundation | Developed the welcome banner, sample-data summary cards, quick navigation, and activity previews. |
| Mock Data | Prepared fictional member, activity, attendance, penalty, and announcement records. |
| Validation Utilities | Added shared required-field and email-format validation helpers. |
| Documentation | Prepared frontend setup instructions, component usage guidelines, and project structure documentation. |

## Main Source Code Contributions

| Source File | Description |
|---|---|
| `src/App.jsx` | Application routes and not-found handling |
| `src/layouts/MainLayout.jsx` | Shared layout and responsive navigation |
| `src/components/` | Reusable React interface components |
| `src/index.css` | Gradient theme and responsive styling |
| `src/main.jsx` | React entry point and Bootstrap integration |
| `src/pages/Dashboard.jsx` | Dashboard foundation and preview components |
| `src/data/` | Shared mock data and navigation configuration |
| `src/utils/validation.js` | Input validation helpers |

*All source paths above are relative to `frontend/`.*

## Development Verification

The development checks reported successful Oxlint and production builds, rendering of the eight routes and 404 page, active navigation, and correct dashboard sample-data calculations.

Manual visual and interaction checks across mobile and desktop screen sizes remain separate from these automated checks.

## GitHub Contribution

**Repository:** `IT428-FCSSC-Connect-Group1`  
**Development Branch:** `feature/layout-routing`  
**Pull Request:** [#1 – FCSSC Connect Frontend Foundation](https://github.com/moradosvenus00-dot/IT428-FCSSC-Connect-Group1/pull/1)  
**Merge Date:** November 14, 2026  
**Merge Commit:** `a4bbbed`

The frontend foundation was successfully merged into the `main` branch, establishing the shared application structure for the subsequent implementation of individual system features.

## Integration Scope

The completed foundation provides the shared interface, navigation, components, and data structures required by the remaining feature screens. Integration of the other members' completed workflows will be undertaken as their implementations become available.