# lessonlink-frontend Agent Guidelines

This document outlines key information for AI agents working in this repository to ensure efficient and accurate operations.

## Project Overview

- Built with **Refine**, a React framework for admin panels and B2B apps.
- Uses **React**, **TypeScript**, **Vite** (for development and build), and **Tailwind CSS**.
- Leverages **shadcn/ui** for UI components.

## Key Commands

- **Start Development Server**: `npm run dev`
- **Build for Production**: `npm run build` (runs `tsc` then `refine build`)
- **Run Production Server**: `npm run start`

## Code Structure & Aliases

Absolute imports are configured to simplify navigation:

- `@/`: Resolves to the `src/` directory.
- `@/components`: Resolves to `src/components/`.
- `@/lib`: Resolves to `src/lib/`.
- `@/lib/utils`: Resolves to `src/lib/utils/`.
- `@/hooks`: Resolves to `src/hooks/`.
- `@/components/ui`: Resolves to `src/components/ui/`.

## Linting

- ESLint is configured with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`.
- Note the `react-refresh/only-export-components` rule is set to `warn` and allows constant exports.
