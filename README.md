# NeuroDyn IT Solutions Website

A modern, scalable, and high-performance business website for NeuroDyn IT Solutions, built with Astro, React, TypeScript, and Tailwind CSS.

## 🎯 Features

- **Modern Design**: Deep blue, white, and gradient tech accents with glassmorphism effects
- **Responsive Layout**: Mobile-first, grid-based design that works on all devices
- **Dark/Light Mode**: Toggle between light and dark themes
- **Smooth Animations**: Hover effects and scroll transitions using Framer Motion
- **WhatsApp Integration**: Floating WhatsApp button with pre-filled message
- **SEO Optimized**: Proper meta tags and structured data
- **Fast Loading**: Optimized images and lazy loading
- **Component-Based Architecture**: Scalable and maintainable code structure

## 📄 Pages

1. **Homepage** (`/`)
   - Hero section with tagline
   - Services overview with cards
   - Why Choose Us section
   - Success stories/case studies
   - Client testimonials
   - Call-to-action banner
   - Contact form
   - Footer with contact info

2. **About Us** (`/about`)
   - Company introduction
   - Mission & Vision
   - Core values
   - Core strengths

3. **Services** (`/services`)
   - Website Development
   - Web Hosting
   - Mobile App Development (Android & iOS)
   - Data Analytics Services
   - Custom Software Development
   - IT Consulting & Support

4. **Contact** (`/contact`)
   - Contact form (Name, Email, Phone, Message)
   - Contact information
   - WhatsApp integration
   - Google Maps embed

## 🛠️ Tech Stack

- **Framework**: Astro 7
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **UI Components**: shadcn/ui

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd neurodyn-site
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and deploy

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Install the Netlify CLI: `npm install -g netlify-cli`
4. Deploy: `netlify deploy --prod`

### Other Platforms

The built output can be deployed to any platform that supports Node.js or static site hosting.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory (optional):

```env
# Contact Information (optional - defaults are set in code)
CONTACT_PHONE=9935232167
CONTACT_EMAIL=info@neurodyn.in
```

### Customization

- **Brand Info**: Update brand details in each page component
- **Services**: Modify the services array in `src/components/react/ServicesPage.tsx`
- **Testimonials**: Update testimonials in `src/components/react/HomePage.tsx`
- **Colors**: Modify Tailwind config in `src/styles/globals.css`

## 📁 Project Structure

```
neurodyn-site/
├── src/
│   ├── components/
│   │   ├── react/
│   │   │   ├── HomePage.tsx
│   │   │   ├── AboutPage.tsx
│   │   │   ├── ServicesPage.tsx
│   │   │   └── ContactPage.tsx
│   │   ├── Navigation.tsx
│   │   ├── Logo.tsx
│   │   └── ui/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── services.astro
│   │   └── contact.astro
│   ├── styles/
│   │   └── globals.css
│   └── lib/
├── public/
├── package.json
├── tsconfig.json
└── astro.config.mjs
```

## 🎨 Design System

### Colors

- Primary: Deep Blue (#0B3C5D)
- Accent: Blue (#3B82F6)
- Secondary: Purple (#8B5CF6)
- Background: Slate/Blue gradients

### Typography

- Headings: Bold, large sizes
- Body: Clean, readable text
- Responsive font sizes

## 🔐 Security

- Form validation on client side
- Secure API handling
- No sensitive data exposed in client code
- Ready for HTTPS deployment

## 📱 Responsiveness

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🚀 Performance Optimization

- Static site generation with Astro
- Lazy loading for images
- Code splitting
- Minified production build
- Optimized bundle size
- React components loaded on-demand

## 📞 Contact Information

- **Phone**: +91-8004339331
- **Email**: info@neurodyn.in
- **Location**: Lucknow, Uttar Pradesh, India

## 📄 License

This project is proprietary software for NeuroDyn IT Solutions.

## 👥 Support

For support, contact info@neurodyn.in or use the contact form on the website.

---

Built with ❤️ by NeuroDyn IT Solutions
