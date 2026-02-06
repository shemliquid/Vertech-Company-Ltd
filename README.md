# Vertex Tech Company Ltd - Official Website

> A modern, high-performance company website showcasing software development services and portfolio.

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-Proprietary-red?style=flat-square)

## 🌟 Features

### Design & UX
- **Innovative Navigation** - Animated pie-chart navigation on desktop with smooth transitions
- **Fully Responsive** - Optimized layouts for mobile, tablet, and desktop
- **Custom Animations** - Smooth fade-ins, floating elements, and interactive components
- **Dark Theme** - Professional navy-blue color scheme with accent highlights

### Technical Excellence
- **Server & Client Components** - Optimized rendering strategy with Next.js App Router
- **Type Safety** - Full TypeScript implementation for reliability
- **Performance** - Fast page loads with Next.js optimizations and static data
- **SEO Optimized** - Proper meta tags, semantic HTML, and crawlable structure
- **Web Forms Integration** - Contact form powered by Web3Forms API

### Components
- Animated clock widget with real-time updates
- Reusable UI components (Button, Card, Navigation, Footer)
- Professional layout with consistent styling
- Mobile-optimized bottom navigation bar

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.17 or later
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/vertex-tech-website.git
   cd vertex-tech-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure

```
vertex-tech-website/
│
├── app/                          # Next.js App Router
│   │
│   ├── components/              # Reusable React Components
│   │   ├── Navigation.tsx       # Advanced pie navigation menu
│   │   ├── Footer.tsx           # Site footer with links
│   │   ├── ClockWidget.tsx      # Animated SVG clock
│   │   ├── Button.tsx           # Styled button component
│   │   ├── Card.tsx             # Content card component
│   │   └── Logo.tsx             # Company logo component
│   │
│   ├── data/                    # Static Content Data
│   │   ├── services.ts          # Services offerings & details
│   │   └── projects.ts          # Portfolio projects & case studies
│   │
│   ├── utils/                   # Utility Functions
│   │   └── api.ts               # Web3Forms API integration
│   │
│   ├── (pages)/                 # Route Pages
│   │   ├── about/page.tsx       # About us page
│   │   ├── contact/page.tsx     # Contact form page
│   │   ├── portfolio/page.tsx   # Portfolio showcase
│   │   └── services/page.tsx    # Services listing
│   │
│   ├── layout.tsx               # Root layout (Nav + Footer)
│   ├── page.tsx                 # Homepage
│   ├── not-found.tsx            # Custom 404 page
│   └── globals.css              # Global styles & Tailwind
│
├── public/                      # Static Assets
│   ├── favicon.svg              # Site favicon
│   ├── logo-dark.png            # Logo (dark background)
│   ├── logo-light.png           # Logo (light background)
│   └── vertex.png               # Company branding
│
├── .env.local                   # Environment variables (not in git)
├── .gitignore                   # Git ignore rules
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.mjs           # PostCSS configuration
├── package.json                 # Dependencies & scripts
└── README.md                    # This file
```

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | [Next.js 15](https://nextjs.org/) - React framework with App Router |
| **Language** | [TypeScript 5.9](https://www.typescriptlang.org/) - Type-safe JavaScript |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) - Utility-first CSS |
| **Fonts** | [Google Fonts](https://fonts.google.com/) - Inter & Poppins |
| **Forms** | [Web3Forms](https://web3forms.com/) - Serverless form backend |
| **Icons** | SVG - Custom & Heroicons-style |
| **Deployment** | [Vercel](https://vercel.com/) - Recommended platform |

---

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Create optimized production build
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint for code quality checks
```

---

## 🌐 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Homepage | Company overview, featured services & projects |
| `/services` | Services | Detailed breakdown of all service offerings |
| `/portfolio` | Portfolio | Showcase of completed projects & case studies |
| `/about` | About | Company values, mission, and team information |
| `/contact` | Contact | Contact form with Web3Forms integration |
| `/*` | 404 | Custom not-found page with navigation links |

---

## 🎨 Design System

### Color Palette

```css
/* Navy Scale */
--navy-50:  #f8fafc   /* Lightest background */
--navy-900: #0f172a   /* Darkest background */

/* Accent Colors */
--accent:       #3b82f6   /* Primary blue */
--accent-light: #60a5fa   /* Light blue */
--accent-dark:  #2563eb   /* Dark blue */
```

### Typography

- **Headings**: Poppins (600, 700 weight)
- **Body**: Inter (400, 500 weight)
- **Responsive scaling**: clamp() for fluid typography

### Responsive Breakpoints

```css
sm:  640px   /* Small devices */
md:  768px   /* Tablets */
lg:  1024px  /* Laptops */
xl:  1280px  /* Desktops */
```

---

## 🔐 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Required
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=<your_web3forms_access_key>

# Optional (for future backend integration)
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

> ⚠️ **Security Note**: Never commit `.env.local` to version control

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Add environment variables
   - Deploy!

### Manual Deployment

```bash
# Build for production
npm run build

# Test production build locally
npm run start

# Deploy build folder to your hosting provider
# Upload .next/, public/, package.json, next.config.ts
```

---

## 🧩 Key Components

### Navigation Component
**File**: `app/components/Navigation.tsx`

Advanced pie-chart style navigation menu with:
- Animated donut slices for each page
- Smooth scroll-based transitions (centered → top-right)
- Hover effects with color-coded sections
- Click to navigate, double-click logo for home
- Mobile-optimized bottom bar for small screens

**Features**:
- Client-side routing with Next.js
- Canvas-like SVG rendering
- Smooth easing animations
- Responsive breakpoints

### Clock Widget
**File**: `app/components/ClockWidget.tsx`

Animated SVG clock displaying:
- Real-time hours, minutes, seconds
- Days of the week (rotating ring)
- Months (rotating ring)
- Day of month (1-31, rotating ring)

**Technical**:
- Pure SVG with React hooks
- 1-second update interval
- Intro animation on mount
- Zero dependencies

---

## 📊 Data Management

### Static Data Structure

Content is stored in TypeScript files for type safety:

**Services** (`app/data/services.ts`):
```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  overview: string;
  whoItIsFor: string;
  benefits: string[];
  process: string[];
}
```

**Projects** (`app/data/projects.ts`):
```typescript
interface Project {
  id: number;
  name: string;
  industry: string;
  description: string;
  keyResults: string[];
  link?: string | null;
}
```

---

## 🧪 Browser Support

- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest 2 versions)
- ✅ Mobile Safari (iOS 12+)
- ✅ Chrome Android (latest)

---

## 📈 Performance

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

© 2024 Vertex Tech Company Ltd. All rights reserved.

This project is proprietary and confidential. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited.

---

## 📞 Contact & Support

**Vertex Tech Company Ltd**

- 🌐 Website: [www.vertextech.com](https://vertextech.com)
- 📧 Email: contact@vertextech.com
- 💼 LinkedIn: [@vertextech](https://linkedin.com/company/vertextech)
- 📱 Twitter: [@vertextech](https://twitter.com/vertextech)

For technical support or inquiries, please use the contact form on our website.

---

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) - Amazing React framework
- [Vercel](https://vercel.com/) - Hosting & deployment platform
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Web3Forms](https://web3forms.com/) - Serverless form backend
- [Google Fonts](https://fonts.google.com/) - Beautiful typography

---

<div align="center">

**Built with ❤️ by Vertex Tech Company Ltd**

[⬆ Back to Top](#vertex-tech-company-ltd---official-website)

</div>
