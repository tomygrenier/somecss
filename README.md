# somecss
**SOMECSS** is a custom CSS methodology designed to unify and modernize styling practices within a collaborative development environment. By blending principles from SMACSS, BEM, and OOCSS, it offers a scalable, readable, and modular structure suited for both small and large projects.

## CSS File Structure (Inspired by SMACSS)

We adopted SMACSS’s idea of breaking down stylesheets into logical, purpose-driven categories. This approach improves readability, makes it easier to scale a project, and simplifies onboarding for new developers. Each file serves a distinct role in organizing code by its intent rather than by its selector type, promoting separation of concerns and long-term maintainability.

| File          | Purpose                                                          |
| ------------- | ---------------------------------------------------------------- |
| `base.css`    | Default element styles (typography, resets, etc.)                |
| `layout.css`  | Global layout structures: `.header`, `.main`, `.footer`, `.grid` |
| `modules.css` | Reusable components: `.card`, `.button`, `.form-field`, etc.     |
| `states.css`  | UI states: `.is-open`, `.is-disabled`, `.has-error`, etc.        |
| `themes.css`  | Theme variations: `.theme-dark`, `.button--danger`, etc.         |

<sub>Table: SOMECSS CSS file structure, based on the SMACSS model</sub>

---

## Naming Conventions (Hybrid of BEM and OOCSS)

### Blocks

- When possible, prefer using **semantic HTML elements** (`section`, `article`, `nav`, `header`, `footer`, etc.) over generic class names like `.box`. This improves accessibility and code clarity. A contextual class — either structural or design-related — can then be used to refine the styling applied to that semantic element.
- A block represents the main container of a component.
- Example: `.card`, `.modal`, `.form`, `.button`

### Elements

- Elements are not prefixed with their parent block name as in traditional BEM.
- Use descriptive or role-based class names.
- Example: `.card-title`, `.card-image`, `.form-label`, `.form-input`

### Modifiers

- Use `--modifier` syntax for variations.
- Modifiers can apply to blocks or elements.
- Example: `.card--highlighted`, `.button--primary`, `.form-input--error`

### Structure vs Content Separation (Inspired by OOCSS)

- Classes defining **structure** (layout, padding, margins, alignment) are kept separate from those that define **content** or semantics.
- This separation enables better reuse of layout containers without coupling them to context or appearance.
- Example:
  - `.box` defines a container with padding, border, and layout
  - `.media`, `.media-image`, `.media-body` represent a semantic pattern

### States

- Use `is-` and `has-` prefixes for state classes.
- Example: `.is-visible`, `.is-disabled`, `.has-error`, `.has-icon`

---

Read my article [here](https://medium.com/@tomy.grenier/somecss-a-scalable-hybrid-css-methodology-c435312cda7e) 
