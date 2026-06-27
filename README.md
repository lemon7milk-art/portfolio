# Modern Portfolio Website

A beautiful and modern portfolio website built with **Astro** and **Svelte**.

## Features

- ⚡ **Lightning Fast** - Static site generation with Astro
- 🎨 **Modern Design** - 2026 flat design system with gradient accents
- 📱 **Responsive** - Mobile-first design that works on all devices
- ♿ **Accessible** - Built with accessibility in mind
- 🚀 **Easy Deployment** - Deploy to GitHub Pages with one command
- 🔍 **SEO Friendly** - Optimized for search engines

## Tech Stack

- **Astro 4.13.0** - Static site generator
- **Svelte 5.0.0** - Component framework (latest)
- **TypeScript** - Type safety
- **Node.js 24+** - Runtime environment

## Getting Started

### Prerequisites

- Node.js 24 or higher
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/lemon7milk-art/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

### Deployment to GitHub Pages

```bash
# Deploy to GitHub Pages
npm run deploy
```

Make sure to update the `site` configuration in `astro.config.mjs` with your GitHub Pages URL.

## Project Structure

```
src/
├── components/       # Svelte components
├── layouts/         # Astro layouts
└── pages/           # Astro pages
```

## Customization

### Colors

Edit the CSS variables in `src/layouts/Layout.astro` to customize the color scheme:

```css
:root {
  --primary: #0066ff;
  --secondary: #00d9ff;
  --accent: #ff6b6b;
  /* ... more colors ... */
}
```

### Content

Update the content in the Svelte components to personalize your portfolio:

- `src/components/Hero.svelte` - Hero section
- `src/components/Projects.svelte` - Projects showcase
- `src/components/About.svelte` - About section
- `src/components/Contact.svelte` - Contact form

## License

MIT License - feel free to use this template for your own portfolio!
