# Facundo Construction Website & SEO Documentation

**Project:** Facundo Construction (facunoconstruction.com)  
**Date:** December 18, 2025  
**Built By:** C&L Strategy  
**Stack:** Next.js 15 (App Router), Tailwind CSS v4, Vercel

---

## 1. Project Overview & Architecture
We rebuilt the Facundo Construction digital presence from the ground up to transition from a generic "home builder" site to a **dominating local authority** in Residential, Commercial, and Civil construction.

**Implementation Timeline:** This comprehensive pSEO and AEO architecture was implemented **immediately during the client onboarding phase**. Instead of a slow, piecemeal rollout, we deployed the full "Service + Location" matrix from Day 1, ensuring Facundo Construction begins indexing for hundreds of local keywords instantly.

The site uses a **Headless/Static Hybrid Architecture**:
- **Framework**: Next.js 15 (React) for server-side rendering and static site generation.
- **Styling**: Tailwind CSS v4 for lightweight, utility-first styling.
- **Hosting**: Vercel Global Edge Network for sub-second load times.

---

## 2. The 5 Pillars of SEO: Implementation Strategy

We applied the 5 Pillars of SEO directly into the codebase. Here is how each was handled:

### I. Technical SEO (The Foundation)
*   **Core Web Vitals**: The site is built on Next.js, which automatically optimizes images (`next/image`), scripts, and fonts. This ensures LCP (Largest Contentful Paint) and CLS (Cumulative Layout Shift) scores are in the "Green" zone.
*   **Mobile-First Design**: Tailwind CSS was used to build mobile views *first*, expanding to desktop. This passes Google's "Mobile-Friendly" test by default.
*   **Clean URL Structure**: We abandoned query parameters (e.g., `?page=services`) in favor of semantic, hierarchical URLs (e.g., `/services/custom-homes/river-oaks`).
*   **Robots.txt & Sitemap**: dynamically generated in `app/robots.ts` and `app/sitemap.ts` to ensure Google crawls every single pSEO page.

### II. On-Page SEO (The Content Structure)
*   **Semantic HTML**: We used proper `<main>`, `<section>`, `<h1>`, `<h2>` tags.
    *   *Example*: The Hero has a single `<h1>`, service sections use `<h2>`, and features use `<h3>`.
*   **Keyword Optimization**:
    *   **Primary Keywords**: "Custom Home Builder", "Commercial Construction", "Civil Structural".
    *   **Placement**: Keywords are injected dynamically into Page Titles, H1s, and Meta Descriptions.
*   **Internal Linking**: The footer and "Nearby Locations" sections create a mesh of internal links, passing "link juice" from the homepage to deep service pages.

### III. Content SEO (The Meat)
*   **Positioning**: We shifted the narrative from "general contractor" to **"Residential. Commercial. Civil. From Start to Finish."** This targets higher-value commercial contracts while keeping the luxury home allure.
*   **Scraped & Curated Imagery**: We performed an "APE" scrape of the old site to recover 400+ authentic project photos, ensuring no stock photos were used. Google rewards unique, original imagery.
*   **Service Deep Dives**: Each service (e.g., "Home Additions") has unique descriptions, value propositions, and feature lists.

### IV. Local SEO (The Geography)
*   **NAP Consistency**: Name, Address, and Phone Number (NAP) are hardcoded in the `Footer` and `Contact` page to match exactly what will be on the Google Business Profile.
    *   *Name*: FACUNDO CONSTRUCTION
    *   *Address*: Garden Oaks, Houston, TX 77018
*   **Geo-Targeting**: The pSEO engine (see below) explicitly names neighborhoods (e.g., "River Oaks", "West University") in the content, signaling to Google that we are relevant for *those specific* local searches.

### V. Authority / Trust (The Reputation)
*   **HTTPS/SSL**: Secured automatically via Vercel.
*   **Social Proof**: "Since 2004" and "Over 20 years" trust signals are prominent.
*   **Portfolio Verification**: The Gallery page serves as proof of work, which is critical for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).

---

## 3. Answer Engine Optimization (AEO) Strategy

While SEO targets Google's search list, **AEO (Answer Engine Optimization)** targets AI models like ChatGPT, Perplexity, and Google's AI Overviews.

We implemented a specific AEO layer to ensure AI agents "understand" Facundo Construction:

### 1. Structured Data (Schema Markup)
We injected `LocalBusiness` JSON-LD schema into the homepage. This speaks the native language of search engines.
*   **What it does**: Explicitly tells AI models: "This is a Construction Company. Here is the phone number. Here are the hours. Here is the exact service area."
*   **Why it matters**: When a user asks Siri or ChatGPT "Find a custom home builder in Garden Oaks", the AI parses this structured data to provide a direct answer.

### 2. Entity Optimization (Knowledge Graph)
We optimized the content to establish "Facundo Construction" as a distinct Entity in the Knowledge Graph.
*   **Consistency**: By strictly enforcing "Residential. Commercial. Civil." across the site, we train AI models to associate the brand with these specific capabilities.
*   **Clear Definitions**: The "Who We Are" and "What We Do" sections are written in direct, factual sentences (Subject-Verb-Object) which are easier for LLMs to ingest and cite.

### 3. Q&A Formatting (The "Direct Answer")
The pSEO pages are structured to answer the implicit question: *"Do you do [Service] in [Location]?"*
*   **The Answer**: "Yes. Facundo Construction provides [Service] in [Location]."
*   This direct matching increases the probability of being featured as the "Answer" in zero-click searches.

---

## 4. Programmatic SEO (pSEO) Implementation

This is the engine under the hood that allows Facundo Construction to punch above its weight.

### The Logic
Instead of manually writing 100 pages for every service in every neighborhood, we built a **Content Generation Engine**.

**Equation**: `[Service]` + `[Location]` = `[Unique Landing Page]`

### The Data Structure (`lib/pseo-data.ts`)
We defined two constant arrays:
1.  **Services**: Custom Homes, Kitchen Remodeling, Commercial, Civil, etc.
    *   *Contains*: Slug, Title, Short Desc, Full Desc, Feature Lists, Specific Images.
2.  **Locations**: Garden Oaks, River Oaks, Memorial, West U, etc.
    *   *Contains*: Slug, Name, Zip Codes, Neighborhood Description.

### The Dynamic Routing (`app/services/[service]/[location]/page.tsx`)
Next.js creates these pages on the fly (or at build time):
1.  **`generateStaticParams`**: This function calculates every possible combination (Service × Location) at build time.
    *   *Result*: 5 Services × 7 Locations = **35 Instant Landing Pages**.
2.  **Dynamic Metadata**:
    *   The page title dynamically becomes: `"Custom Home Building in River Oaks | Facundo Construction"`.
    *   The description becomes: `"Professional custom home building services in River Oaks..."`.
3.  **Content Injection**:
    *   The page injects the **Service Description**.
    *   It injects the **Location Name**.
    *   It injects a custom paragraph: *"At Facundo Construction, we understand the unique architectural requirements... of [Location Name]."*

### The Result
When a user searches for "Civil construction in Garden Oaks", Google sees a dedicated, fast-loading, highly relevant page just for that query—giving Facundo Construction a massive advantage over competitors who only have a generic "Services" page.

## 5. Future pSEO Roadmap & Autonomous Maintenance

### The "Expansion" Strategy (Phase 2 & 3)
The current pSEO engine has been "unlocked" to cover 18+ high-value Houston neighborhoods.
*   **Current State**: 6 Services × 18 Locations = **108 Unique Landing Pages**.
*   **Future Vertical Expansion**: We plan to add "Niche" services such as *Barndominiums*, *Outdoor Living*, and *Commercial Build-outs* (Medical/Retail).
*   **Result**: This will scale the site to **160+ pages** without writing new code, simply by adding to the data structure.

### The Autonomous SEO Agent
We have deployed a **C&L Strategy Autonomous Agent** (running on Zo Computer infrastructure) to maintain and grow this digital asset.

*   **Monthly Audits**: On the 1st of every month, the agent scans the site using Lighthouse and custom SEO heuristics.
*   **Rank Tracking**: It monitors SERP positions for key terms like "Custom Home Builder Garden Oaks".
*   **Content Opportunities**: The agent analyzes search trends and suggests new "Service + Location" combinations to add to the pSEO engine.
*   **Reporting**: It compiles a performance report and emails it to the stakeholders, ensuring transparency and proving ROI.

This "Set It and Forget It" system ensures Facundo Construction doesn't just launch strong, but *stays* ahead of the competition algorithmically.




