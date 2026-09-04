/* ==========================================================================
   HOMEPAGE INTERACTIVE CONTROLLER & VIEW HYDRATOR
   Figo Azzam De Fitrah — Data Analytics & Engineering Portfolio
   ========================================================================== */

import { fetchPortfolioData, isValidUrl, FALLBACK_IMAGE_SVG, getLiveMetrics } from './api.js';
import { renderHeader, renderFooter, showToast, copyToClipboard, renderMarkdown } from './layout.js';

async function loadLiveMetrics() {
    const container = document.getElementById('metrics-container');
    if (!container) return;

    try {
        const metrics = await getLiveMetrics();
        if (!metrics || !Array.isArray(metrics) || metrics.length === 0) {
            return;
        }

        container.innerHTML = metrics.map(metric => `
            <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <div class="text-3xl lg:text-4xl font-mono font-bold ${metric.valueColor || 'text-navy'}">${metric.value}</div>
                <div class="text-xs font-mono ${metric.labelColor || 'text-orange'} mt-1 uppercase font-semibold">${metric.label}</div>
                <p class="text-xs text-slate-500 mt-2">${metric.description}</p>
            </div>
        `).join('');
    } catch (err) {
        console.warn('[main.js] Using fallback static metrics cards due to load error:', err);
    }
}

// --------------------------------------------------------------------------
// 1. State Management
// --------------------------------------------------------------------------
let state = {
  projects: [],
  articles: []
};

// --------------------------------------------------------------------------
// 2. Image & Error Handlers
// --------------------------------------------------------------------------
export function handleImageError(imgElement, embedUrl) {
  if (isValidUrl(embedUrl) && embedUrl.includes('drive.google.com')) {
    const parent = imgElement.parentElement;
    if (parent) {
      parent.innerHTML = `<iframe src="${embedUrl}" sandbox="allow-scripts allow-same-origin allow-forms" class="w-full h-full object-cover" loading="lazy"></iframe>`;
      return;
    }
  }
  imgElement.onerror = null;
  imgElement.src = FALLBACK_IMAGE_SVG;
}

// --------------------------------------------------------------------------
// 3. Project Cards Render Engine
// --------------------------------------------------------------------------
export function renderProjectCards(projects) {
  const container = document.getElementById('project-cards-container');
  if (!container) return;

  const visibleProjects = (projects || []).filter(
    p => p && p.published !== 'draft' && p.published !== 'hidden' && p.published !== 'false'
  );

  if (visibleProjects.length === 0) {
    container.innerHTML = `<div class="col-span-full text-center text-slate-500 py-12 font-mono text-xs">No published portfolio case studies found.</div>`;
    return;
  }

  container.innerHTML = visibleProjects.map((proj) => {
    const rawImagePath = (proj.imagePath || proj.coverImage || proj.image || '').trim();
    const embedUrl = (proj.embedUrl || '').trim();
    const directDashUrl = proj.dashboardUrl || embedUrl || proj.link || '';
    const hasLiveDash = isValidUrl(directDashUrl);

    let badgeLabel = "Analytics Study";
    if (embedUrl.includes('lookerstudio') || embedUrl.includes('datastudio') || proj.mediaType === 'looker') {
      badgeLabel = "Looker Studio";
    } else if (embedUrl.includes('drive.google.com') || proj.mediaType === 'iframe') {
      badgeLabel = "Google Drive Deck";
    } else if (proj.mediaType === 'tableau') {
      badgeLabel = "Tableau Dashboard";
    }

    let mediaMarkup = '';
    if ((proj.mediaType === 'iframe' || embedUrl.includes('drive.google.com')) && !rawImagePath) {
      mediaMarkup = `
        <iframe src="${embedUrl}" sandbox="allow-scripts allow-same-origin allow-forms" class="w-full h-full object-cover" title="${proj.title}" loading="lazy"></iframe>
        <div class="absolute bottom-3 right-3 bg-navy/90 backdrop-blur text-white text-[10px] font-mono px-2.5 py-1 rounded-md flex items-center gap-1.5 border border-white/10 shadow-sm pointer-events-none">
            <span class="w-1.5 h-1.5 rounded-full bg-orange animate-pulse"></span>
            <span>${badgeLabel}</span>
        </div>
      `;
    } else {
      const imgSrc = rawImagePath || FALLBACK_IMAGE_SVG;
      const safeEmbedUrl = encodeURIComponent(embedUrl);
      
      mediaMarkup = `
        <img src="${imgSrc}" alt="${proj.title}" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" onerror="window.handleImageError(this, decodeURIComponent('${safeEmbedUrl}'))">
        <div class="absolute bottom-3 right-3 bg-navy/90 backdrop-blur text-white text-[10px] font-mono px-2.5 py-1 rounded-md flex items-center gap-1.5 border border-white/10 shadow-sm">
            <span class="w-1.5 h-1.5 rounded-full bg-orange animate-pulse"></span>
            <span>${badgeLabel}</span>
        </div>
      `;
    }

    const tagsMarkup = (proj.tags || []).map(tag => {
      return `<span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded">[${tag}]</span>`;
    }).join(' ');

    const formattedDate = `${proj.month || ''} ${proj.year || ''}`.trim();

    let cardLinksHTML = '';
    if (hasLiveDash) {
      cardLinksHTML += `
        <a href="${directDashUrl}" target="_blank" rel="noopener noreferrer" class="w-full bg-slate-100 hover:bg-slate-200 text-navy text-xs font-semibold py-2 rounded-xl transition-colors flex items-center justify-center gap-2 border border-slate-200/80">
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px] text-orange"></i>
            <span>Direct Dashboard / Deck Link</span>
        </a>
      `;
    }

    return `
      <article class="project-card bg-slatebg rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all" data-category="${proj.category || 'analytics'}">
          <div>
              <div class="aspect-video bg-navy relative overflow-hidden group">
                  ${mediaMarkup}
                  <div class="absolute top-3 left-3 bg-navy/90 text-orange font-mono text-xs px-2.5 py-1 rounded-md border border-orange/30">${formattedDate || '2026'}</div>
              </div>

              <div class="p-6 space-y-4">
                  <div class="flex flex-wrap gap-1.5 font-mono text-[11px]">
                      ${tagsMarkup}
                  </div>

                  <h3 class="font-syne font-bold text-xl text-navy">${proj.title}</h3>
                  
                  <div class="text-xs text-slate-600 space-y-2 border-t border-slate-200 pt-3">
                      ${proj.problem ? `<div><strong>Problem:</strong> ${renderMarkdown(proj.problem)}</div>` : ''}
                      ${proj.impact ? `<div><strong>Business Impact:</strong> ${renderMarkdown(proj.impact)}</div>` : ''}
                  </div>
              </div>
          </div>

          <div class="p-6 pt-0 space-y-2">
              <button onclick="window.openCaseStudyModalById('${proj.id}')" class="w-full bg-navy hover:bg-orange text-white text-xs font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <i class="fa-solid fa-arrow-right-long"></i>
                  <span>Read Full Case Study</span>
              </button>
              ${cardLinksHTML}
          </div>
      </article>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// 4. Articles Render Engine
// --------------------------------------------------------------------------
export function renderArticles(articles) {
  const container = document.getElementById('articles-container');
  if (!container) return;

  const visibleArticles = (articles || []).filter(
    a => a && a.published !== 'draft' && a.published !== 'hidden' && a.published !== 'false'
  );

  if (visibleArticles.length === 0) {
    container.innerHTML = `<div class="col-span-full text-center text-slate-500 py-12 font-mono text-xs">No published technical notes found.</div>`;
    return;
  }

  container.innerHTML = visibleArticles.map((art) => {
    const articleTitle = art.title || "Untitled Article";
    const articleDate = art.date || "2026";
    const articleSummary = art.summary || art.description || "Technical note & writeup.";
    const articleStatus = art.status || "Published";
    
    const rawLink = (art.link || art.url || '').trim();
    const hasExternalLink = isValidUrl(rawLink);
    const targetLink = hasExternalLink ? rawLink : `articles.html?id=${art.id}`;

    return `
      <article class="bg-slatebg p-6 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
          <div class="space-y-3">
              <div class="flex items-center justify-between font-mono text-xs">
                  <span class="text-orange font-bold uppercase">${articleDate}</span>
                  <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-100 text-blue-800">${articleStatus}</span>
              </div>
              <h3 class="font-syne font-bold text-lg text-navy">${articleTitle}</h3>
              <p class="text-xs text-slate-600 leading-relaxed">${articleSummary}</p>
          </div>
          <div class="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between">
              <a href="${targetLink}" ${hasExternalLink ? 'target="_blank" rel="noopener noreferrer"' : ''} class="text-xs font-mono font-semibold text-navy hover:text-orange transition-colors inline-flex items-center gap-1.5">
                  <span>${hasExternalLink ? 'External Writeup' : 'Read Full Note'}</span>
                  <i class="fa-solid ${hasExternalLink ? 'fa-arrow-up-right-from-square' : 'fa-arrow-right'} text-[10px]"></i>
              </a>
              <span class="text-[10px] font-mono text-slate-400 font-medium">${hasExternalLink ? 'External' : 'Local Reader'}</span>
          </div>
      </article>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// 5. Category Filtering
// --------------------------------------------------------------------------
export function filterProjects(category, event) {
  const cards = document.querySelectorAll('.project-card');
  const btns = document.querySelectorAll('.filter-btn');

  btns.forEach(btn => {
    btn.classList.remove('bg-navy', 'text-white');
    btn.classList.add('bg-slate-100', 'text-slate-600');
  });

  if (event && event.target) {
    event.target.classList.remove('bg-slate-100', 'text-slate-600');
    event.target.classList.add('bg-navy', 'text-white');
  }

  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category') || '';
    if (category === 'all' || cardCat.includes(category)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// --------------------------------------------------------------------------
// 6. Case Study Deep-Dive Modal Controllers with Markdown
// --------------------------------------------------------------------------
export function openCaseStudyModalById(id) {
  const data = state.projects.find(p => p.id === id);
  if (!data) return;

  const formattedDate = `${data.month || ''} ${data.year || ''}`.trim();

  document.getElementById('modal-title').innerText = data.title || '';
  document.getElementById('modal-date').innerText = formattedDate || '2026';
  
  // Format problem, methodology, and impact with universal markdown parser
  document.getElementById('modal-problem').innerHTML = renderMarkdown(data.problem || data.description || '', 'Problem description...', 'light');
  document.getElementById('modal-methodology').innerHTML = renderMarkdown(data.methodology || '', 'Methodology description...', 'light');
  document.getElementById('modal-code').innerText = data.codeSnippet || '-- No snippet available';
  document.getElementById('modal-impact').innerHTML = renderMarkdown(data.impact || '', 'Impact summary...', 'emerald');

  const dashUrl = data.dashboardUrl || data.embedUrl || data.link;
  const artUrl = data.articleUrl || data.writeupUrl || data.docUrl;
  const gitUrl = data.githubUrl || data.repoUrl;

  const primaryLink = document.getElementById('modal-link-primary');
  let actionContainer = document.getElementById('modal-action-buttons');
  if (!actionContainer && primaryLink && primaryLink.parentElement) {
    actionContainer = primaryLink.parentElement;
  }

  if (actionContainer) {
    let buttonsHTML = '';

    if (isValidUrl(dashUrl)) {
      buttonsHTML += `
        <a href="${dashUrl}" target="_blank" rel="noopener noreferrer" class="bg-navy hover:bg-orange text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-2">
            <i class="fa-solid fa-chart-pie text-orange"></i>
            <span>Open Live Dashboard / Deck</span>
        </a>
      `;
    }

    if (isValidUrl(artUrl)) {
      buttonsHTML += `
        <a href="${artUrl}" target="_blank" rel="noopener noreferrer" class="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-2 border border-slate-200">
            <i class="fa-solid fa-newspaper text-navy"></i>
            <span>Read Article / Docs</span>
        </a>
      `;
    }

    if (isValidUrl(gitUrl)) {
      buttonsHTML += `
        <a href="${gitUrl}" target="_blank" rel="noopener noreferrer" class="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-2">
            <i class="fa-brands fa-github"></i>
            <span>View Repository</span>
        </a>
      `;
    }

    if (!buttonsHTML) {
      buttonsHTML = `<span class="text-xs text-slate-400 italic">No external links attached for this case study.</span>`;
    }

    const closeBtnHTML = `<button onclick="window.closeCaseStudyModal()" class="text-xs text-slate-500 hover:text-slate-800 font-semibold px-3 py-2">Close Preview</button>`;
    actionContainer.innerHTML = `<div class="flex flex-wrap items-center gap-2.5">${buttonsHTML}</div> ${closeBtnHTML}`;
  }

  const modal = document.getElementById('case-study-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

export function closeCaseStudyModal() {
  const modal = document.getElementById('case-study-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

export function copyCodeSnippet() {
  const codeEl = document.getElementById('modal-code');
  if (codeEl) {
    copyToClipboard(codeEl.innerText, "SQL/Python snippet copied to clipboard!");
  }
}

// --------------------------------------------------------------------------
// 7. Global Window Bindings & Init
// --------------------------------------------------------------------------
window.handleImageError = handleImageError;
window.filterProjects = filterProjects;
window.openCaseStudyModalById = openCaseStudyModalById;
window.closeCaseStudyModal = closeCaseStudyModal;
window.copyCodeSnippet = copyCodeSnippet;

async function init() {
  renderHeader('home');
  renderFooter();

  // Load dynamic metrics alongside the layout
  loadLiveMetrics();

  const data = await fetchPortfolioData();
  state.projects = data.projects;
  state.articles = data.articles;

  renderProjectCards(state.projects);
  renderArticles(state.articles);
}

document.addEventListener('DOMContentLoaded', init);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCaseStudyModal();
  }
});