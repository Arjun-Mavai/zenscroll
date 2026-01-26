# 🌿 Zenscroll (formerly Mindful)

**Turn Doomscrolling into Mindful Scrolling.**

Zenscroll is a premium digital sanctuary designed to replace the cheap dopamine of social media with the serotonin of wisdom. Instead of endless feeds of noise, swipe through curated insights from history's greatest minds in Spirituality, Business, Philosophy, and Science.

![Zenscroll Demo](https://images.unsplash.com/photo-1519098901909-b1553a1190af?q=80&w=2574&auto=format&fit=crop)
_(Note: Replace with actual screenshot)_

## ✨ Features

- **🧠 Mindful Swiping**: Tinder-style interface designed for focus, not addiction. Swipe right to save wisdom, left to let go.
- **🎨 Zen Mode**: Toggle between a vibrant daylight mode and a deep, ambient "Zen Mode" for night-time reflection.
- **🔒 Premium Categories**: Exclusive access to "Ted Wisdom" and "Scientific Proven" facts (Paywall integrated).
- **👤 Smart Profiling**: Tracks your daily swipes and saved collection.
- **⚡ Performance First**: Built with Next.js Server Components for lightning-fast data fetching.
- **🔍 Deep Filtering**: Filter wisdom not just by Category (e.g., Stoicism), but also by specific Authors (e.g., Marcus Aurelius).

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom Design System
- **Animation**: Framer Motion (Spring Physics, AnimatePresence)
- **Database**: Supabase (PostgreSQL)
- **State Management**: Zustand
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Supabase Account

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/Arjun-Mavai/zenscroll.git
    cd zenscroll
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Set up Environment Variables**
    Create a `.env.local` file:

    ```env
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    SUPABASE_SERVICE_ROLE_KEY=your_service_role_key # Only for seeding
    ```

4.  **Seed the Database**
    Populate your database with the initial curated quotes:

    ```bash
    npx tsx src/scripts/seed.ts
    ```

5.  **Run the App**
    ```bash
    npm run dev
    ```

## 🤝 Contribution

This is an open initiative to make the internet a calmer place. Feel free to open PRs for new features or bug fixes.

## 📄 License

MIT.

---

_Crafted with ❤️ by Arjun Mavai._
