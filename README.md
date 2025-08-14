# PHOS - A Global Peace Movement Landing Page

A celestial-inspired, modern landing page for PHOS, a global peace movement happening on August 12, 2026. Built with Next.js 14, App Router, and Tailwind CSS.

## ✨ Features

- **Bilingual Support**: English and Icelandic content with seamless language switching
- **Animated Background**: Dynamic star field with twinkling effects
- **Logo Animation**: Three circles aligning in golden ratio with subtle floating motion
- **Responsive Design**: Mobile-first approach optimized for all devices
- **Smooth Animations**: Fade-in and slide-up effects on scroll
- **Countdown Timer**: Real-time countdown to the event
- **Modern UI**: Gold-to-white gradients with glowing hover effects
- **Performance Optimized**: Built with Next.js 14 best practices

## 🎨 Design System

### Colors

- **Midnight Blue**: `#0B0F1A` - Primary background
- **Eclipse Gold**: `#F5C542` - Accent and highlights
- **Moon White**: `#F5F7FA` - Primary text
- **Starlight Gray**: `#B0B6C4` - Secondary text
- **Aurora Blue**: `#3C79A3` - Accent elements

### Typography

- **Headlines**: Playfair Display (serif) - Elegant and cosmic
- **Body**: Geist Sans - Clean and readable
- **Monospace**: Geist Mono - For technical elements

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd phos
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
phos/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout with fonts and metadata
│   │   ├── page.js            # Main landing page
│   │   └── globals.css        # Global styles and CSS variables
│   ├── components/
│   │   ├── AnimatedBackground.js    # Canvas-based star animation
│   │   ├── (Individual element animations) # Each section has its own animations
│   │   ├── Button.js                # Styled button components
│   │   ├── CountdownTimer.js        # Event countdown
│   │   ├── LanguageToggle.js        # EN/IS language switcher
│   │   └── LogoAnimation.js         # Animated logo with circles
│   └── utils/
│       └── contentLoader.js         # Content parsing utility
├── content/
│   ├── phos-en.txt            # English content
│   └── phos-is.txt            # Icelandic content
├── public/                     # Static assets
└── package.json
```

## 🌍 Content Management

The landing page content is managed through text files in the `content/` directory:

- `phos-en.txt` - English content
- `phos-is.txt` - Icelandic content

Content is automatically parsed and displayed based on the selected language. The language toggle in the top-right corner switches between languages without page reload.

## 🎭 Sections

1. **Hero** - Full-screen introduction with animated logo
2. **Vision** - Mission and purpose
3. **What is PHOS** - Three key concepts with icons
4. **Why Music & Together** - Philosophy of unity
5. **The Moment** - Event details with countdown timer
6. **How to Join** - Participation options
7. **Closing** - Final call-to-action

## 🔧 Customization

### Adding New Languages

1. Create a new content file: `content/phos-[lang-code].txt`
2. Follow the same format as existing content files
3. Update the language toggle component if needed

### Modifying Colors

Update CSS variables in `src/app/globals.css`:

```css
:root {
  --midnight-blue: #0b0f1a;
  --eclipse-gold: #f5c542;
  /* ... other colors */
}
```

### Adding New Sections

1. Create the section in the main page component
2. Add individual element animations with staggered timing
3. Add content to both language files

## 📱 Responsive Breakpoints

- **Mobile**: `< 640px` - Single column, stacked elements
- **Tablet**: `640px - 1024px` - Two-column grids, medium text
- **Desktop**: `> 1024px` - Full layouts, large text, hover effects

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

1. Build the project: `npm run build`
2. Start production server: `npm start`
3. Deploy the `out/` directory

## 🎯 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Font Loading**: Optimized font loading with `next/font`
- **Code Splitting**: Automatic code splitting by route
- **Lazy Loading**: Intersection Observer for animations
- **Canvas Animation**: Efficient star field rendering

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌟 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **PHOS Movement** - For the inspiring vision of global unity

---

_Built with ❤️ for a more peaceful world_
