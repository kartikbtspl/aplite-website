# Aplite Website

A modern, responsive website built with Next.js, TypeScript, and Tailwind CSS, following the design system from the Aplite Admin Dashboard.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Components**: Custom UI components with shadcn/ui patterns

## Design System

This website follows the exact design tokens and component patterns from the Aplite Admin Dashboard:

- Consistent color palette and theme tokens
- Matching typography scale and font weights
- Identical button styles and variants
- Same card shadows, padding, and border radius
- Unified spacing system and responsive breakpoints
- Matching animation curves and transitions

## Project Structure

```
/app
  /layout.tsx              # Root layout with Header/Footer
  /page.tsx                # Homepage
  /solutions/              # Solution pages
    /ap-teams/
    /ar-teams/
    /banks-fintech/
    /erp/
    /invoicing/
    /ai-agents/
  /company/                # About page
  /help/                   # Help center
  /pricing/                # Pricing page
  /get-started/            # Contact form
  /login/                  # Login page
  /product/                # Product page

/components
  /ui/                     # Reusable UI components
    button.tsx
    card.tsx
  /layout/                 # Layout components
    header.tsx
    footer.tsx
  /sections/               # Homepage sections
    hero.tsx
    how-it-works.tsx
    benefits.tsx
    stats.tsx
    cta.tsx

/lib
  utils.ts                 # Utility functions
  constants.ts             # App constants

/content
  homepage.ts              # Homepage content
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Features

- **Responsive Design**: Mobile-first approach with breakpoints matching admin dashboard
- **Animated Search Bar**: Hero section with rotating placeholder examples
- **Solution Pages**: Dedicated pages for each customer segment
- **Contact Forms**: Get Started and Login pages with form handling
- **Consistent Navigation**: Header with dropdown menus and mobile support
- **SEO Optimized**: Proper meta tags and semantic HTML

## Design Principles

- **Minimalist**: Clean, uncluttered interfaces with generous whitespace
- **Modular**: Reusable components following single responsibility
- **High Contrast**: Accessible color combinations for readability
- **Token-Driven**: All styles use theme tokens, no hardcoded values

## Customization

All design tokens are defined in:
- `tailwind.config.ts` - Theme configuration
- `app/globals.css` - CSS variables and base styles
- `/lib/constants.ts` - App-wide constants

## License

© 2024 Aplite. All rights reserved.
