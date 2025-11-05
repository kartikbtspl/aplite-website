# Aplite Website - Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Build for Production
```bash
npm run build
npm start
```

## Project Overview

This is the complete website for Aplite, built with:
- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

## Pages Included

### Main Pages
- `/` - Homepage with hero, features, benefits, stats, and CTA
- `/product` - Product features page
- `/pricing` - Pricing plans
- `/company` - About page
- `/help` - Help center
- `/get-started` - Contact form
- `/login` - Login page

### Solution Pages
- `/solutions/ap-teams` - For AP teams
- `/solutions/ar-teams` - For AR teams
- `/solutions/banks-fintech` - For banks and fintech
- `/solutions/erp` - For ERP systems
- `/solutions/invoicing` - For invoicing software
- `/solutions/ai-agents` - For AI agents

### Legal Pages
- `/privacy` - Privacy policy
- `/terms` - Terms of service

## Design System

All components follow the Aplite admin dashboard design system:

### Colors
- Primary: Dark gray/black (`hsl(240 5.9% 10%)`)
- Secondary: Light gray (`hsl(240 4.8% 95.9%)`)
- Muted: Gray tones for secondary text
- Background: White
- Foreground: Dark text

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold, tight tracking
- Body: Regular weight, comfortable line height

### Components
- **Buttons**: Rounded-full, consistent padding, hover states
- **Cards**: Subtle shadows, rounded corners, border
- **Inputs**: Rounded-lg, focus rings, consistent height
- **Spacing**: Container padding matches admin (1.5rem to 6rem)

### Responsive Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1400px (container max-width)

## Component Structure

### Layout Components
- `Header` - Sticky navigation with dropdown menus
- `Footer` - Multi-column footer with links

### Section Components (Homepage)
- `Hero` - Main hero with animated search bar
- `HowItWorks` - Three-step process cards
- `Benefits` - Two-column risks vs solutions
- `Stats` - Four statistics in a grid
- `CTA` - Call-to-action with gradient background

### UI Components
- `Button` - Variants: default, outline, ghost
- `Card` - With header, title, description, content

## Customization

### Update Colors
Edit `app/globals.css` CSS variables:
```css
:root {
  --primary: 240 5.9% 10%;
  --secondary: 240 4.8% 95.9%;
  /* ... */
}
```

### Update Content
Edit content files in `/content/`:
- `homepage.ts` - Homepage content
- Add more content files as needed

### Update Constants
Edit `/lib/constants.ts`:
- Navigation items
- Search examples
- Statistics

## API Routes

### Search API
- `GET /api/search?q=query` - Search for businesses
- `POST /api/search` - Verify business details

Example:
```javascript
const response = await fetch('/api/search?q=Acme Corp');
const data = await response.json();
```

## Development Tips

### Hot Reload
The dev server supports hot reload. Changes to components will update instantly.

### Type Checking
Run TypeScript check:
```bash
npx tsc --noEmit
```

### Linting
Run ESLint:
```bash
npm run lint
```

### Build Analysis
Check build output:
```bash
npm run build
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
Build the project and deploy the `.next` folder:
```bash
npm run build
```

## Environment Variables

Create `.env.local` for environment variables:
```
NEXT_PUBLIC_API_URL=https://api.aplite.com
```

## Troubleshooting

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Type Errors
- Ensure all imports are correct
- Check TypeScript version compatibility

### Styling Issues
- Clear Tailwind cache
- Verify `tailwind.config.ts` is correct

## Support

For questions or issues:
- Check the README.md
- Review component documentation
- Contact the development team

## License

© 2024 Aplite. All rights reserved.
