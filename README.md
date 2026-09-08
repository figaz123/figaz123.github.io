# Portfolio Projects

Personal portfolio website of mine. Showcasing end-to-end data analytics, machine learning implementations, operational pipelines, and technical research.

---

## 🚀 Core Tech Stack

* **Front-End**: HTML5, Tailwind CSS, Vanilla JavaScript (ES Modules).
* **Design & Typography**: Syne & Montserrat (Headings), Inter (Body), DM Mono (Code & Metadata), FontAwesome 6.
* **Data Layer**: Structured JSON schema (`portfolio.json`) with client-side caching.
* **Media & Embeds**: Looker Studio, Google Drive Viewer, other embeds media will be added in the future.

---

## 📁 Repository Structure

```text
├── index.html                 # Main landing page with KPI counters & featured case studies
├── case_studies.html          # Multi-column case study reader with interactive embeds
├── articles.html              # Technical notes reader with built-in markdown parser
├── impact_records.html        # Career milestones, documentation galleries, & skills
├── contact.html               # Direct inquiry dispatch form and social channels
├── portfolio.json             # Central schema for metrics, projects, and experiences
│
├── css/
│   └── style.css              # Global design system, typography, and prose formatting
│
├── js/
│   ├── api.js                 # Unified data fetching layer, fallbacks, and schema normalization
│   ├── layout.js              # Shared navigation, dynamic drawer, and markdown parser
│   └── main.js                # View controller, category filtering, and modal dialogs
│
└── photo/                     # Project imagery, documentation assets, and thumbnails
```

---

## ⚙️ Key Architectural Features
### 1. Responsive Multi-Tier Case Study Reader

* **Mobile (< 768px)**: Single-column vertical stream with 16:9 proportional media.
* **Tablet (768px – 1535px)**: Media embed spans full top width with 50/50 context & methodology columns beneath.
* **Ultrawide (≥ 1536px)**: Full-bleed 3-column layout displaying Media, Context, and Code/Impact side-by-side.

### 2. Adaptive Documentation Galleries
* Experience records support structured multi-image documentation via the images schema (url and caption).
* Automatically adapts layouts from single banners to multi-column grids with hover scaling and image fallbacks.

### 3. Lightweight Client-Side Hydration
* Decoupled frontend components that hydrate dynamically from structured JSON payloads.
* Built-in error handling and offline fallback states to ensure high availability.

---
