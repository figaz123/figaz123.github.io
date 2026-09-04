/* ==========================================================================
   SHARED LAYOUT INJECTOR & RESPONSIVE NAVIGATION ENGINE
   Figo Azzam De Fitrah — Data Analytics & Engineering Portfolio
   ========================================================================== */

/**
 * Universal Markdown Parser for structured cards, notes, and modal dialogs.
 * Formats inline code, bold text, italics, and multi-line bullet lists.
 *
 * @param {string} text - Raw markdown text to format
 * @param {string} defaultText - Fallback placeholder text if string is empty
 * @param {string} variant - 'light' (navy text/orange bullets) or 'emerald' (light text/emerald bullets)
 * @returns {string} Safe HTML markup
 */
export function renderMarkdown(text, defaultText = '', variant = 'light') {
  if (!text || typeof text !== 'string' || !text.trim()) {
    return `<p class="leading-relaxed">${defaultText}</p>`;
  }

  // Escape raw HTML entities to prevent injection
  let raw = text.trim()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Inline code tags (`code`)
  const codeBg = variant === 'emerald' 
    ? 'bg-emerald-950/60 text-emerald-200 border border-emerald-500/30' 
    : 'bg-slate-900 text-cyan-300 border border-slate-700/50';
  raw = raw.replace(/`([^`]+)`/g, `<code class="px-1.5 py-0.5 rounded ${codeBg} font-mono text-[11px] font-normal">$1</code>`);

  // Bold (**bold**) & Italic (*italic*)
  const boldColor = variant === 'emerald' ? 'text-white font-bold' : 'text-navy font-bold';
  raw = raw.replace(/\*\*(.*?)\*\*/g, `<strong class="${boldColor}">$1</strong>`);
  raw = raw.replace(/\*(.*?)\*/g, '<em class="italic opacity-90">$1</em>');

  const lines = raw.split('\n');
  let inList = false;
  const output = [];
  const bulletColor = variant === 'emerald' ? 'text-emerald-400' : 'text-orange';

  for (let line of lines) {
    const trimmed = line.trim();

    // Markdown unordered list bullet item
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      if (!inList) {
        inList = true;
        output.push('<ul class="space-y-2 my-2.5">');
      }
      const itemText = trimmed.substring(2);
      output.push(`
        <li class="flex items-start gap-2.5 leading-relaxed text-inherit">
          <span class="${bulletColor} mt-1.5 text-[8px] shrink-0"><i class="fa-solid fa-circle"></i></span>
          <span class="leading-relaxed">${itemText}</span>
        </li>
      `);
    } else {
      if (inList) {
        inList = false;
        output.push('</ul>');
      }
      if (trimmed.length > 0) {
        output.push(`<p class="leading-relaxed mb-2.5 last:mb-0">${trimmed}</p>`);
      }
    }
  }

  if (inList) {
    output.push('</ul>');
  }

  return output.join('');
}

// --------------------------------------------------------------------------
// 1. Dynamic Header Renderer with Mobile Hamburger Menu
// --------------------------------------------------------------------------
export function renderHeader(activePage = 'home') {
  const headerContainer = document.getElementById('site-header');
  if (!headerContainer) return;

  headerContainer.className = "sticky top-0 z-40 bg-navy/95 backdrop-blur-md glass-header border-b border-white/10 text-white shadow-md";
  headerContainer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <!-- Brand Logo with proper vertical leading -->
        <a href="index.html" class="flex items-center gap-3 group">
            <div class="w-10 h-10 rounded-xl bg-orange flex items-center justify-center font-syne font-bold text-white text-xl shadow-lg group-hover:scale-105 transition-transform">
                FA
            </div>
            <div class="flex flex-col justify-center">
                <span class="font-syne font-bold text-lg block text-white leading-tight">Figo Azzam</span>
                <span class="font-mono text-xs text-orange font-medium leading-normal">Data Analytics Portfolio</span>
            </div>
        </a>

        <!-- Desktop Navigation Menu -->
        <nav class="hidden md:flex items-center space-x-6 font-medium text-sm text-white">
            <a href="case_studies.html" class="${activePage === 'case_studies' ? 'text-orange font-bold' : 'hover:text-orange'} transition-colors flex items-center gap-1.5" title="View Business Case Studies">
                <i class="fa-solid fa-chart-pie text-xs ${activePage === 'case_studies' ? 'text-orange' : 'opacity-70'}"></i>
                <span>Case Studies</span>
            </a>
            <a href="articles.html" class="${activePage === 'articles' ? 'text-orange font-bold' : 'hover:text-orange'} transition-colors flex items-center gap-1.5" title="Read Technical Notes & Articles">
                <i class="fa-solid fa-newspaper text-xs ${activePage === 'articles' ? 'text-orange' : 'opacity-70'}"></i>
                <span>Articles</span>
            </a>
            <a href="impact_records.html" class="${activePage === 'impact' ? 'text-orange font-bold' : 'hover:text-orange'} transition-colors flex items-center gap-1.5" title="Explore Impact & Track Record">
                <i class="fa-solid fa-timeline text-xs ${activePage === 'impact' ? 'text-orange' : 'opacity-70'}"></i>
                <span>Impact & Track Record</span>
            </a>
            <a href="contact.html" class="${activePage === 'contact' ? 'text-orange font-bold' : 'hover:text-orange'} transition-colors flex items-center gap-1.5">
                <i class="fa-solid fa-envelope text-xs ${activePage === 'contact' ? 'text-orange' : 'opacity-70'}"></i>
                <span>Contact</span>
            </a>
        </nav>

        <!-- Right Side Buttons -->
        <div class="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/figoazzamdefitrah/" target="_blank" rel="noopener noreferrer" class="hidden sm:flex bg-orange hover:bg-orange-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-md items-center gap-2">
                <i class="fa-brands fa-linkedin"></i>
                <span>Connect</span>
            </a>

            <!-- Mobile Hamburger Button -->
            <button id="mobile-menu-toggle-btn" onclick="window.toggleMobileNav()" aria-label="Toggle Navigation Menu" aria-expanded="false" class="md:hidden w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/15 focus:outline-none focus:ring-2 focus:ring-orange">
                <i id="mobile-menu-icon" class="fa-solid fa-bars text-lg"></i>
            </button>
        </div>
    </div>

    <!-- Mobile Collapsible Navigation Drawer Menu -->
    <div id="mobile-nav-drawer" class="hidden md:hidden bg-navy-dark/98 backdrop-blur-xl border-t border-white/10 px-4 py-6 space-y-3 shadow-2xl transition-all duration-300">
        <nav class="flex flex-col space-y-1.5 text-sm font-medium">
            <a href="index.html" class="${activePage === 'home' ? 'bg-orange/20 text-orange font-bold border-l-4 border-orange' : 'text-slate-200 hover:bg-white/5 hover:text-white'} px-4 py-3 rounded-xl transition-all flex items-center gap-3">
                <i class="fa-solid fa-house text-sm w-5 text-center ${activePage === 'home' ? 'text-orange' : 'opacity-70'}"></i>
                <span>Home</span>
            </a>
            <a href="case_studies.html" class="${activePage === 'case_studies' ? 'bg-orange/20 text-orange font-bold border-l-4 border-orange' : 'text-slate-200 hover:bg-white/5 hover:text-white'} px-4 py-3 rounded-xl transition-all flex items-center gap-3">
                <i class="fa-solid fa-chart-pie text-sm w-5 text-center ${activePage === 'case_studies' ? 'text-orange' : 'opacity-70'}"></i>
                <span>Case Studies</span>
            </a>
            <a href="articles.html" class="${activePage === 'articles' ? 'bg-orange/20 text-orange font-bold border-l-4 border-orange' : 'text-slate-200 hover:bg-white/5 hover:text-white'} px-4 py-3 rounded-xl transition-all flex items-center gap-3">
                <i class="fa-solid fa-newspaper text-sm w-5 text-center ${activePage === 'articles' ? 'text-orange' : 'opacity-70'}"></i>
                <span>Articles</span>
            </a>
            <a href="impact_records.html" class="${activePage === 'impact' ? 'bg-orange/20 text-orange font-bold border-l-4 border-orange' : 'text-slate-200 hover:bg-white/5 hover:text-white'} px-4 py-3 rounded-xl transition-all flex items-center gap-3">
                <i class="fa-solid fa-timeline text-sm w-5 text-center ${activePage === 'impact' ? 'text-orange' : 'opacity-70'}"></i>
                <span>Impact & Track Record</span>
            </a>
            <a href="contact.html" class="${activePage === 'contact' ? 'bg-orange/20 text-orange font-bold border-l-4 border-orange' : 'text-slate-200 hover:bg-white/5 hover:text-white'} px-4 py-3 rounded-xl transition-all flex items-center gap-3">
                <i class="fa-solid fa-envelope text-sm w-5 text-center ${activePage === 'contact' ? 'text-orange' : 'opacity-70'}"></i>
                <span>Contact</span>
            </a>
        </nav>

        <div class="pt-4 border-t border-white/10 flex flex-col gap-2">
            <a href="https://www.linkedin.com/in/figoazzamdefitrah/" target="_blank" rel="noopener noreferrer" class="w-full bg-orange hover:bg-orange-dark text-white py-3 rounded-xl font-semibold text-xs transition-all shadow-md flex items-center justify-center gap-2">
                <i class="fa-brands fa-linkedin text-sm"></i>
                <span>Connect on LinkedIn</span>
            </a>
        </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// 2. Dynamic Footer Renderer
// --------------------------------------------------------------------------
export function renderFooter() {
  const footerContainer = document.getElementById('site-footer');
  if (!footerContainer) return;

  footerContainer.className = "bg-navy text-white pt-12 pb-8 border-t border-navy-light";
  footerContainer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 class="font-syne text-2xl sm:text-3xl font-bold text-white">Let's Connect & Build Impact Together</h2>
        <p class="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Open for Data Analyst, Junior Analytics Engineer, and Data Operations roles. Feel free to reach out via email or LinkedIn.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a href="mailto:figoazzam.work@gmail.com" class="bg-orange hover:bg-orange-dark text-white px-5 py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center gap-2">
                <i class="fa-solid fa-envelope"></i>
                <span>figoazzam.work@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/figoazzamdefitrah/" target="_blank" rel="noopener noreferrer" class="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl font-semibold text-xs border border-white/20 transition-all flex items-center gap-2">
                <i class="fa-brands fa-linkedin text-orange"></i>
                <span>LinkedIn Profile</span>
            </a>
            <a href="https://github.com/figaz123" target="_blank" rel="noopener noreferrer" class="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl font-semibold text-xs border border-white/20 transition-all flex items-center gap-2">
                <i class="fa-brands fa-github text-orange"></i>
                <span>GitHub (@figaz123)</span>
            </a>
        </div>

        <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
            <p>© 2026 Figo Azzam De Fitrah</p>
            <div class="flex flex-wrap items-center justify-center gap-3">
                <a href="index.html" class="hover:text-orange transition-colors">Home</a>
                <span>·</span>
                <a href="case_studies.html" class="hover:text-orange transition-colors">Case Studies</a>
                <span>·</span>
                <a href="articles.html" class="hover:text-orange transition-colors">Articles</a>
                <span>·</span>
                <a href="impact_records.html" class="hover:text-orange transition-colors">Impact & Track Record</a>
                <span>·</span>
                <a href="contact.html" class="hover:text-orange transition-colors">Contact</a>
            </div>
        </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// 3. Mobile Navigation Interactive Controllers
// --------------------------------------------------------------------------
window.toggleMobileNav = function() {
  const drawer = document.getElementById('mobile-nav-drawer');
  const icon = document.getElementById('mobile-menu-icon');
  const btn = document.getElementById('mobile-menu-toggle-btn');
  if (!drawer) return;

  const isHidden = drawer.classList.contains('hidden');
  if (isHidden) {
    drawer.classList.remove('hidden');
    if (icon) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    }
    if (btn) btn.setAttribute('aria-expanded', 'true');
  } else {
    drawer.classList.add('hidden');
    if (icon) {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }
};

window.closeMobileNav = function() {
  const drawer = document.getElementById('mobile-nav-drawer');
  const icon = document.getElementById('mobile-menu-icon');
  const btn = document.getElementById('mobile-menu-toggle-btn');
  if (drawer && !drawer.classList.contains('hidden')) {
    drawer.classList.add('hidden');
    if (icon) {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }
};

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    window.closeMobileNav();
  }
});

// --------------------------------------------------------------------------
// 4. UI Toast & Clipboard Helpers
// --------------------------------------------------------------------------
export function showToast(message) {
  const toast = document.getElementById('toast-msg');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.innerText = message;
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

export function copyToClipboard(text, successMessage = "Copied to clipboard!") {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast(successMessage);
  } catch (err) {
    console.error("Clipboard copy failed:", err);
  }
  document.body.removeChild(textarea);
}