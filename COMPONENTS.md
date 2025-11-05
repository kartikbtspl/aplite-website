# Component Documentation

## UI Components

### Button

A versatile button component with multiple variants and sizes.

**Props:**
- `variant`: "default" | "outline" | "ghost"
- `size`: "default" | "sm" | "lg"
- `asChild`: boolean (renders as child component)

**Usage:**
```tsx
import { Button } from "@/components/ui/button";

<Button variant="default" size="lg">
  Click Me
</Button>

<Button variant="outline" asChild>
  <Link href="/page">Link Button</Link>
</Button>
```

**Variants:**
- `default`: Solid background with primary color
- `outline`: Border with transparent background
- `ghost`: No border, transparent background

---

### Card

Container component for content grouping.

**Components:**
- `Card`: Main container
- `CardHeader`: Header section
- `CardTitle`: Title text
- `CardDescription`: Description text
- `CardContent`: Main content area

**Usage:**
```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>
```

---

## Layout Components

### Header

Sticky navigation header with responsive menu.

**Features:**
- Sticky positioning
- Dropdown solutions menu
- Mobile hamburger menu
- Logo and navigation links
- CTA buttons

**Usage:**
```tsx
import { Header } from "@/components/layout/header";

<Header />
```

**Customization:**
Edit navigation items in `/lib/constants.ts`:
```tsx
export const NAVIGATION = [
  { name: "Home", href: "/" },
  // ...
];
```

---

### Footer

Multi-column footer with links and branding.

**Features:**
- Four-column layout (responsive)
- Product, Solutions, Company, Legal sections
- Logo and copyright
- Responsive grid

**Usage:**
```tsx
import { Footer } from "@/components/layout/footer";

<Footer />
```

---

## Section Components

### Hero

Homepage hero section with animated search bar.

**Features:**
- Large heading and subtitle
- Animated search input with rotating placeholders
- CTA button
- Decorative background elements
- Hero image placeholder

**Usage:**
```tsx
import { Hero } from "@/components/sections/hero";

<Hero />
```

**Customization:**
Edit search examples in `/lib/constants.ts`:
```tsx
export const SEARCH_EXAMPLES = [
  "Acme Corporation",
  "Tech Innovations Ltd",
  // ...
];
```

---

### HowItWorks

Three-step process explanation.

**Features:**
- Three-column grid (responsive)
- Icon, title, and description for each step
- Card-based layout

**Usage:**
```tsx
import { HowItWorks } from "@/components/sections/how-it-works";

<HowItWorks />
```

---

### Benefits

Two-column comparison of risks vs solutions.

**Features:**
- Left column: Risks with alert icons
- Right column: Solutions with check icons
- Center logo
- Responsive layout

**Usage:**
```tsx
import { Benefits } from "@/components/sections/benefits";

<Benefits />
```

---

### Stats

Statistics display in a grid.

**Features:**
- Four-column grid (responsive)
- Large numbers with labels
- Centered layout

**Usage:**
```tsx
import { Stats } from "@/components/sections/stats";

<Stats />
```

**Customization:**
Edit stats in `/lib/constants.ts`:
```tsx
export const STATS = [
  { value: "99.9%", label: "Accuracy Rate" },
  // ...
];
```

---

### CTA

Call-to-action section with gradient background.

**Features:**
- Gradient background
- Heading and subtitle
- Primary and secondary buttons
- Rounded container

**Usage:**
```tsx
import { CTA } from "@/components/sections/cta";

<CTA />
```

---

## Styling Guidelines

### Tailwind Classes

**Spacing:**
- Container padding: `px-6 sm:px-10 md:px-16`
- Section padding: `py-20 md:py-32`
- Card padding: `p-8`

**Typography:**
- Heading 1: `text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight`
- Heading 2: `text-3xl md:text-4xl font-bold tracking-tight`
- Heading 3: `text-xl font-semibold`
- Body: `text-lg text-muted-foreground`

**Borders:**
- Default: `border`
- Thick: `border-2`
- Rounded: `rounded-lg`
- Fully rounded: `rounded-full`

**Shadows:**
- Card: `shadow-sm`
- Elevated: `shadow-lg`
- Large: `shadow-2xl`

**Colors:**
- Primary text: `text-foreground`
- Secondary text: `text-muted-foreground`
- Primary button: `bg-primary text-primary-foreground`
- Accent: `bg-accent text-accent-foreground`

### Responsive Design

**Mobile First:**
All components are designed mobile-first with progressive enhancement.

**Breakpoints:**
```tsx
// Mobile: default (no prefix)
<div className="grid-cols-1">

// Tablet: md prefix
<div className="md:grid-cols-2">

// Desktop: lg prefix
<div className="lg:grid-cols-3">
```

**Common Patterns:**
```tsx
// Responsive text
<h1 className="text-4xl md:text-5xl lg:text-6xl">

// Responsive spacing
<section className="py-12 md:py-20 lg:py-32">

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

---

## Animation Guidelines

### Framer Motion

Used for micro-interactions and page transitions.

**Common Animations:**
```tsx
// Fade in
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>

// Slide up
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

### CSS Animations

Defined in `tailwind.config.ts`:
- `animate-fade-in`: Fade in with slight upward movement
- `animate-fade-in-up`: Fade in with larger upward movement
- `animate-slide-in`: Slide in from left

---

## Best Practices

### Component Structure
1. Import statements
2. Type definitions
3. Component function
4. Return JSX
5. Export

### Naming Conventions
- Components: PascalCase (`Button`, `HowItWorks`)
- Files: kebab-case (`how-it-works.tsx`)
- Props: camelCase (`variant`, `asChild`)

### Accessibility
- Use semantic HTML
- Include ARIA labels where needed
- Ensure keyboard navigation
- Maintain color contrast ratios

### Performance
- Use `"use client"` only when needed
- Optimize images with Next.js Image
- Lazy load heavy components
- Minimize bundle size

---

## Creating New Components

### Template

```tsx
import { cn } from "@/lib/utils";

interface MyComponentProps {
  title: string;
  description?: string;
  className?: string;
}

export function MyComponent({ 
  title, 
  description, 
  className 
}: MyComponentProps) {
  return (
    <div className={cn("base-classes", className)}>
      <h2 className="text-2xl font-bold">{title}</h2>
      {description && (
        <p className="text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
```

### Steps
1. Create file in appropriate directory
2. Define TypeScript interface for props
3. Implement component logic
4. Add Tailwind classes
5. Export component
6. Import and use in pages

---

## Troubleshooting

### Component Not Rendering
- Check import path
- Verify export statement
- Check for TypeScript errors

### Styling Not Applied
- Verify Tailwind class names
- Check for conflicting styles
- Clear `.next` cache

### Type Errors
- Ensure props match interface
- Check for missing required props
- Verify import types

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
