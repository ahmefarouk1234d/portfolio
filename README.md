# Ahmed Farouk - Full-Stack Developer Portfolio

[![CI/CD](https://github.com/ahmefarouk1234d/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/ahmefarouk1234d/portfolio/actions/workflows/ci.yml)
[![Performance](https://img.shields.io/badge/Lighthouse_Performance-100-brightgreen)](https://developers.google.com/web/tools/lighthouse)
[![Accessibility](https://img.shields.io/badge/Lighthouse_A11y-96-brightgreen)](https://www.w3.org/WAI/WCAG2AA-Conformance)

> Design-first full-stack portfolio (Next.js, TypeScript, Tailwind CSS, Framer Motion, SEO-optimized)

A world-class developer portfolio showcasing expertise in TypeScript, Next.js, React, and Firebase. Built with performance and accessibility as core priorities.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional interface with light/dark mode support
- ⚡ **Lightning Fast**: Perfect 100 Lighthouse performance score
- ♿ **Accessible**: WCAG AA compliant with 96 accessibility score
- 📱 **Responsive**: Mobile-first design that works on all devices
- 🎬 **Smooth Animations**: Subtle Framer Motion animations with reduced-motion support
- 🔍 **SEO Optimized**: Sitemap, robots.txt, Open Graph, Twitter Cards, JSON-LD structured data
- 🎯 **Type Safe**: Strict TypeScript with zero `any` types
- 🎭 **Theme Toggle**: System, light, and dark mode with persistent storage
- 📜 **Certificate Lightbox**: Accessible lightbox for viewing certifications
- 🚀 **CI/CD Ready**: GitHub Actions for automated type-checking, linting, and building

## 🏗️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Image Optimization**: Next.js Image with Sharp
- **Linting**: ESLint with Next.js config
- **Deployment**: Optimized for Vercel

## 📄 Pages

1. **Home** (`/`) - Hero section with personal photo, stats, and CTAs
2. **Projects** (`/projects`) - Featured projects with problem→solution→impact framework
3. **Skills** (`/skills`) - Categorized technical skills with progress visualization
4. **Experience** (`/experience`) - Timeline-based work history
5. **Certificates** (`/certificates`) - Interactive certificate gallery with lightbox
6. **Contact** (`/contact`) - Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ahmefarouk1234d/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build the application
npm run build

# Start the production server
npm run start
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

### Color Palette

**Light Mode:**
- Background: `#ffffff`
- Foreground: `#0a0a0a`
- Accent: `#3b82f6` (Blue)
- Card: `#f9fafb`

**Dark Mode:**
- Background: `#0a0a0a`
- Foreground: `#ededed`
- Accent: `#60a5fa` (Light Blue)
- Card: `#1a1a1a`

### Spacing

8-point grid system:
- Base unit: 8px
- Scale: 8px, 16px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px

### Typography

System font stack for optimal performance:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

## ♿ Accessibility

- ✅ WCAG AA compliant
- ✅ Keyboard navigation support
- ✅ Focus visible indicators
- ✅ ARIA labels on interactive elements
- ✅ Semantic HTML
- ✅ Reduced motion support via `prefers-reduced-motion`
- ✅ Color contrast ratios meet 4.5:1 minimum

## 🔍 SEO Features

- ✅ Server-side rendering with Next.js
- ✅ Optimized meta tags for all pages
- ✅ Open Graph protocol for social sharing
- ✅ Twitter Card support
- ✅ Sitemap.xml for search engines
- ✅ Robots.txt for crawler management
- ✅ JSON-LD structured data (Person + CreativeWork schemas)
- ✅ Semantic HTML structure
- ✅ Dynamic OG image generation

## 📊 Performance

### Lighthouse Scores (Desktop, Production)

**Homepage:**
- Performance: 100/100 ✅
- Accessibility: 96/100 ✅

**Projects Page:**
- Performance: 100/100 ✅
- Accessibility: 93/100 ✅

### Optimization Techniques

- Static site generation (SSG) for all pages
- Automatic code splitting
- Image optimization with next/image
- Lazy loading for images
- Font optimization with system fonts
- Minified CSS and JavaScript
- Tree shaking to remove unused code

## 🔄 CI/CD

GitHub Actions workflow automatically:
1. Runs TypeScript type checking
2. Runs ESLint
3. Builds the application
4. Verifies build success

Workflow runs on:
- Every push to `main`
- Every pull request to `main`

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── hero/              # Hero images with blur placeholders
│   └── certs/             # Certificate images
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── api/og/        # OG image generation
│   │   ├── certificates/  # Certificates page
│   │   ├── contact/       # Contact page
│   │   ├── experience/    # Experience page
│   │   ├── projects/      # Projects page
│   │   ├── skills/        # Skills page
│   │   ├── layout.tsx     # Root layout with metadata
│   │   ├── page.tsx       # Homepage
│   │   ├── sitemap.ts     # Dynamic sitemap
│   │   └── robots.ts      # Robots.txt
│   ├── components/        # Reusable React components
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Footer.tsx
│   │   ├── Lightbox.tsx
│   │   ├── Navbar.tsx
│   │   ├── StructuredData.tsx
│   │   └── ThemeProvider.tsx
│   └── data/              # Static data
│       └── certificates.ts
├── .github/
│   └── workflows/
│       └── ci.yml         # CI/CD pipeline
├── DESIGN_RATIONALE.md    # Design decisions and rationale
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ahmed Farouk**

- Email: farwqahmd118@gmail.com
- Phone: +20 109 127 9723
- WhatsApp: +20 109 127 9723
- GitHub: [@ahmefarouk1234d](https://github.com/ahmefarouk1234d)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Deployed on [Vercel](https://vercel.com/)

---

**Note**: This portfolio is continuously updated. See [DESIGN_RATIONALE.md](DESIGN_RATIONALE.md) for detailed design decisions and future enhancement plans.
