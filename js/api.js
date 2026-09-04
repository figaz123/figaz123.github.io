/* ==========================================================================
   CENTRALIZED PORTFOLIO API ENGINE & MULTI-TIER DATA LOADER
   Figo Azzam De Fitrah — Data Analytics & Engineering Portfolio
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. API Configuration & Constants
// --------------------------------------------------------------------------
export const API_CONFIG = {
  // Primary and exclusive remote database endpoint
  vpsEndpoint: "https://figo-portfolio.duckdns.org/api/portfolio",
  storageKey: "figo_portfolio_cms_store",
  requestTimeoutMs: 5000 // 5-second network timeout
};

export const FALLBACK_IMAGE_SVG = `data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22340%22%20viewBox%3D%220%200%20600%20340%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%231C3968%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2245%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23F68F45%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22bold%22%3EData%20Analytics%20Case%20Study%3C%2Ftext%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2260%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%2394A3B8%22%20font-family%3D%22monospace%22%20font-size%3D%2213%22%3E[Preview%20Image%20Placeholder]%3C%2Ftext%3E%3C%2Fsvg%3E`;

// Default Fallback Datasets (In-Memory Safe State)
export const DEFAULT_METRICS = [
  {
    id: "metric-transactions",
    value: "122K+",
    label: "Transactions Analyzed",
    description: "Consolidated cross-channel transaction logs for OCA Indonesia.",
    valueColor: "text-navy",
    labelColor: "text-orange"
  },
  {
    id: "metric-revenue",
    value: "+60%",
    label: "Revenue Expansion",
    description: "Price Elasticity modeling for PeopleU subscription tiers.",
    valueColor: "text-orange",
    labelColor: "text-navy"
  },
  {
    id: "metric-loss-recovered",
    value: "$2.15M",
    label: "Potential Loss Recovered",
    description: "Predictive late-delivery model for NextHub Logistics.",
    valueColor: "text-emerald-600",
    labelColor: "text-navy"
  },
  {
    id: "metric-accuracy",
    value: "93%",
    label: "Model Accuracy",
    description: "Patented FMCW Radar LSTM classification system.",
    valueColor: "text-techblue",
    labelColor: "text-orange"
  }
];

// Default Fallback Datasets (In-Memory Safe State)
export const DEFAULT_PROJECTS = [
  {
    id: "oca-segmentation",
    published: "publish",
    year: 2026,
    month: "May",
    category: "analytics",
    icon: "fa-users-gear",
    previewText: "Client Segmentation & Capacity Forecasting",
    tags: ["SQL", "BigQuery", "K-Means", "Prophet"],
    title: "OCA Indonesia: Client Segmentation & Capacity Forecasting",
    description: "Optimizing omnichannel growth and server health for OCA Indonesia by analyzing and clustering 122,749 transaction logs across 4 channels.",
    problem: "Disconnected channel monitoring across WA, SMS, Email, and Calls created silent churn risks and unexpected server load spikes during peak broadcast hours.",
    methodology: "SQL CTE window aggregations on 122.7K logs + K-Means clustering (K=3) + Meta Prophet 7-day capacity engine.",
    codeSnippet: "WITH combined_transactions AS (...)\nSELECT * FROM combined_transactions;",
    impact: "Isolated VIP client cluster driving 60% of revenue, protected 33% of endangered accounts, and forecasted server load with 93.37% accuracy.",
    mediaType: "looker",
    imagePath: "assets/images/oca_thumb.png",
    embedUrl: "https://lookerstudio.google.com/embed/reporting/nf9wuIQ4Z4A/page/1M",
    dashboardUrl: "https://lookerstudio.google.com/reporting/nf9wuIQ4Z4A/page/1M",
    articleUrl: "",
    githubUrl: ""
  },
  {
    id: "peopleu-pricing",
    published: "publish",
    year: 2026,
    month: "May",
    category: "strategy analytics",
    icon: "fa-chart-line",
    previewText: "Price Elasticity of Demand (PED)",
    tags: ["PED Model", "Python", "EDA"],
    title: "PeopleU: Pricing Strategy via Price Elasticity of Demand",
    description: "Evaluating 2022 promotional pricing mechanics to determine optimal subscription rates and maximize overall revenue without volume collapse.",
    problem: "Subscription prices exceeded market averages, risking subscriber churn during price resets.",
    methodology: "Isolated net-new customer cohorts and modeled elasticity coefficients (-11.23) across customer tiers using Python.",
    codeSnippet: "# Calculate Price Elasticity of Demand (PED)\nped = percentage_change_qty / percentage_change_price",
    impact: "Justified promotional rates, preventing volume collapse and driving a +60% net revenue expansion to Rp1.3B.",
    mediaType: "iframe",
    imagePath: "assets/images/peopleu_thumb.png",
    embedUrl: "https://drive.google.com/file/d/1TvH2YOtlbQnk5lbxl0FAKd8vl8G6qcuY/preview",
    dashboardUrl: "https://drive.google.com/file/d/1TvH2YOtlbQnk5lbxl0FAKd8vl8G6qcuY/view",
    articleUrl: "",
    githubUrl: ""
  },
  {
    id: "nexthub-logistics",
    published: "publish",
    year: 2026,
    month: "February",
    category: "analytics ml",
    icon: "fa-truck-fast",
    previewText: "Supply Chain Analytics",
    tags: ["Python", "Random Forest", "Deep Learning"],
    title: "NextHub: Supply Chain Late Delivery Optimization",
    description: "Analyzed logistics operations data to address a 54.8% late delivery rate, developing predictive models to mitigate financial loss.",
    problem: "54.8% late delivery rate across shipping modes, threatening client retention and operational revenue.",
    methodology: "Exploratory Data Analysis, Random Forest classification, and Deep Learning implementation to forecast delays.",
    codeSnippet: "# Random Forest Late Delivery Model\nmodel.fit(X_train, y_train)",
    impact: "Achieved 69.1% recall in delay detection, enabling SLA restructuring that recovered $2.15M in potential losses.",
    mediaType: "iframe",
    imagePath: "assets/images/nexthub_thumb.png",
    embedUrl: "https://drive.google.com/file/d/1JE6XH81YiLASRdEnzoNTLXp5CZSyibLu/preview",
    dashboardUrl: "https://drive.google.com/file/d/1JE6XH81YiLASRdEnzoNTLXp5CZSyibLu/view",
    articleUrl: "",
    githubUrl: ""
  }
];

export const DEFAULT_ARTICLES = [
  {
    id: "hydroponics-pipeline",
    published: "publish",
    title: "Building an End-to-End Analytics Pipeline for IoT Hydroponics",
    date: "July 2026",
    summary: "How I structured an automated data ingestion, SQLite warehousing, and Meta Prophet forecasting workflow for environmental telemetry data.",
    link: "",
    status: "Technical Note",
    content: "## Hydroponics IoT Pipeline Architecture\n\nThe MQTT broker (Mosquitto) ingests sensor telemetry into SQLite."
  }
];

// --------------------------------------------------------------------------
// 2. Data Helper Utilities
// --------------------------------------------------------------------------
export function isValidUrl(url) {
  return Boolean(url && typeof url === 'string' && url.trim() !== '' && url.trim() !== '#');
}

export function normalizePortfolioPayload(rawPayload) {
  if (!rawPayload) {
    return {
      meta: {},
      projects: DEFAULT_PROJECTS,
      articles: DEFAULT_ARTICLES,
      experiences: [],
      education: [],
      skills: []
    };
  }

  const root = rawPayload.data || rawPayload;
  return {
    meta: root.meta || {},
    metrics: Array.isArray(root.metrics) && root.metrics.length > 0 ? root.metrics : DEFAULT_METRICS,
    projects: Array.isArray(root.projects) ? root.projects : (Array.isArray(root) ? root : DEFAULT_PROJECTS),
    articles: Array.isArray(root.articles) ? root.articles : DEFAULT_ARTICLES,
    experiences: Array.isArray(root.experiences) ? root.experiences : [],
    education: Array.isArray(root.education) ? root.education : [],
    skills: Array.isArray(root.skills) ? root.skills : []
  };
}

// --------------------------------------------------------------------------
// 3. Direct VPS API Fetch Pipeline
// --------------------------------------------------------------------------
export async function fetchPortfolioData() {
  let rawPayload = null;

  // PRIMARY: Fetch directly from live DuckDNS VPS API
  if (API_CONFIG.vpsEndpoint) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), API_CONFIG.requestTimeoutMs);

      // Cache-busting URL parameter guarantees fresh data without non-simple HTTP headers
      const separator = API_CONFIG.vpsEndpoint.includes('?') ? '&' : '?';
      const cacheBustUrl = `${API_CONFIG.vpsEndpoint}${separator}_ts=${Date.now()}`;
      
      const response = await fetch(cacheBustUrl, {
        method: "GET",
        signal: controller.signal,
        headers: {
          "Accept": "application/json"
        },
        cache: "no-store" //added from new code
      });
      clearTimeout(timer);

      if (response.ok) {
        rawPayload = await response.json();
        console.info("[api.js] Successfully loaded live payload from VPS API.");
        // Cache the latest successful VPS payload in LocalStorage for offline fallback
        const payloadToStore = rawPayload?.data || rawPayload;
        localStorage.setItem(API_CONFIG.storageKey, JSON.stringify(payloadToStore));
      } else {
        console.warn(`[api.js] VPS returned HTTP status ${response.status}: ${response.statusText}`);
      }
    } catch (vpsErr) {
      console.warn("[api.js] VPS API offline or timed out. Falling back to cached state.", vpsErr);
    }
  }

  // FALLBACK: LocalStorage Cache (if VPS is unreachable)
  if (!rawPayload) {
    const localSaved = localStorage.getItem(API_CONFIG.storageKey);
    if (localSaved) {
      try {
        rawPayload = JSON.parse(localSaved);
        console.info("[api.js] Loaded dataset from browser LocalStorage cache.");
      } catch (e) {
        console.warn("[api.js] LocalStorage parsing failed.", e);
      }
    }
  }

  return normalizePortfolioPayload(rawPayload);
}

export async function getLiveMetrics() {
  const data = await fetchPortfolioData();
  return data.metrics;
}

export async function getProjects() {
  const data = await fetchPortfolioData();
  if (!data || !Array.isArray(data.projects)) return [];
  return data.projects.filter(p => p.published === "publish");
}

export async function getExperiences() {
  const data = await fetchPortfolioData();
  if (!data || !Array.isArray(data.experiences)) return [];
  return data.experiences.filter(e => e.published === "publish");
}

export async function getSkills() {
  const data = await fetchPortfolioData();
  if (!data || !Array.isArray(data.skills)) return [];
  return data.skills.filter(s => s.published === "publish");
}

export async function getArticles() {
  const data = await fetchPortfolioData();
  if (!data || !Array.isArray(data.articles)) return [];
  return data.articles.filter(a => a.published === "publish");
}

export async function getPortfolioMeta() {
  const data = await fetchPortfolioData();
  return data.meta || {};
}

export async function savePortfolioData(updatedData, token) {
  if (!token) {
    throw new Error("Admin authentication token is required for write operations.");
  }

  if (updatedData.meta) {
    updatedData.meta.lastUpdated = new Date().toISOString().split("T")[0];
  }

  const response = await fetch(API_CONFIG.vpsEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token.trim()}`
    },
    body: JSON.stringify(updatedData, null, 2)
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.error || `Server write failed with HTTP status ${response.status}`);
  }

  return await response.json();
}

if (typeof window !== "undefined") {
  window.PortfolioAPI = {
    API_CONFIG,
    fetchPortfolioData,
    getLiveMetrics,
    getProjects,
    getExperiences,
    getSkills,
    getArticles,
    getPortfolioMeta,
    savePortfolioData
  };
}