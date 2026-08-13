# SOMECSS Demo

**[Lire en français](README.fr.md)**

A working demonstration of the SOMECSS methodology, showing every convention from the article applied across two real pages rather than in isolated snippets.

- English article: [SOMECSS - A Scalable Hybrid CSS Methodology](https://medium.com/@tomy.grenier/somecss-a-scalable-hybrid-css-methodology-c435312cda7e)
- Version fran&ccedil;aise : [SOMECSS - Une m&eacute;thodologie CSS hybride et &eacute;volutive](https://medium.com/@tomy.grenier/somecss-une-m%C3%A9thodologie-css-hybride-et-%C3%A9volutive-4acb3cb356a1)

## Structure

```
site-demo-github/
├── index.html          Publications page: real-world use of the methodology
├── components.html     Component library: every block/modifier/state in isolation
├── fr/
│   ├── index.html      French version of the Publications page
│   └── components.html French version of the Component library page
├── css/
│   ├── base.css        Reset, typography, design tokens (custom properties)
│   ├── layout.css      Page skeleton, demo-page helpers
│   ├── modules.css     Reusable components (buttons, cards, modal, form, publications list)
│   ├── states.css      is-/has- state classes and ARIA-driven states
│   └── themes.css      Dark theme variant
├── js/
│   └── site.js          Minimal vanilla JS: theme toggle, modal, filter disclosure, search
└── README.md
```

The `fr/` pages share the same `css/` and `js/` files as the root (English) pages, only the markup text differs. A language switch link is in the header nav of every page.

## What to look at

- **Cascade layers**: each CSS file declares its own `@layer`, matching the file structure. See the top of each file in `css/`.
- **Naming conventions**: block-element (`.modal-title`), block--modifier (`.button--primary`), `is-`/`has-` states (`.is-empty`, `.has-error`).
- **ARIA-driven states**: the filter toggle in the `index.html` sidebar, and the modal on both pages, style off `aria-expanded`/`aria-hidden` directly rather than duplicating the state in a class. See `css/states.css`.
- **Contextual Class Pairing**: compare the standard `.publications-list` grid to its override inside `.publications-project`, in real context on `index.html`, and side-by-side for comparison on `components.html`. See `css/modules.css`.
- **Design tokens**: all custom properties live in `css/base.css`. `css/themes.css` only overrides a subset of them for `[data-theme="dark"]`.
- **Property order**: every rule block in `css/` follows the same box-model-first ordering described in the article.

## Running locally

No build step. Open `index.html` directly in a browser, or serve the folder with any static file server.
