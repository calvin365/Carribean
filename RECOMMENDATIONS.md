# Repository Recommendations

## 1) Fix linting to unblock CI and enforce code quality
- `npm run lint` currently fails with multiple `no-unused-vars` errors for `motion` imports used only in JSX (`<motion.div>`, etc.) and a few genuinely unused values in `App.jsx`.
- Add the React JSX lint support for flat config (for example, enable `react/jsx-uses-vars` via `eslint-plugin-react`) so JSX component references are treated as used.
- Remove or wire up truly unused values (`mobileMenuOpen`, `y`) to avoid dead code.

## 2) Replace manual DOM event wiring with React state/handlers
- `App.jsx` adds a click listener using `querySelector` and `addEventListener` for the mobile menu, but it does not clean up listeners in the effect.
- Move mobile menu behavior into React state passed to `Navbar`, and control classes from state instead of direct DOM mutation.

## 3) Reduce JavaScript bundle size with lazy loading and code splitting
- Production build reports very large chunks (`index` ~2.39 MB and `physics` ~1.99 MB), likely from heavy 3D/Spline dependencies.
- Lazy-load the 3D hero section and/or the Spline component only when needed (e.g., on visible section or desktop viewport).
- Split heavy sections (gallery/reviews/contact) into route- or section-level dynamic imports.

## 4) Move static content/config out of `App.jsx`
- `App.jsx` is carrying many concerns at once: image imports, menu data, reviews, stats, and full page layout.
- Move content arrays to separate data modules (`src/data/*.js`) and keep `App.jsx` focused on composition.
- This improves maintainability and makes content updates easier for non-developers.

## 5) Improve image asset strategy
- The project includes many files with generic names like `unnamed (1).jpg`, which makes maintenance and SEO harder.
- Rename assets with semantic names (`jerk-chicken.jpg`, `restaurant-interior.jpg`) and generate responsive sizes (`srcset`) for key sections.
- Keep AVIF/WebP for modern browsers and add predictable naming conventions for future contributors.

## 6) Harden the contact form integration
- The contact form currently simulates submission with a timeout and no backend integration.
- Connect it to a real endpoint (serverless function, Formspree, or API route), add spam protection (honeypot/reCAPTCHA), and instrument success/failure tracking.

## 7) Align README with actual codebase
- `README.md` references files/components (`MapView.jsx`, `.env` map key flow) that do not match the current implementation (embedded map iframe in `App.jsx`).
- Update setup, project structure, and feature notes so new contributors have accurate onboarding instructions.

## 8) Add basic test coverage for critical interactions
- There are currently no tests configured for form validation, navigation behavior, or theme toggling.
- Add lightweight component tests (Vitest + React Testing Library) for:
  - contact form validation states,
  - theme toggle persistence,
  - active nav section behavior.

## 9) Improve deployment portability
- `vite.config.js` hardcodes `base: '/Carribean/'`, which works for one hosting pattern but can break other deployments.
- Use an environment variable for `base` (with sane defaults) to support GitHub Pages and non-subpath hosting without code changes.

## 10) Add a simple performance and accessibility checklist to CI
- Add automated checks for:
  - lint and build,
  - Lighthouse CI (performance/accessibility budget),
  - optional bundle-size guardrails.
- This catches regressions early as more media and animations are added.
