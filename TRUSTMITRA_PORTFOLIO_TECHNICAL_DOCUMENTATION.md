# Devendra Gupta Portfolio - Complete Technical Documentation

**For AI Coding Assistants & Developers**

---

## SECTION 1 — PROJECT OVERVIEW

### What This Website Is

This is a **Founder Portfolio + Build-in-Public Platform** for Devendra Gupta, a 20-year-old startup founder and computer science student from Jaipur, Rajasthan. Unlike traditional developer portfolios that showcase past work, this portfolio is designed to **document a founder's real-time startup journey**.

### Purpose & Core Mission

The portfolio serves three primary functions:

1. **Professional Founder Identity:** Establish Devendra as a credible, transparent startup builder in the Indian tech ecosystem
2. **Build-in-Public Documentation:** Share daily progress, learnings, and challenges while building TrustMitra (a gig worker marketplace)
3. **Investor & Community Engagement:** Create a public record of execution, progress, and founder thinking to attract investors, partners, and community support

### Target Audience

- **Investors & VCs:** Seeking founders with transparency and execution velocity
- **Community & Followers:** Interested in founder journey and startup building lessons
- **Potential Collaborators:** Looking to join or partner with the founder
- **Mentors & Advisors:** Tracking progress and offering guidance

### The Startup: TrustMitra

**Problem:** Informal gig workers (delivery, domestic help, freelancers) in India lack verified digital identity and payment trust infrastructure.

**Solution:** Commission-based marketplace connecting gig workers with customers, featuring:
- OTP-based job start verification
- UPI payment integration
- Worker rating system
- Digital identity building for informal workers

**Founder's Role:** Devendra is the founder and MVP builder, actively shipping features and documenting the journey publicly.

### Why This Portfolio Is Different

| Aspect | Traditional Dev Portfolio | Devendra's Portfolio |
|--------|--------------------------|----------------------|
| **Content** | Completed projects only | Real-time startup journey |
| **Update Frequency** | Static, rarely updated | Daily build logs |
| **Transparency** | Polished final results | Raw progress, learnings, struggles |
| **Video Content** | Optional demo videos | Daily vlogs embedded in build logs |
| **Engagement** | One-way (view projects) | Two-way (follow journey, see learnings) |
| **Trust Signal** | Past achievements | Current execution velocity |

---

## SECTION 2 — TECHNOLOGY STACK

### Frontend Framework: React 19

**Why React?**
- Component-based architecture enables modular, reusable UI
- Excellent ecosystem for animations and interactive experiences
- Strong community support and tooling
- Server-side rendering not needed for this static site

**Version:** React 19.2.1 (latest stable)

### Build Tool: Vite

**Why Vite?**
- Extremely fast development server with instant HMR (Hot Module Replacement)
- Optimized production builds with automatic code splitting
- Native ES modules support
- Significantly faster than Webpack for development

**Configuration:** `vite.config.ts` includes:
- Path aliases (`@` → `client/src`, `@shared` → `shared`)
- Tailwind CSS integration via `@tailwindcss/vite`
- React plugin for JSX transformation
- Custom Manus debug collector for development logging
- Vite Plugin Manus Runtime for platform integration

### Styling System: Tailwind CSS 4

**Why Tailwind?**
- Utility-first approach enables rapid UI development
- Smaller CSS bundle than traditional CSS-in-JS
- Built-in dark mode support via CSS custom properties
- Excellent for responsive design

**Color System:** OKLCH color space (modern, perceptually uniform)
- Light theme: Off-white background, deep charcoal text
- Dark theme: Deep slate background, white text
- Cyan accents for interactive elements
- Gradient support for hero sections

**Key Utilities:**
- `animate-blob`: Custom blob animation for background elements
- `animation-delay-*`: Staggered animation timing
- `dark:` prefix: Dark mode variants
- Responsive breakpoints: `sm`, `md`, `lg`, `xl`

### Routing: Wouter

**Why Wouter?**
- Lightweight client-side router (3.3 KB gzipped)
- Perfect for single-page applications
- Simple API: `<Route>`, `<Link>`, `useLocation()`
- No server configuration needed

**Routes Defined:**
```
/ → Home page (hero, about, journey, skills, projects, build logs preview)
/build → Build logs full page (all daily logs with videos)
/404 → Not found page
```

### Package Manager: pnpm

**Why pnpm?**
- Faster than npm, more efficient than yarn
- Strict dependency management prevents phantom dependencies
- Monorepo support (though not used here)
- Smaller disk footprint

**Lock File:** `pnpm-lock.yaml` (deterministic dependency resolution)

### Deployment Platform: Vercel

**Why Vercel?**
- Optimized for React/Next.js applications
- Automatic deployments on git push
- Global CDN for fast content delivery
- Built-in analytics and monitoring
- Free tier sufficient for portfolio

**Deployment Flow:**
```
Git Push → GitHub → Vercel Webhook → Build → Deploy → Live
```

**Build Command:** `pnpm build` (Vite + esbuild)
**Start Command:** `NODE_ENV=production node dist/index.js`

### UI Component Library: shadcn/ui

**Why shadcn/ui?**
- Unstyled, accessible components built on Radix UI
- Full source code control (not a black box)
- Tailwind CSS compatible
- Extensive component library (40+ components available)

**Components Used:**
- Button, Card, Dialog, Dropdown Menu
- Accordion, Tabs, Toast (Sonner)
- Form, Input, Label
- Tooltip, Popover, Hover Card

### Icon Library: Lucide React

**Why Lucide?**
- 450+ high-quality SVG icons
- Tree-shakeable (only used icons included in bundle)
- Consistent design language
- Lightweight (0.5 KB per icon)

**Icons Used:** Github, Linkedin, MessageCircle, Moon, Sun, Menu, X, ChevronDown, ExternalLink, Play, Sparkles, Rocket, Lightbulb, Code2, Database, Globe, Wrench

### Animation Library: Framer Motion

**Why Framer Motion?**
- Declarative animation syntax
- GPU-accelerated transforms
- Gesture support (hover, tap, drag)
- Spring physics for natural motion

**Animations Implemented:**
- Blob animations (background elements)
- Fade-in/slide-up on scroll
- Card hover effects
- Certification flip cards
- Smooth transitions between sections

### Additional Libraries

| Library | Purpose | Version |
|---------|---------|---------|
| `react-router-dom` | Fallback routing (Wouter primary) | 7.13.1 |
| `sonner` | Toast notifications | 2.0.7 |
| `recharts` | Data visualization (if needed) | 2.15.2 |
| `zod` | TypeScript schema validation | 4.1.12 |
| `clsx` | Conditional className utility | 2.1.1 |
| `tailwind-merge` | Merge Tailwind classes intelligently | 3.3.1 |

---

## SECTION 3 — REPOSITORY STRUCTURE

### Directory Organization

```
trustmitra-portfolio/
│
├── client/                          # React frontend application
│   ├── index.html                   # HTML entry point
│   ├── public/                      # Static assets
│   │   ├── __manus__/              # Manus platform files
│   │   └── certificates/            # Certificate images
│   │
│   └── src/
│       ├── App.tsx                  # Root component, routing setup
│       ├── main.tsx                 # React entry point
│       ├── index.css                # Global styles, Tailwind config
│       │
│       ├── pages/                   # Page-level components
│       │   ├── Home.tsx             # Hero, about, journey, skills, projects
│       │   ├── BuildLogs.tsx        # Full build logs timeline
│       │   ├── AnalysisPage.tsx     # Analytics/analysis page
│       │   └── NotFound.tsx         # 404 page
│       │
│       ├── components/              # Reusable UI components
│       │   ├── ui/                  # shadcn/ui components (40+ files)
│       │   ├── ErrorBoundary.tsx    # Error handling wrapper
│       │   ├── ManusDialog.tsx      # Manus-specific dialog
│       │   └── Map.tsx              # Google Maps integration
│       │
│       ├── data/                    # Data files
│       │   └── buildLogs.ts         # Build log entries (TypeScript)
│       │
│       ├── contexts/                # React Context providers
│       │   └── ThemeContext.tsx     # Dark/light theme management
│       │
│       ├── hooks/                   # Custom React hooks
│       │   ├── useComposition.ts    # Component composition utilities
│       │   ├── useMobile.tsx        # Mobile detection
│       │   └── usePersistFn.ts      # Persistent function reference
│       │
│       ├── lib/                     # Utility functions
│       │   └── utils.ts             # Helper functions
│       │
│       └── const.ts                 # Application constants
│
├── server/                          # Express backend
│   └── index.ts                     # Server entry point
│
├── shared/                          # Shared types/constants
│   └── const.ts                     # Shared constants
│
├── patches/                         # Dependency patches
│   └── wouter@3.7.1.patch          # Wouter router patch
│
├── DESIGN_SPEC.md                   # Design system documentation
├── components.json                  # shadcn/ui config
├── package.json                     # Dependencies, scripts
├── pnpm-lock.yaml                   # Lock file
├── tsconfig.json                    # TypeScript config
├── tsconfig.node.json               # TypeScript config for Node
├── vite.config.ts                   # Vite build config
└── .prettierrc                       # Code formatting rules
```

### Key Folder Roles

**`client/src/pages/`** — Page-level components that represent full routes. Each component handles its own state, data fetching, and layout.

**`client/src/components/`** — Reusable UI components. `ui/` subfolder contains shadcn/ui components (auto-generated from CLI). Custom components like `ErrorBoundary`, `Map` are here.

**`client/src/data/`** — Static data files. `buildLogs.ts` is the single source of truth for all build log entries. Structured as TypeScript for type safety.

**`client/src/contexts/`** — React Context providers for global state. Currently only `ThemeContext` for dark/light mode toggle.

**`client/src/hooks/`** — Custom React hooks for reusable logic. Examples: mobile detection, composition utilities, persistent function references.

**`server/`** — Express.js backend. Minimal setup: serves static files and handles client-side routing (SPA fallback).

---

## SECTION 4 — PAGE ARCHITECTURE

### Page 1: Home (`/`)

**File:** `client/src/pages/Home.tsx`

**Purpose:** Landing page showcasing founder identity, skills, projects, and build logs preview.

**Layout Structure:**

```
┌─────────────────────────────────────┐
│ Navigation Bar (Sticky)             │
│ - Logo: "Devendra Founder"          │
│ - Menu: Home, About, Journey, ...   │
│ - Theme Toggle (Dark/Light)         │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Hero Section                        │
│ - Left: "Hi, I'm Devendra Gupta"   │
│ - Right: Professional photo         │
│ - CTA: GitHub, LinkedIn buttons     │
│ - Background: Animated blobs        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ About Section                       │
│ - Founder narrative                 │
│ - Core values (4 cards)             │
│ - Background: Gradient              │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Journey Section                     │
│ - Timeline of roles/positions       │
│ - 2025: Head of Social Media        │
│ - 2026: Founder of TrustMitra       │
│ - 2024-2025: Team Lead              │
│ - 2023-2026: B.Tech Student         │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Skills Section                      │
│ - Technical skills (19 items)       │
│ - Professional skills (8 items)     │
│ - Pill-shaped badges                │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Projects Section                    │
│ - 3 featured projects               │
│ - Project images, descriptions      │
│ - Tech stacks, key features         │
│ - "View Project" buttons            │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Build in Public Preview             │
│ - Latest 3 build logs               │
│ - Day number, title, date           │
│ - "View All Logs" button            │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Contact Section                     │
│ - "Let's Connect" heading           │
│ - WhatsApp button (primary CTA)     │
│ - Social links                      │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Footer                              │
│ - Copyright notice                  │
└─────────────────────────────────────┘
```

**Key Features:**

- **Smooth Scroll Navigation:** Clicking nav items smoothly scrolls to sections
- **Mobile Menu:** Hamburger menu on mobile with slide-out drawer
- **Theme Toggle:** Dark/light mode with localStorage persistence
- **Animated Background:** Floating blob elements with staggered animations
- **Responsive Design:** Adapts from mobile (320px) to desktop (1920px+)

**State Management:**

```typescript
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [flippedCerts, setFlippedCerts] = useState<number[]>([]);
const [activeSection, setActiveSection] = useState("home");
const [showCredentials, setShowCredentials] = useState(false);
const { theme, toggleTheme } = useTheme();
```

**Data Flow:**

1. `buildLogs` imported from `data/buildLogs.ts`
2. Latest 3 logs extracted: `[...buildLogs].sort((a, b) => b.day - a.day).slice(0, 3)`
3. Rendered in "Build in Public Preview" section
4. "View All Logs" button links to `/build` page

### Page 2: Build Logs (`/build`)

**File:** `client/src/pages/BuildLogs.tsx`

**Purpose:** Full timeline of daily build logs with embedded YouTube videos.

**Layout Structure:**

```
┌─────────────────────────────────────┐
│ Header                              │
│ - "Build in Public" title           │
│ - "Back to Home" button             │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Description                         │
│ "A transparent timeline of how I am │
│  building TrustMitra day by day..." │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Timeline (Vertical)                 │
│                                     │
│ ○ Day 4 ─────────────────────────   │
│ │ Title: Strengthening Product UI   │
│ │ Date: 11 March 2026               │
│ │ Summary: [description]            │
│ │                                   │
│ │ What I Did Today | Key Learnings  │
│ │ - Action 1       | - Learning 1   │
│ │ - Action 2       | - Learning 2   │
│ │                                   │
│ │ [YouTube Video Embed]             │
│ │                                   │
│ ○ Day 3 ─────────────────────────   │
│ │ [Similar structure]               │
│ │                                   │
│ ○ Day 2 ─────────────────────────   │
│ │ [Similar structure]               │
│                                     │
└─────────────────────────────────────┘
```

**Key Features:**

- **Reverse Chronological Order:** Newest logs first (sorted by day descending)
- **Timeline Visualization:** Vertical line with day markers on desktop
- **Two-Column Layout:** "What I Did Today" + "Key Learnings" side-by-side
- **YouTube Embed:** Extracted from URL and embedded as iframe
- **Responsive:** Stacks to single column on mobile

**YouTube Embed Logic:**

```typescript
function getYoutubeEmbed(url: string) {
  if (!url) return "";
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
  if (!match) return "";
  return `https://www.youtube.com/embed/${match[1]}`;
}
```

Converts:
- `https://www.youtube.com/watch?v=1gDxxZDS9QQ` → `https://www.youtube.com/embed/1gDxxZDS9QQ`
- `https://youtu.be/1gDxxZDS9QQ` → `https://www.youtube.com/embed/1gDxxZDS9QQ`

**Data Source:** `buildLogs` array from `data/buildLogs.ts`

---

## SECTION 5 — BUILD IN PUBLIC SYSTEM

### Data Structure: BuildLog Type

**File:** `client/src/data/buildLogs.ts`

```typescript
export type BuildLog = {
  id: number              // Unique identifier (1, 2, 3, ...)
  day: number             // Day number (1, 2, 3, ...)
  title: string           // Log title (e.g., "Strengthening Product UI")
  date: string            // Human-readable date (e.g., "10 March 2026")
  summary: string         // Brief description of the day
  actions: string[]       // Array of things done today
  learnings: string[]     // Array of key learnings
  tags?: string[]         // Optional tags (e.g., ["ui", "portfolio"])
  mood?: string           // Optional emoji mood (e.g., "🚀 Starting Energy")
  youtubeVideo?: string   // Optional YouTube URL
}
```

### Example Log Entry

```typescript
{
  id: 1,
  day: 1,
  title: "Starting Build in Public",
  date: "8 March 2026",
  summary: "Started documenting my founder journey publicly.",
  
  actions: [
    "Created build logs system",
    "Improved portfolio UI",
    "Started founder vlog"
  ],
  
  learnings: [
    "Building in public increases accountability",
    "Consistency matters more than perfection"
  ],
  
  tags: ["buildinpublic", "founder"],
  mood: "🚀 Starting Energy",
  
  youtubeVideo: "https://www.youtube.com/watch?v=1gDxxZDS9QQ"
}
```

### How to Add New Build Logs

**Step 1:** Open `client/src/data/buildLogs.ts`

**Step 2:** Add new entry to the `buildLogs` array:

```typescript
{
  id: 5,
  day: 5,
  title: "Your Title Here",
  date: "12 March 2026",
  summary: "Brief description of what you did today.",
  
  actions: [
    "Action 1",
    "Action 2",
    "Action 3"
  ],
  
  learnings: [
    "Learning 1",
    "Learning 2"
  ],
  
  tags: ["tag1", "tag2"],
  mood: "🎯 Focused",
  youtubeVideo: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
}
```

**Step 3:** Deploy (git push to GitHub → Vercel auto-deploys)

### Rendering Logic

**Home Page:** Latest 3 logs displayed in preview

```typescript
const latestBuildLogs = [...buildLogs]
  .sort((a, b) => b.day - a.day)
  .slice(0, 3);
```

**Build Logs Page:** All logs displayed in reverse chronological order

```typescript
const logs = [...buildLogs].sort((a, b) => b.day - a.day);

logs.map((log) => (
  <article key={log.day}>
    <h2>{log.title}</h2>
    <p>{log.date}</p>
    <p>{log.summary}</p>
    
    <div>
      <h3>What I Did Today</h3>
      <ul>
        {log.actions.map((action) => (
          <li key={action}>{action}</li>
        ))}
      </ul>
    </div>
    
    <div>
      <h3>Key Learnings</h3>
      <ul>
        {log.learnings.map((learning) => (
          <li key={learning}>{learning}</li>
        ))}
      </ul>
    </div>
    
    <div>
      <h3>Day {log.day} Vlog</h3>
      <iframe src={getYoutubeEmbed(log.youtubeVideo)} />
    </div>
  </article>
))
```

### Philosophy Behind the System

The Build-in-Public system is designed around **transparency and accountability**:

1. **Daily Cadence:** One log per day creates consistency and habit
2. **Structured Format:** Actions + Learnings separates execution from reflection
3. **Video Integration:** Vlogs add authenticity and personality
4. **Public Archive:** All logs remain visible, creating accountability
5. **Scalable:** Simple TypeScript array scales to 100+ logs without performance issues

---

## SECTION 6 — VIDEO EMBEDDING SYSTEM

### YouTube URL Conversion

**Problem:** YouTube URLs come in multiple formats:
- `https://www.youtube.com/watch?v=1gDxxZDS9QQ`
- `https://youtu.be/1gDxxZDS9QQ`
- `https://www.youtube.com/watch?v=1gDxxZDS9QQ&list=...&t=...`

**Solution:** Extract video ID and convert to embed URL

### Implementation

**Location:** `client/src/pages/BuildLogs.tsx` (lines 8-16)

```typescript
function getYoutubeEmbed(url: string) {
  if (!url) return "";

  // Regex pattern matches both youtube.com/watch?v= and youtu.be/ formats
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);

  if (!match) return "";

  // Return embed URL with extracted video ID
  return `https://www.youtube.com/embed/${match[1]}`;
}
```

### Regex Breakdown

```
/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/
 ↑                                        ↑
 Non-capturing group (two URL formats)    Capture group (video ID)
 
(?:youtube\.com\/watch\?v=|youtu\.be\/)
 ├─ youtube\.com\/watch\?v= (literal match)
 └─ youtu\.be\/ (literal match)

([^&]+)
 └─ Capture one or more characters that are NOT '&'
    (stops at query parameter)
```

### Iframe Implementation

**Location:** `client/src/pages/BuildLogs.tsx` (lines 134-140)

```typescript
<div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/60">
  <iframe
    src={getYoutubeEmbed(log.youtubeVideo)}
    className="w-full h-[420px] rounded-xl"
    allowFullScreen
  />
</div>
```

**Attributes:**
- `src`: Embed URL (converted from original YouTube URL)
- `className`: Tailwind styles for responsive sizing
- `allowFullScreen`: Enables fullscreen button on iframe

### Home Page Thumbnail Generation

**Location:** `client/src/pages/Home.tsx` (lines 33-36)

```typescript
const getYouTubeThumbnail = (url: string) => {
  const match = url.match(/embed\/([^?&]+)/);
  return match?.[1] ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : "";
};
```

Generates thumbnail URL: `https://img.youtube.com/vi/{VIDEO_ID}/hqdefault.jpg`

### Supported URL Formats

| Format | Example | Supported |
|--------|---------|-----------|
| youtube.com/watch?v= | `https://www.youtube.com/watch?v=1gDxxZDS9QQ` | ✅ |
| youtu.be/ | `https://youtu.be/1gDxxZDS9QQ` | ✅ |
| With parameters | `https://www.youtube.com/watch?v=1gDxxZDS9QQ&t=10s` | ✅ |
| With playlists | `https://www.youtube.com/watch?v=1gDxxZDS9QQ&list=...` | ✅ |
| Direct embed | `https://www.youtube.com/embed/1gDxxZDS9QQ` | ❌ (already embed) |

---

## SECTION 7 — DATA FLOW

### Component Data Flow Diagram

```
buildLogs.ts (Single Source of Truth)
    ↓
    ├─→ Home.tsx
    │   ├─→ Latest 3 logs extracted
    │   ├─→ Rendered in "Build in Public Preview" section
    │   └─→ Link to "/build" page
    │
    └─→ BuildLogs.tsx
        ├─→ All logs sorted (newest first)
        ├─→ Rendered as timeline
        ├─→ YouTube URLs converted to embed URLs
        └─→ Displayed with actions + learnings
```

### Props Flow

**Home.tsx → Build Logs Preview Section**

```typescript
// Data extracted
const latestBuildLogs = [...buildLogs]
  .sort((a, b) => b.day - a.day)
  .slice(0, 3);

// Rendered
latestBuildLogs.map((log) => (
  <div key={log.day}>
    <h3>{log.title}</h3>
    <p>{log.date}</p>
    <p>{log.summary}</p>
    <img src={getYouTubeThumbnail(log.youtubeVideo)} />
    <Link href="/build">Read Full Log</Link>
  </div>
))
```

### Context Data Flow

**ThemeContext → All Components**

```
App.tsx (ThemeProvider)
    ↓
    ├─→ Home.tsx (useTheme hook)
    ├─→ BuildLogs.tsx (useTheme hook)
    └─→ Navigation (useTheme hook)
        ├─→ Reads: theme ("light" | "dark")
        ├─→ Calls: toggleTheme()
        └─→ Updates: localStorage + DOM class
```

### State Management Pattern

**Local Component State (Home.tsx)**

```typescript
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [flippedCerts, setFlippedCerts] = useState<number[]>([]);
const [activeSection, setActiveSection] = useState("home");
```

**Global Context State (ThemeContext)**

```typescript
const [theme, setTheme] = useState<Theme>(() => {
  if (switchable) {
    const stored = localStorage.getItem("theme");
    return (stored as Theme) || defaultTheme;
  }
  return defaultTheme;
});
```

### Rendering Optimization

**Memoization:** Components don't use React.memo (not needed for this size)

**Key Props:** All list renders use unique keys:
```typescript
{logs.map((log) => (
  <article key={log.day}>  // ✅ Unique, stable key
    ...
  </article>
))}
```

**Avoiding Inline Objects:** Functions like `getYoutubeEmbed` defined outside render to prevent recreation

---

## SECTION 8 — UI / DESIGN SYSTEM

### Design Philosophy

**Modern Professional with Dynamic Energy**

The design balances professionalism (for investors/partners) with energy (for community engagement). Every design decision reinforces the founder narrative: credible, innovative, and actively building.

### Color Palette

**Light Theme (Default)**

| Element | Color | OKLCH | Hex | Purpose |
|---------|-------|-------|-----|---------|
| Background | Off-White | `oklch(0.98 0.005 250)` | `#F8F9FB` | Clean base |
| Text (Primary) | Deep Charcoal | `oklch(0.22 0.015 255)` | `#2D2E3F` | High contrast |
| Accent (Primary) | Cyan | `oklch(0.7 0.17 205)` | `#06B6D4` | Interactive, energy |
| Accent (Secondary) | Blue | `oklch(0.62 0.16 245)` | `#3B82F6` | Complementary |
| Border | Soft Gray | `oklch(0.9 0.01 250)` | `#E5E7EB` | Subtle structure |

**Dark Theme**

| Element | Color | OKLCH | Hex | Purpose |
|---------|-------|-------|-----|---------|
| Background | Deep Slate | `oklch(0.13 0.015 260)` | `#0F172A` | Dark base |
| Text (Primary) | White | `oklch(0.93 0.005 65)` | `#F1F5F9` | High contrast |
| Accent (Primary) | Cyan | `oklch(0.7 0.17 205)` | `#06B6D4` | Interactive |
| Accent (Secondary) | Blue | `oklch(0.62 0.16 245)` | `#3B82F6` | Complementary |
| Border | Slate | `oklch(0.28 0.01 260)` | `#334155` | Subtle structure |

### Typography System

**Font Stack:**
```css
font-family: "Poppins", "Inter", system-ui, sans-serif;
```

| Element | Font | Weight | Size | Line Height |
|---------|------|--------|------|-------------|
| Hero Title | Poppins | 700 | 3.5rem | 1.2 |
| Section Title | Poppins | 600 | 2rem | 1.3 |
| Subsection | Poppins | 600 | 1.5rem | 1.3 |
| Body Text | Inter | 400 | 1rem | 1.6 |
| Small Text | Inter | 400 | 0.875rem | 1.5 |
| Button | Inter | 600 | 1rem | 1 |

**Rationale:**
- Poppins (geometric, bold) for headlines = modern, energetic
- Inter (neutral, readable) for body = accessible, professional
- Contrast between display and body creates visual hierarchy

### Animation System

**Entrance Animations**

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}
```

**Hover & Interactive States**

```css
/* Card hover */
.card:hover {
  transform: scale(1.02);
  box-shadow: 0 16px 30px rgba(56, 189, 248, 0.65);
}

/* Button hover */
.button:hover {
  background: linear-gradient(to right, #0891b2, #0284c7);
  box-shadow: 0 8px 16px rgba(56, 189, 248, 0.4);
}

/* Link hover */
.link:hover {
  color: #06b6d4;
  text-decoration: underline;
}
```

**Scroll Animations**

- Parallax: Background elements move at 0.5x scroll speed
- Reveal: Elements fade in as they enter viewport
- Progress: Animated line shows scroll position

### Responsive Breakpoints

| Breakpoint | Width | Use Case |
|-----------|-------|----------|
| Mobile | < 640px | Phones |
| Tablet | 640px - 1023px | Tablets |
| Desktop | 1024px+ | Laptops/Desktops |

**Tailwind Prefixes:**
- `sm:` (640px+)
- `md:` (768px+)
- `lg:` (1024px+)
- `xl:` (1280px+)

### Component Specifications

**Hero Section**

```typescript
<div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
  {/* Animated background blobs */}
  <div className="pointer-events-none fixed inset-0 -z-10">
    <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-blob" />
    <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl animate-blob animation-delay-2000" />
  </div>
  
  {/* Content */}
  <div className="container max-w-6xl mx-auto px-4 py-20">
    <h1 className="text-5xl md:text-6xl font-bold">
      Hi, I'm <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Devendra Gupta</span>
    </h1>
  </div>
</div>
```

**Project Cards**

```typescript
<div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 hover:shadow-lg hover:border-cyan-400 transition-all">
  <img src={project.image} className="w-full h-48 object-cover rounded-lg" />
  <h3 className="text-xl font-bold mt-4">{project.title}</h3>
  <p className="text-slate-600 dark:text-slate-400 mt-2">{project.description}</p>
  <div className="flex gap-2 mt-4">
    {project.tags.map((tag) => (
      <span key={tag} className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 text-sm">
        {tag}
      </span>
    ))}
  </div>
</div>
```

**Skill Tags**

```typescript
<div className="flex flex-wrap gap-3">
  {skills.map((skill) => (
    <span key={skill} className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg transition-all">
      {skill}
    </span>
  ))}
</div>
```

### Tailwind CSS Configuration

**Key Customizations (index.css)**

```css
:root {
  --primary: oklch(0.58 0.16 250);
  --accent: oklch(0.72 0.14 220);
  --radius: 0.9rem;
  --background: oklch(0.98 0.005 250);
  --foreground: oklch(0.22 0.015 255);
}

.dark {
  --primary: oklch(0.62 0.16 245);
  --accent: oklch(0.7 0.17 205);
  --background: oklch(0.13 0.015 260);
  --foreground: oklch(0.93 0.005 65);
}
```

**Custom Utilities**

```css
@layer components {
  .container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .flex {
    min-height: 0;
    min-width: 0;
  }
}
```

---

## SECTION 9 — DEPLOYMENT ARCHITECTURE

### Deployment Platform: Vercel

**Why Vercel?**
- Optimized for React/Next.js
- Automatic deployments on git push
- Global CDN for fast delivery
- Free tier sufficient for portfolio
- Built-in analytics and monitoring

### Deployment Flow

```
Local Development
    ↓
git push to GitHub (main branch)
    ↓
GitHub Webhook → Vercel
    ↓
Vercel Builds Project
    ├─ pnpm install (install dependencies)
    ├─ pnpm build (Vite + esbuild)
    └─ Generate dist/ folder
    ↓
Vercel Deploys to CDN
    ├─ Upload dist/public/ to Vercel Edge Network
    ├─ Assign unique preview URL
    └─ Update production domain
    ↓
Live at https://devendra-gupta-portfolio.vercel.app/
```

### Build Process

**Build Command:** `pnpm build`

```bash
# Step 1: Vite builds React app
vite build

# Step 2: esbuild bundles server
esbuild server/index.ts \
  --platform=node \
  --packages=external \
  --bundle \
  --format=esm \
  --outdir=dist

# Result: dist/public/ (static files) + dist/index.js (server)
```

**Output Structure:**

```
dist/
├── public/                  # Static files served by CDN
│   ├── index.html          # HTML entry point
│   ├── assets/             # JS/CSS bundles
│   │   ├── index-*.js      # React app bundle
│   │   └── index-*.css     # Tailwind CSS bundle
│   └── certificates/       # Certificate images
│
└── index.js                # Express server (for local dev)
```

### Environment Variables

**Vercel Dashboard Configuration:**

```
VITE_APP_TITLE = "Devendra Gupta | Founder, TrustMitra"
VITE_APP_ID = "trustmitra-portfolio"
NODE_ENV = "production"
```

**Local Development (.env.local):**

```
VITE_APP_TITLE=Devendra Gupta | Founder, TrustMitra
VITE_APP_ID=trustmitra-portfolio
```

### GitHub Integration

**Repository:** https://github.com/devubro143/trustmitra-portfolio

**Branches:**
- `main`: Production branch (auto-deploys to Vercel)
- `develop`: Development branch (preview deployments)
- Feature branches: Pull requests create preview deployments

**Commits:** 27 commits tracking portfolio development

### Vercel Deployments

**Total Deployments:** 32 (1 production + 31 previews)

**Production Deployment:**
- Status: ✅ Active
- URL: https://devendra-gupta-portfolio.vercel.app/
- Last Deploy: 2 days ago

**Preview Deployments:**
- Created for each git push
- Unique URL for testing before merge
- Auto-deleted after PR merge

### Performance Optimization

**Build Optimization:**
- Code splitting: Route-based lazy loading
- Tree shaking: Unused code removed
- Minification: JavaScript and CSS minified
- Asset optimization: Images optimized by Vercel

**Runtime Optimization:**
- Vercel Edge Network: Global CDN for fast delivery
- Caching: Static assets cached with long TTL
- Compression: Gzip/Brotli compression enabled
- HTTP/2: Multiplexing for faster requests

### Monitoring & Analytics

**Vercel Analytics:**
- Real User Monitoring (RUM)
- Core Web Vitals tracking
- Error tracking and reporting
- Deployment history and logs

---

## SECTION 10 — EXTENSIBILITY FOR AI

### How AI Assistants Can Safely Modify This Project

#### 1. Adding New Build Logs

**Safest Approach:** Only modify `client/src/data/buildLogs.ts`

```typescript
// ✅ SAFE: Add new entry to buildLogs array
export const buildLogs: BuildLog[] = [
  // ... existing logs ...
  {
    id: 5,
    day: 5,
    title: "Your Title",
    date: "12 March 2026",
    summary: "Your summary",
    actions: ["Action 1", "Action 2"],
    learnings: ["Learning 1", "Learning 2"],
    tags: ["tag1", "tag2"],
    mood: "🎯 Focused",
    youtubeVideo: "https://www.youtube.com/watch?v=YOUR_ID"
  }
];
```

**Why Safe:**
- No component changes needed
- Automatic rendering in both Home and BuildLogs pages
- Type-safe (TypeScript enforces structure)
- No breaking changes

#### 2. Modifying UI Components

**Approach:** Edit component files directly

```typescript
// ✅ SAFE: Modify Home.tsx styling
<h1 className="text-5xl md:text-6xl font-bold">
  Hi, I'm <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
    Devendra Gupta
  </span>
</h1>

// ❌ UNSAFE: Remove entire sections without understanding dependencies
// Don't delete sections that are referenced in navigation
```

**Safe Modifications:**
- Change Tailwind classes
- Update text content
- Modify component props
- Add new sections (append, don't replace)

**Unsafe Modifications:**
- Remove navigation items without updating nav menu
- Delete data files without updating imports
- Change TypeScript types without updating all usages
- Modify routing without updating links

#### 3. Adding New Pages

**Step 1:** Create new page component

```typescript
// client/src/pages/YourPage.tsx
export default function YourPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Your content */}
    </div>
  );
}
```

**Step 2:** Add route to App.tsx

```typescript
import YourPage from "./pages/YourPage";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/build"} component={BuildLogs} />
      <Route path={"/your-page"} component={YourPage} />  // ← Add here
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}
```

**Step 3:** Add navigation link (optional)

```typescript
// In Home.tsx navigation
{["home", "about", "journey", "skills", "projects", "build in public", "your page"].map((item) => (
  <button
    key={item}
    onClick={() => scrollToSection(item === "your page" ? "your-page" : item)}
    className={`text-sm font-medium transition-colors capitalize`}
  >
    {item}
  </button>
))}
```

#### 4. Adding Blog/Articles System

**Approach:** Similar to buildLogs

```typescript
// client/src/data/articles.ts
export type Article = {
  id: number;
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  readTime: number;
};

export const articles: Article[] = [
  {
    id: 1,
    title: "Building TrustMitra: Lessons from MVP to Market",
    slug: "building-trustmitra-lessons",
    date: "15 March 2026",
    category: "Startup",
    excerpt: "What I learned building a gig worker marketplace...",
    content: "Full article content here...",
    readTime: 8
  }
];
```

**Create Articles Page:**

```typescript
// client/src/pages/Articles.tsx
import { articles } from "@/data/articles";

export default function Articles() {
  return (
    <div>
      <h1>Articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.date}</p>
          <p>{article.excerpt}</p>
          <a href={`/articles/${article.slug}`}>Read More</a>
        </div>
      ))}
    </div>
  );
}
```

#### 5. Adding Analytics

**Approach:** Integrate Vercel Analytics (already configured)

```typescript
// No changes needed - Vercel Analytics auto-tracks
// Access dashboard at: https://vercel.com/dashboard
```

**Add Custom Events:**

```typescript
import { analytics } from "@vercel/analytics";

// Track button click
<button onClick={() => {
  analytics.track("contact_whatsapp_clicked");
  // Open WhatsApp
}}>
  Chat on WhatsApp
</button>
```

#### 6. Adding Search Functionality

**Approach:** Client-side search (no backend needed)

```typescript
// client/src/hooks/useSearch.ts
import { useMemo, useState } from "react";
import { buildLogs } from "@/data/buildLogs";

export function useSearch(query: string) {
  return useMemo(() => {
    if (!query) return buildLogs;
    
    const lower = query.toLowerCase();
    return buildLogs.filter((log) =>
      log.title.toLowerCase().includes(lower) ||
      log.summary.toLowerCase().includes(lower) ||
      log.tags?.some((tag) => tag.toLowerCase().includes(lower))
    );
  }, [query]);
}
```

**Use in Component:**

```typescript
const [searchQuery, setSearchQuery] = useState("");
const results = useSearch(searchQuery);

return (
  <>
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search build logs..."
    />
    {results.map((log) => (
      <div key={log.id}>{log.title}</div>
    ))}
  </>
);
```

#### 7. Adding Dark/Light Mode Persistence

**Already Implemented:**

```typescript
// client/src/contexts/ThemeContext.tsx
const [theme, setTheme] = useState<Theme>(() => {
  if (switchable) {
    const stored = localStorage.getItem("theme");
    return (stored as Theme) || defaultTheme;
  }
  return defaultTheme;
});
```

**No changes needed** - theme preference persists in localStorage

#### 8. Adding Form Submission (Contact Form)

**Approach:** Use Vercel Functions or external service

```typescript
// client/src/pages/Home.tsx
const handleContactSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const formData = new FormData(e.currentTarget);
  
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  
  if (response.ok) {
    alert("Message sent!");
  }
};
```

**Note:** Requires backend setup (outside static scope)

### Guidelines for Safe Modifications

**DO:**
- ✅ Modify data files (`buildLogs.ts`)
- ✅ Update Tailwind classes
- ✅ Add new components
- ✅ Create new pages
- ✅ Change text content
- ✅ Modify styling without changing structure

**DON'T:**
- ❌ Delete navigation items without updating nav menu
- ❌ Change TypeScript types without updating usages
- ❌ Remove imports that are used elsewhere
- ❌ Modify routing without updating links
- ❌ Delete context providers that are used globally
- ❌ Change component prop interfaces without updating callers

### Testing Changes Locally

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000 in browser

# Make changes and see live updates (HMR)

# Test build
pnpm build

# Preview production build
pnpm preview
```

---

## SECTION 11 — FUTURE ROADMAP

### 10-20 Realistic Improvements (Prioritized)

#### Phase 1: Content & Engagement (Weeks 1-2)

1. **Enhanced Build Logs with Metrics**
   - Add engagement metrics to each log (commits, features shipped, bugs fixed)
   - Show weekly summaries aggregating daily logs
   - Implement log categories/tags with filtering

2. **Testimonials Section**
   - Add 3-5 client/investor testimonials
   - Include photos, names, and credentials
   - Rotating carousel with smooth transitions

3. **Newsletter Signup**
   - Add email capture form (use Convertkit or similar)
   - Promise weekly digest of build logs
   - Integrate with email service API

#### Phase 2: Features (Weeks 3-4)

4. **Blog/Articles System**
   - Create articles data structure (similar to buildLogs)
   - Build articles listing page
   - Individual article pages with markdown rendering
   - Category filtering and search

5. **Timeline Navigation**
   - Add interactive timeline showing all build logs
   - Click to jump to specific day
   - Visual progress indicator

6. **Search Functionality**
   - Client-side search across build logs and articles
   - Filter by tags, date, category
   - Highlight matching text

#### Phase 3: Analytics & Insights (Weeks 5-6)

7. **Public Metrics Dashboard**
   - Show real-time TrustMitra metrics
   - Commits, features shipped, bugs fixed
   - Daily active users, conversion rate
   - Growth charts and trends

8. **Analytics Integration**
   - Track page views, user behavior
   - Monitor build log engagement
   - Identify popular content

9. **Social Proof Widgets**
   - GitHub stats (stars, followers, contributions)
   - LinkedIn profile integration
   - Twitter follower count

#### Phase 4: Interactivity (Weeks 7-8)

10. **Comments System**
    - Allow readers to comment on build logs
    - Threaded discussions
    - Moderation system

11. **Reactions/Emoji Feedback**
    - Quick emoji reactions on build logs
    - Vote on learnings
    - Community engagement metrics

12. **Bookmarking**
    - Allow users to bookmark favorite logs
    - Save to personal collection
    - Export bookmarks

#### Phase 5: Content Expansion (Weeks 9-10)

13. **Video Gallery**
    - Dedicated page for all vlogs
    - Playlist organization
    - Transcript display

14. **Podcast Feed**
    - Convert build logs to audio
    - Publish to Spotify, Apple Podcasts
    - RSS feed for subscribers

15. **Case Studies**
    - Deep-dive into specific projects
    - Problem → Solution → Results format
    - Lessons learned documentation

#### Phase 6: Community (Weeks 11-12)

16. **Founder Resources**
    - Templates for building in public
    - Tools and services recommendations
    - Startup resources library

17. **Community Forum**
    - Discussion board for followers
    - Ask founder questions
    - Share experiences

18. **Investor Updates**
    - Private section for investors
    - Monthly progress reports
    - Financial metrics (if applicable)

#### Phase 7: Optimization (Weeks 13-14)

19. **Performance Optimization**
    - Image optimization and lazy loading
    - Code splitting improvements
    - Caching strategies
    - Core Web Vitals optimization

20. **SEO Improvements**
    - Structured data (JSON-LD)
    - Meta tags optimization
    - Sitemap generation
    - Open Graph tags for social sharing

### Implementation Priority Matrix

| Feature | Impact | Effort | Priority |
|---------|--------|--------|----------|
| Enhanced Build Logs | High | Low | 🔴 P0 |
| Testimonials | High | Low | 🔴 P0 |
| Newsletter | High | Medium | 🔴 P0 |
| Blog System | High | Medium | 🟠 P1 |
| Search | Medium | Low | 🟠 P1 |
| Metrics Dashboard | High | High | 🟠 P1 |
| Comments | Medium | High | 🟡 P2 |
| Video Gallery | Medium | Low | 🟡 P2 |
| Podcast | Low | High | 🟡 P2 |
| SEO | Medium | Medium | 🟡 P2 |

### Technology Additions for Roadmap

| Feature | Technology | Integration |
|---------|-----------|-------------|
| Newsletter | Convertkit API | Backend endpoint |
| Comments | Giscus (GitHub) | Embed script |
| Analytics | Vercel Analytics | Already integrated |
| Podcast | Transistor.fm | API integration |
| Search | Algolia | Client-side or API |
| CMS | Contentful | Headless CMS |

---

## SECTION 12 — AI ASSISTANT CONTEXT SUMMARY

### 30-Second Project Overview

**Devendra Gupta Portfolio** is a React-based founder portfolio + build-in-public platform deployed on Vercel. It showcases a 20-year-old startup founder building TrustMitra (gig worker marketplace) with daily progress logs, embedded YouTube vlogs, and founder narrative.

**Tech Stack:** React 19 + Vite + Tailwind CSS 4 + Wouter + shadcn/ui + Vercel

**Key Files:**
- `client/src/pages/Home.tsx` - Landing page
- `client/src/pages/BuildLogs.tsx` - Daily logs timeline
- `client/src/data/buildLogs.ts` - Build log data (single source of truth)
- `client/src/contexts/ThemeContext.tsx` - Dark/light mode
- `vite.config.ts` - Build configuration

**Data Structure:**
```typescript
type BuildLog = {
  id, day, title, date, summary,
  actions[], learnings[], tags?, mood?, youtubeVideo?
}
```

**Key Features:**
- Daily build logs with YouTube embed
- Dark/light theme toggle
- Smooth scroll navigation
- Responsive design (mobile-first)
- Animated background elements
- Project showcase
- Skills display
- Timeline of experience

**Deployment:** GitHub → Vercel (auto-deploy on push)

**How to Extend:**
1. Add new build logs: Edit `client/src/data/buildLogs.ts`
2. Add new pages: Create component in `client/src/pages/`, add route in `App.tsx`
3. Modify UI: Update Tailwind classes in component files
4. Add features: Follow existing patterns (data → component → render)

**Safe Modifications:** Data files, UI components, styling, new pages
**Unsafe Modifications:** Routing without updating links, deleting imports, changing types without updates

**Performance:** Fast (Vite dev server, optimized Vercel deployment), responsive, accessible

---

## APPENDIX — Quick Reference

### File Locations

| Purpose | File |
|---------|------|
| Build logs data | `client/src/data/buildLogs.ts` |
| Home page | `client/src/pages/Home.tsx` |
| Build logs page | `client/src/pages/BuildLogs.tsx` |
| Theme context | `client/src/contexts/ThemeContext.tsx` |
| Global styles | `client/src/index.css` |
| Routing | `client/src/App.tsx` |
| Build config | `vite.config.ts` |
| Dependencies | `package.json` |

### Common Tasks

**Add new build log:**
```typescript
// Edit: client/src/data/buildLogs.ts
// Add entry to buildLogs array
```

**Change colors:**
```css
/* Edit: client/src/index.css */
/* Modify OKLCH values in :root or .dark */
```

**Add new page:**
```typescript
// 1. Create: client/src/pages/YourPage.tsx
// 2. Edit: client/src/App.tsx (add route)
// 3. Edit: Home.tsx (add nav link if needed)
```

**Deploy changes:**
```bash
git add .
git commit -m "Your changes"
git push origin main
# Vercel auto-deploys
```

### Useful Commands

```bash
# Development
pnpm dev              # Start dev server (http://localhost:3000)
pnpm build            # Build for production
pnpm preview          # Preview production build
pnpm format           # Format code with Prettier
pnpm check            # Type check with TypeScript

# Git
git status            # Check changes
git add .             # Stage changes
git commit -m "msg"   # Commit
git push origin main  # Push to GitHub
```

### Key Concepts

**Single Source of Truth:** `buildLogs.ts` is the only place build log data is defined. Both Home and BuildLogs pages read from it.

**Component Composition:** Pages import data, process it, and render components. Components are reusable and don't depend on specific data.

**Theme Management:** ThemeContext provides global theme state. Components use `useTheme()` hook to access theme and toggle function.

**Responsive Design:** Tailwind breakpoints (`sm:`, `md:`, `lg:`) handle responsive layout. Mobile-first approach (base styles for mobile, add complexity for larger screens).

**Type Safety:** TypeScript ensures data structures are correct. BuildLog type defines shape of each log entry.

---

## Conclusion

This documentation provides a complete technical understanding of Devendra Gupta's portfolio website. Any AI coding assistant can now:

1. ✅ Understand the project architecture and data flow
2. ✅ Make safe modifications to content and styling
3. ✅ Add new features following existing patterns
4. ✅ Deploy changes via GitHub → Vercel workflow
5. ✅ Extend the platform with new pages and features

The project is well-structured, type-safe, and ready for rapid iteration and scaling.

---

**Documentation Version:** 1.0
**Last Updated:** March 2026
**Project Status:** Active Development
**Live URL:** https://devendra-gupta-portfolio.vercel.app/
**GitHub:** https://github.com/devubro143/trustmitra-portfolio

