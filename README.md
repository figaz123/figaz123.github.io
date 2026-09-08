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

### 1. Responsive 3-Tier Case Study Reader
* **Mobile (< 768px)**: Single-column vertical stream with 16:9 proportional media.
* **Tablet (768px – 1535px)**: Media embed spans full top width with 50/50 context & code columns beneath.
* **Ultrawide (≥ 1536px)**: Full-bleed 3-column layout displaying Media, Problem/Methodology, and Code/Impact side-by-side.

### 2. Defensive Documentation Galleries
* Experience entries in `impact_records.html` support multi-image documentation via the `images` array (`url` and `caption`).
* Automatically adapts from single-column banners to 2-column or 3-column grids with hover scaling and broken image error handling.

### 3. Integrated Headless CMS
* Split-pane administrative UI managing `metrics`, `projects`, `experiences`, `education`, `skills`, and `articles`.
* **Pattern A Image Serialization**: Converts line-delimited entries (`photo/path.jpg | Caption text`) directly into JSON objects on save.
* Dual sync: Persists updates directly to the live VPS REST API via Bearer token authorization with LocalStorage and File System API fallbacks.

---
