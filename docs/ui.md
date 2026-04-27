# UI — shadcn/ui

## Component Library
All UI elements must use **shadcn/ui** exclusively. Do not create custom components or use any other component library.

## Rules

- **Always** reach for a shadcn/ui component before writing any markup from scratch.
- **Never** build custom buttons, inputs, dialogs, cards, dropdowns, toasts, or any other UI primitive.
- If a shadcn/ui component doesn't exist for a use case, compose it from existing shadcn/ui primitives.

## Adding Components

Install components via the CLI — do not copy/paste component code manually:

```bash
npx shadcn@latest add <component-name>
```

Components are added to `components/ui/` and can be imported from there:

```ts
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
```

## Reference

Full component list: https://ui.shadcn.com/docs/components
