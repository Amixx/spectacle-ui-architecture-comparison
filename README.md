# Spectacle UI Architecture Comparison

A comparison of different UI architecture approaches using React: headless vs styled components, with CSS, Tailwind, and Vanilla Extract styling solutions.

## Installation

```bash
bun install
```

## Development

Run specific architecture implementations:

```bash
# CSS with headless components
bun run dev:css-headless

# CSS with styled components
bun run dev:css-styled

# Tailwind with headless components
bun run dev:tailwind-headless

# Tailwind with styled components
bun run dev:tailwind-styled

# Vanilla Extract with headless components
bun run dev:vanilla-extract-headless

# Vanilla Extract with styled components
bun run dev:vanilla-extract-styled
```

## Linting

```bash
bun run lint:fix
```

## Project Structure

- `apps/` - Demo applications for each architecture approach
- `packages/` - Shared UI component libraries (headless and styled variants)
