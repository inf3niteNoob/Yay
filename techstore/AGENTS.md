# TechStore Project

## Project Overview

Personal Next.js e-commerce project for selling electronics (laptops, phones, tablets, smart watches).

## Technology Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom components
- **Icons**: Lucide React
- **Theme**: next-themes (dark/light mode)

## Project Structure

```
techstore/
├── app/
│   ├── shop/
│   │   └── page.tsx          # Shop page with filters
│   ├── about/
│   │   └── page.tsx          # About Us page
│   ├── globals.css           # Global styles & CSS variables
│   ├── layout.tsx            # Root layout with providers
│   ├── page.tsx              # Landing page
│   └── providers.tsx         # Theme & Cart providers
├── components/
│   ├── cart-context.tsx      # Shopping cart state management
│   ├── cart-drawer.tsx       # Slide-out cart drawer
│   ├── footer.tsx            # Site footer
│   ├── navbar.tsx            # Navigation bar
│   ├── product-card.tsx      # Product display card
│   └── theme-toggle.tsx      # Dark/light mode toggle
├── public/
│   └── images/               # Product images and assets
├── next.config.js
├── tailwind.config.ts
└── package.json
```

## Design System

### Colors
- **Primary**: Slate/gray for text and UI
- **Accent**: Blue (#3b82f6) for CTAs and highlights
- **Background**: Light (#fafafa) / Dark (#0a0a0a)
- **Card**: White / Dark slate

### Typography
- **Font**: Geist Sans (primary), Geist Mono (monospace)
- **Headings**: Bold, tight tracking
- **Body**: Regular, comfortable reading size

### Key Features
- Dark/Light mode with system preference detection
- Floating navbar with blur effect
- Shopping cart with add/remove/update functionality
- Product filtering by category and price
- Responsive design (mobile-first)

## Assets

All assets are in `/public/images/` with standardized naming:

| Original | Standardized |
|----------|-------------|
| black logo.png | logo-dark.png |
| white logo.png | logo-light.png |
| laptop.png | product-laptop.png |
| phone.png | product-phone.png |
| smart watch.png | product-watch.png |
| tablet.png | product-tablet.png |
| wood.jpg | texture-wood.jpg |

## Commands

```bash
# Development
cd techstore && npm run dev

# Build
cd techstore && npm run build

# Production start
cd techstore && npm start
```

## Development Guidelines

1. Use CSS variables for theming (defined in globals.css)
2. Components use `cursor-pointer` for all interactive elements
3. Smooth transitions (150-300ms) for hover states
4. Lucide icons only (no emojis as UI elements)
5. Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
