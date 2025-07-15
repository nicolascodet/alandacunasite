# FedFlo.ai - Automation Platform for Government Contractors

A sophisticated Next.js website for FedFlo.ai - the automation platform built specifically for small-to-mid-sized government contractors (10-200 employees) managing $500K-$50M in annual contracts.

## 🚀 Features

### Design & UI
- **Modern Aesthetics**: Clean, Notion/Stripe/Linear-inspired design
- **Glassmorphism Effects**: Beautiful glass-like components with backdrop blur
- **Gradient Backgrounds**: Subtle animated gradient backgrounds and text effects
- **Custom Animations**: Framer Motion powered animations and micro-interactions
- **Responsive Design**: Fully responsive across all device sizes

### Interactive Elements
- **Scroll-triggered Animations**: Elements animate into view as you scroll
- **Hover Effects**: Sophisticated hover states with scale and shadow effects
- **Parallax Scrolling**: Subtle parallax effects in the hero section
- **Dynamic Header**: Header changes appearance on scroll
- **Smooth Scrolling**: Buttery smooth page navigation

### Technical Stack
- **Next.js 14**: Latest Next.js with App Router
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Framer Motion**: Advanced animations and transitions
- **Lucide React**: Beautiful, customizable icons

### Custom Design Elements
- **Custom Color Palette**: Professional blue and gray tones
- **Typography**: Inter font family with multiple weights
- **Custom CSS Classes**: Glass effects, gradient text, pulse animations
- **Mobile-First**: Responsive design starting from mobile

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Project Structure

```
fedflo-ai/
├── app/
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main homepage component
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── postcss.config.js        # PostCSS configuration
```

## 🎨 Design System

### Colors
- **Primary Blue**: Various shades from 50-900
- **Gray Scale**: Professional grays from 50-900
- **Gradients**: Custom gradient combinations

### Animations
- `fade-in-up`: Elements slide up while fading in
- `fade-in-down`: Elements slide down while fading in
- `slide-in-left/right`: Horizontal slide animations
- `bounce-gentle`: Subtle bouncing effect
- `glow`: Pulsing glow effect

### Custom CSS Classes
- `.glass`: Glassmorphism effect
- `.gradient-text`: Gradient text effect
- `.btn-hover-effect`: Button shine effect
- `.pulse-glow`: Pulsing glow animation

## 🔧 Customization

### Tailwind Configuration
The `tailwind.config.js` file contains custom:
- Color palette
- Font families
- Custom animations
- Background gradients
- Extended spacing and sizing

### Global Styles
The `app/globals.css` file includes:
- Custom scrollbar styling
- Glassmorphism utilities
- Gradient text effects
- Custom button effects
- Floating animations

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

All components are fully responsive with mobile-first design approach.

## 🚀 Deployment

This project can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Digital Ocean App Platform**

Simply connect your git repository and the platform will handle the rest.

## 📄 License

This project is private and proprietary to FedFlo.ai. 