# LYR COLLECTIVE ⚡️
> **Premium Streetwear & Techwear Catalog Application**

An immersive, cinematic web application built for the modern streetwear label **LYR COLLECTIVE** (SoHo, New York). Featuring state-of-the-art 3D cursor-tracking parallax, fluid spring physics, interactive catalog drawers, and strict **100/100 Lighthouse** scores in SEO and Accessibility.

---

## 🌟 Key Features

* **3D Cursor Parallax Hero:** An interactive hero showcase where background depth, model imagery, typography, and promotional badges float independently relative to mouse movements using `framer-motion` spring values.
* **Cinematic Spring Cursor:** A customized mouse-following dot and lagging spring ring that morphs, scales, and glows when hovering over `.interactive` DOM elements.
* **Fluid Slide-in Cart Drawer:** Real-time shopping bag management. Users can add products, view animated count badges, delete items, calculate subtotal, and simulate checkouts.
* **Full-Screen Blurred Search:** Real-time filterable catalog search overlay with trending suggestion triggers.
* **Draggable Product Carousel:** A touch-swipeable, fluidly draggable horizontal product slider utilizing Framer Motion drag gestures and absolute button offsets.
* **Responsive Inline Badge Grid:** Automatic conversion of absolute floating tags to structured inline cards on mobile viewports to prevent layout overlap and content clipping.
* **Technical Contact Panel:** A validation-guarded, clean contact block mapped to the SoHo, NY headquarters, containing custom-focused styling and success transitions.

---

## 🛠 Tech Stack & Software Architecture

The application is structured under a modern, component-driven architecture:

* **Core Framework:** React 19 (compiled via Vite 8 & Rolldown).
* **Styling System:** Vanilla CSS Custom Properties (CSS Variables) defining a cohesive, deep-black theme (`#050505`) accented with premium streetwear neon orange (`#ff5200`).
* **Animation Engine:** Framer Motion 12 (used for spring calculations, mounting/unmounting transitions via `AnimatePresence`, and gestures).
* **Iconography:** Lucide React.
* **Directory Structure:**
  * `src/assets/` - Highly optimized custom WebP visual assets.
  * `src/components/` - Focused, reusable React components (`Navbar`, `Hero`, `ProductGrid`, etc.).
  * `src/index.css` - Global resets, custom scrollbars, typography scales, and global media queries.

---

## 🚀 Performance & SEO Optimizations

This application has been meticulously optimized to achieve a **perfect 100/100 score in SEO & Accessibility** and **95+ in Performance** on Lighthouse audits:

### 1. Image WebP Transformation
All custom generated high-definition PNG imagery was processed and converted to compressed **WebP format** (quality 80). 
* **Payload Reduction:** Total assets weight dropped from **16.3 MB to ~750 KB** (representing an average **95% reduction** in network payload).
* **First Contentful Paint (FCP) Improvement:** Drastically reduced page load latency, avoiding render-blocking image requests.

### 2. Accessibility (A11y) — 100 Score
* **Tap Target Optimization:** All header and menu triggers (Search, Profile, Shopping Bag, Hamburger Toggle) expanded to an interactive area of **48px x 48px** to satisfy mobile touch target audits.
* **Contrast Compliance:** Brightened the primary text colors (`--text-secondary` set to `#b3b3b3`) to satisfy the WCAG AA minimum contrast ratio of 4.5:1.
* **Descriptive Labels:** Every `<input>` field, close button, delete trigger, and icon-only redirection link (`<a>`) contains explicit `aria-label` declarations.

### 3. Search Engine Optimization (SEO) — 100 Score
* **Broken Anchor Resolution:** Replaced all empty links (`href="#"`) with valid external links (`mailto:`, absolute URLs) and matched local anchors (e.g., changing `#about` to the existing `#collections` section ID).
* **Semantic HTML:** Strict usage of document lang (`en`), viewport configurations, structured heading hierarchies (`<h1>` through `<h3>`), and rich meta description fields.

---

## 📦 Getting Started

### Prerequisites
* **Node.js** (v18 or higher recommended)
* **npm** or **yarn**

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mutlukurt/LYRcollective.git
   cd LYRcollective
   ```
2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Build the production application:
   ```bash
   npm run build
   ```
5. Preview the production build locally:
   ```bash
   npm run preview -- --port 8080
   ```
   Open [http://localhost:8080](http://localhost:8080) to run Lighthouse audits on the optimized bundle!
