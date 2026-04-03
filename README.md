# Commutative Property of Multiplication

React + Vite demo that commutative multiplication can swap factor order without changing the product. State and visual grouping live in `CommutativeMultiplication.jsx`.

**Live site:** [https://content-interactives.github.io/commutative_multiplication](https://content-interactives.github.io/commutative_multiplication)

Curriculum alignment and placement: [Standards.md](Standards.md).

---

## Stack

| Layer | Notes |
|--------|--------|
| Build | Vite 6, `@vitejs/plugin-react` |
| UI | React 19 |
| Styling | Tailwind 3 |
| Icons | lucide-react |
| Deploy | `gh-pages -d dist`; `predeploy` runs `vite build` |

---

## Layout

```
vite.config.js          # base: '/commutative_multiplication/'
src/
  main.jsx → App.jsx → components/CommutativeMultiplication.jsx
  components/ui/
```

---

## `vite.config.js`

`base: '/commutative_multiplication/'` must match the GitHub Pages repository path.

---

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Vite dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |
| `npm run deploy` | Build and push `dist/` to `gh-pages` |

---

## Embedding

Check `CommutativeMultiplication.jsx` for grid/layout height when iframing.
