/**
 * Figo Azzam De Fitrah — Data Analytics Portfolio
 * script.js — Data-driven rendering and interactions
 */

// ==========================================
// DATA CONFIGURATION (EDIT KONTEN DI SINI)
// ==========================================

const experienceData = [
    {
        role: "Production Workforce Development - Data & Knowledge Management",
        company: "PT Rekayasa Cakrawala Resources (Assigned to PT Pupuk Indonesia)",
        date: "Aug, 2024 – Present",
        companyDescription: "An Indonesian workforce solutions company established in 2006, providing professional manpower and training services to engineering and industrial firms, including PT Rekayasa Industri and its subsidiaries.",
        tasks: [
            "Developed and implemented a centralized knowledge management system to replace unstructured Google Docs, significantly reducing Subject Matter Expert (SME) dependency and improving information retrieval efficiency by approximately 20%; optimized documentation workflows by centralizing project artifacts, enabling faster onboarding and continuity for future initiatives.",
            "Assists in managing the Learning Team as Person in Charge (PIC) within the PKKO Team, coordinating learning initiatives across stakeholders and ensuring alignment between workforce capability development in 5 subsidiaries and production performance objectives.",
            "Analyzed operator and maintenance assessment data, streamlining evaluation workflows and improving efficiency in obtaining assessment results by approximately 20%, enabling faster insight generation for workforce capability improvement.",
            "Coordinated thermal data collection and facilitated vendor training sessions on 3D Vista and orthophoto processing, resulting in the successful delivery of actionable thermal reports to subsidiaries for factory surveying."
        ]
    },
    {
        role: "Resident AI Engineer (Part-time)",
        company: "Pukul Enam (Online)",
        date: "Dec, 2023 – Dec, 2024",
        companyDescription: "Indonesian data and AI company founded in 2021 that provides AI solutions, data services, and curated analytics content to enhance data literacy and support business implementation.",
        tasks: [
            "Designed a structured data preprocessing pipeline (37K+ slices) to streamline U-Net model training, automating C-index measurements for kidney tumor sizing and improving overall accessibility for end-users.",
            "Performed comparative loss-function analysis to improve model pipeline training stability under imbalanced segmentation scenarios."
        ]
    },
    {
        role: "Human Activity Recognition Research Group – Research Assistant",
        company: "Telkom University",
        date: "Aug, 2022 – Aug, 2023",
        companyDescription: "A private university in Bandung, Indonesia, with a strong emphasis on engineering and applied research",
        tasks: [
            "Designed preprocessing workflows (FFT, STFT, robust scaling) for a 14,400 × 51 FMCW radar dataset to classify four human activities (walking, crouching, standing, sitting).",
            "Conducted statistical hypothesis testing (t-test, α=0.05) to evaluate the impact of STFT window parameters on Bi-LSTM model performance, directly contributing to a peer-reviewed publication.",
            "Developed an LSTM classification model for a bathroom fall detection system, achieving 97% accuracy for fall and non-fall classes and successfully securing a patent for the system."
        ]
    },
    {
        role: "Machine Learning Cohort",
        company: "Bangkit Academy Batch 2022",
        date: "Feb, 2022 – Jul, 2022",
        companyDescription: "A competitive, industry-led program initiated by Google, GoTo, and Traveloka to develop job-ready tech talent in Indonesia.",
        tasks: [
            "Engineered a comprehensive data preprocessing pipeline—encompassing data cleaning and feature engineering—to supply high-quality, training-ready datasets for a recommendation system capstone project.",
            "Collaborated within the Machine Learning cohort to build and finalize deep learning models using TensorFlow and Keras, successfully completing the end-to-end model development lifecycle."
        ]
    }
];

const educationData = [
    // Feedback 4: RevoU dipindahkan ke Education
    {
        degree: "Data Analytics Bootcamp",
        institution: "RevoU",
        date: "Oct, 2025 - Feb, 2026",
        score: "",
        description: "Intensive program covering business problem framing, statistical analysis, A/B testing, and applied analytics using SQL,Python, and Scikit-learn to generate data-driven insights."
    },
    {
        degree: "Bachelor of Electrical Engineering",
        institution: "Telkom University",
        date: "Aug, 2019 - Aug, 2023",
        score: "GPA: 3.45 / 4.00",
        description: "<strong>Thesis:</strong> \"Machine Learning Based Elderly-Fall Detection Using FMCW Radar\""
    }
];

// Feedback 7: Menambahkan sub-skill
const skillsData = [
    {
        icon: "fa-brands fa-python",
        name: "Python",
        desc: "Exploratory Data Analysis (EDA), Statistical Analysis, Scikit-Learn, TensorFlow, Pandas"
    },
    {
        icon: "fa-solid fa-database",
        name: "SQL",
        desc: "Data Extraction, Aggregation, Window Functions, CTEs, BigQuery"
    },
    {
        icon: "fa-solid fa-table",
        name: "Excel",
        desc: "Pivot Table, Data Cleaning, Data Transformation"
    },
    {
        icon: "fa-solid fa-chart-pie",
        name: "Data Viz",
        desc: "Tableau, Matplotlib, Seaborn, Dashboarding"
    }
];

const softSkillsData = [
    {
        name: "Analytical Thinking",
        icon: "fa-solid fa-brain",
        desc: "Breaking down complex problems into actionable data components."
    },
    {
        name: "Data Storytelling",
        icon: "fa-solid fa-comments",
        desc: "Communicating insights through compelling narratives and clear visuals."
    },
    {
        name: "Problem Solving",
        icon: "fa-solid fa-lightbulb",
        desc: "Identifying bottlenecks and implementing evidence-based solutions."
    }
];

const languagesData = [
    {
        name: "Indonesian",
        level: "Native"
    },
    {
        name: "English",
        level: "Fluent"
    }
];

// Feedback 6: Struktur detail Project
const portfolioData = [
    {
        year: 2026,
        month: "February",
        category: "analytics ml",
        icon: "fa-truck-fast",
        previewText: "Supply Chain Analytics",
        tags: ["[Python]", "[Random Forest]", "[Deep Learning]"],
        title: "NextHub: Optimizing Supply Chain Strategy",
        description: "Analyzed logistics data to address a 54.8% late delivery rate, developing predictive models to recover $2.15M in potential losses.",
        details: {
            "Objective": "Reduce late delivery rates and minimize revenue loss from inefficient shipping modes.",
            "Methodology": "Exploratory Data Analysis, Random Forest classification, and Deep Learning implementation to forecast delays.",
            "Key Findings": "Detected a 54.8% late rate; achieved a 69.1% recall score in forecasting delays within simulated environments.",
            "Recommendations": "Restructured carrier SLAs and halted 'First Class' mode to stabilize service quality and regain $2.15M."
        },
        links: [
            { url: "https://colab.research.google.com/drive/1O0I8bCeEYxkc7ysfu-Pq4Iq_DRvLqxzT?usp=sharing", icon: "fa-solid fa-code", text: "Google Colab", type: "btn-outline" },
            { url: "https://drive.google.com/file/d/1JE6XH81YiLASRdEnzoNTLXp5CZSyibLu/view?usp=sharing", icon: "fa-solid fa-chart-simple", text: "Presentation", type: "btn-solid" }
        ],
        embedUrl: "https://drive.google.com/file/d/1JE6XH81YiLASRdEnzoNTLXp5CZSyibLu/preview?usp=sharing"
    },

    {
        year: 2025,
        month: "December",
        category: "analytics",
        icon: "fa-users-viewfinder",
        previewText: "Customer Segmentation",
        tags: ["[Python]", "[K-Means]", "[RFM Analysis]"],
        title: "RevoBank: Customer Segmentation Analysis",
        description: "Conducted RFM analysis and K-Means clustering on credit card transaction data to identify high-value customer behavior.",
        details: {
            "Objective": "Identify spending behavior and growth opportunities for transaction-based revenue.",
            "Methodology": "Engineered features using RFM (Recency, Frequency, Monetary) and applied K-Means clustering via Scikit-learn.",
            "Key Findings": "Successfully segmented customers into 3 actionable groups based on transaction value and frequency patterns.",
            "Recommendations": "Implement targeted marketing strategies to increase credit card usage across the 3 identified segments."
        },
        links: [
            { url: "https://colab.research.google.com/drive/17EII1dfiRRdfqLaZIDRXCtnUdmZPm_LQ?usp=sharing", icon: "fa-solid fa-code", text: "colab", type: "btn-outline" },
            { url: "https://docs.google.com/presentation/d/16bQsqFRamsZNwRzbryHx8TRkk-p_Vp0xSYKB0HADFsA/edit?usp=sharing", icon: "fa-solid fa-file-lines", text: "powerpoint", type: "btn-solid" }
        ],
        embedUrl: "https://docs.google.com/presentation/d/16bQsqFRamsZNwRzbryHx8TRkk-p_Vp0xSYKB0HADFsA/preview?usp=sharing"
    },
    {
        year: 2023,
        month: "August",
        category: "ml",
        icon: "fa-microchip",
        previewText: "Signal Processing",
        tags: ["[Python]", "[LSTM]", "[Signal Processing]"],
        title: "Radar-based Elderly Fall Detection System",
        description: "Developed a privacy-preserving monitoring system using FMCW radar signals and LSTM models to detect falls with 97% accuracy.",
        details: {
            "Objective": "Detect elderly fall events without camera-based surveillance to preserve user privacy.",
            "Methodology": "Processed FMCW radar signals using FFT/STFT and developed a classification model using LSTM (TensorFlow/Keras).",
            "Key Findings": "Achieved 97% detection accuracy for fall and non-fall classes through classification.",
            "Recommendations": "Deploy radar-based systems in private settings as a non-intrusive alternative to traditional surveillance."
        },
        links: [
            { url: "https://canva.link/swnp1t2d1twkf5e", icon: "fa-solid fa-code", text: "Presentation", type: "btn-outline" },
            { url: "https://drive.google.com/file/d/1UGs0D_newuhYqlSaJP314-LnuzEXgex_/view?usp=sharing", icon: "fa-solid fa-file-lines", text: "Paper", type: "btn-solid" },
            { url: "https://www.dgip.go.id/uploads/berita_resmi/file/f0e5f649d9ca4397d231f93a463a01e3.pdf", icon: "fa-solid fa-file-pdf", text: "Patent", type: "btn-solid" }
        ],
        embedUrl: "https://canva.link/swnp1t2d1twkf5e"
    },
    {
        year: 2026,
        month: "May",
        category: "analytics",
        icon: "fa-chart-line",
        previewText: "Price Elasticity of Demand (PED)",
        tags: ["[Python]", "[SQL]", "[EDA]"],
        title: "PeopleU Pricing Strategy: Evaluating the 2022 Promotion via Price Elasticity of Demand (PED)",
        description: "PeopleU addressed subscription prices exceeding market averages by launching a larger promotional strategy in 2022. This project evaluates whether these aggressive discounts successfully acquired enough new customers to justify lower profit margins. It focuses on analyzing the 2022 pricing performance to determine the most suitable rates for each subscription type and maximize total revenue",
        details: {
            "Objective": "Evaluate the 2022 promotional strategy and calculate Price Elasticity of Demand (PED) across customer segments to optimize pricing for maximum revenue and market share.",
            "Methodology": "Isolated net-new customer data and utilized Python for data cleaning, employee-based segmentation, and Price Elasticity of Demand modeling to quantify price sensitivity",
            "Key Findings": "The 2022 strategy achieved a +60% revenue increase to Rp1,305,615,000, revealing hyper-elasticity particularly in the Enterprise segment with a PED coefficient of -11.23.",
            "Recommendations": "Maintain 2022 promotional pricing levels to prevent a volume collapse, as the high price sensitivity indicates that reverting to 2021 rates would significantly decrease total revenue."
        },
        links: [
            { url: "https://drive.google.com/file/d/1TvH2YOtlbQnk5lbxl0FAKd8vl8G6qcuY/preview", icon: "fa-solid fa-code", text: "Presentation", type: "btn-outline" }
        ],
        embedUrl: "https://drive.google.com/file/d/1TvH2YOtlbQnk5lbxl0FAKd8vl8G6qcuY/preview"
    }
];


// ==========================================
// UTILS & CONSTANTS
// ==========================================

const monthMap = {
    "January": 1, "February": 2, "March": 3, "April": 4, "May": 5, "June": 6,
    "July": 7, "August": 8, "September": 9, "October": 10, "November": 11, "December": 12
};

// ==========================================
// RENDERING FUNCTIONS
// ==========================================

function renderExperience() {
    const container = document.getElementById('experience-container');
    container.innerHTML = experienceData.map(exp => `
        <div class="timeline-item shadow-sm">
            <div class="timeline-header" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
                <h3 class="role" style="margin: 0;">${exp.role}</h3>
                <span class="date mono" style="white-space: nowrap; text-align: right;">${exp.date}</span>
            </div>
            
            <p class="company" style="margin-top: 4px; font-weight: 500;">${exp.company}</p>
            
            ${exp.companyDescription ? `<p class="company-desc text-justify">${exp.companyDescription}</p>` : ''}
            
            <ul class="task-list text-justify">
                ${exp.tasks.map(task => `<li>${task}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function renderEducation() {
    const container = document.getElementById('education-container');
    container.innerHTML = educationData.map(edu => `
        <div class="timeline-item shadow-sm">
            <div class="timeline-header" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
                <h3 class="role" style="margin: 0;">${edu.degree}</h3>
                <span class="date mono" style="white-space: nowrap; text-align: right;">${edu.date}</span>
            </div>
            <p class="company" style="margin-top: 4px; font-weight: 500;">${edu.institution}</p>
            <p class="gpa" style="margin-top: 4px; font-weight: 500;">${edu.score}</p>

            ${edu.description ? `<p class="mt-2 text-justify">${edu.description}</p>` : ''}
        </div>
    `).join('');
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = skillsData.map(skill => `
        <div class="skill-card shadow-sm">
            <i class="${skill.icon} skill-icon"></i>
            <h4 class="skill-name">${skill.name}</h4>
            <p class="skill-desc">${skill.desc}</p>
        </div>
    `).join('');
}



// Fungsi render baru untuk Soft Skills
function renderSoftSkills() {
    const container = document.getElementById('soft-skills-container');
    container.innerHTML = softSkillsData.map(skill => `
        <div class="soft-skill-item">
            <div class="ss-icon-wrap">
                <i class="${skill.icon}"></i>
            </div>
            <div class="ss-text">
                <h4 class="mono">${skill.name}</h4>
                <p>${skill.desc}</p>
            </div>
        </div>
    `).join('');
}

function renderLanguages() {
    const container = document.getElementById('languages-container');
    container.innerHTML = languagesData.map(lang => `
        <div class="language-item">
            <h4 class="mono">${lang.name}</h4>
            <p>${lang.level}</p>
        </div>
    `).join('');
}

function renderPortfolio() {
    const container = document.getElementById('portfolio-container');

    // Default sort: Newest to Oldest (Year then Month)
    portfolioData.sort((a, b) => {
        if (b.year !== a.year) return b.year - a.year;
        return monthMap[b.month] - monthMap[a.month];
    });

    container.innerHTML = portfolioData.map(proj => {

        // 1. Logika untuk Embed vs Icon Placeholder
        const visualContent = proj.embedUrl
            ? `<iframe src="${proj.embedUrl}" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" class="project-iframe"></iframe>`
            : `<div class="project-embed-placeholder">
                    <i class="fa-solid ${proj.icon}"></i>
                    <span class="mono">${proj.previewText}</span>
               </div>`;

        // 2. Logika Details
        let detailsHtml = '';
        if (proj.details) {
            detailsHtml = `<ul class="project-details text-justify">`;
            for (const [key, value] of Object.entries(proj.details)) {
                detailsHtml += `<li><strong>${key}:</strong> ${value}</li>`;
            }
            detailsHtml += `</ul>`;
        }

        // 3. Logika Links (Tambahkan target="_blank" dan rel="noopener noreferrer")
        const linksHtml = proj.links.map(link =>
            `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="${link.type}">
                <i class="${link.icon}"></i> ${link.text}
            </a>`
        ).join('');

        return `
        <article class="project-card shadow-sm" data-category="${proj.category}" data-year="${proj.year}" data-month="${proj.month}">
            <div class="project-visual">
                ${visualContent}
            </div>
            <div class="project-content">
                <div class="project-tags mono">
                    <span style="color: var(--accent-color); border-color: var(--accent-color);">${proj.month} ${proj.year}</span>
                    ${proj.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <h3 class="project-title">${proj.title}</h3>
                <p class="project-desc text-justify">${proj.description}</p>
                ${detailsHtml}
                <div class="project-links mt-2">
                    ${linksHtml}
                </div>
            </div>
        </article>
        `;
    }).join('');
}
// ==========================================
// INITIALIZATION & INTERACTIONS
// ==========================================


function renderFilters() {
    const yearSelect = document.getElementById('year-select');
    const monthSelect = document.getElementById('month-select');

    // Extract unique years and months from portfolioData
    const years = [...new Set(portfolioData.map(p => p.year))].sort((a, b) => b - a);
    const months = [...new Set(portfolioData.map(p => p.month))].sort((a, b) => monthMap[a] - monthMap[b]);

    // Populate Year Select
    yearSelect.innerHTML = '<option value="all">All Years</option>' +
        years.map(year => `<option value="${year}">${year}</option>`).join('');

    // Populate Month Select
    monthSelect.innerHTML = '<option value="all">All Months</option>' +
        months.map(month => `<option value="${month}">${month}</option>`).join('');
}

function handlePortfolioFiltering() {
    const categorySelect = document.getElementById('category-select');
    const yearSelect = document.getElementById('year-select');
    const monthSelect = document.getElementById('month-select');
    const portfolioCards = document.querySelectorAll('.project-card');

    function filterCards() {
        const activeCategory = categorySelect.value;
        const activeYear = yearSelect.value;
        const activeMonth = monthSelect.value;

        portfolioCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const year = card.getAttribute('data-year');
            const month = card.getAttribute('data-month');

            const categoryMatch = activeCategory === 'all' || (category && category.includes(activeCategory));
            const yearMatch = activeYear === 'all' || year === activeYear;
            const monthMatch = activeMonth === 'all' || month === activeMonth;

            if (categoryMatch && yearMatch && monthMatch) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.4s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    }

    categorySelect.addEventListener('change', filterCards);
    yearSelect.addEventListener('change', filterCards);
    monthSelect.addEventListener('change', filterCards);
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Jalankan semua fungsi render terlebih dahulu
    renderExperience();
    renderEducation();
    renderSkills();
    renderPortfolio(); // Pastikan kartu portfolio sudah ada di DOM
    renderFilters();
    renderSoftSkills();
    renderLanguages();

    // 2. Inisialisasi Filter
    handlePortfolioFiltering();

    // 3. Logika Sort By Date
    const sortYearBtn = document.getElementById('sort-year-btn');
    if (sortYearBtn) {
        sortYearBtn.addEventListener('click', () => {
            const currentOrder = sortYearBtn.getAttribute('data-order');
            const newOrder = currentOrder === 'desc' ? 'asc' : 'desc';
            sortYearBtn.setAttribute('data-order', newOrder);

            // Update icon
            if (newOrder === 'desc') {
                sortYearBtn.innerHTML = '<i class="fa-solid fa-arrow-down-9-1"></i> Year';
            } else {
                sortYearBtn.innerHTML = '<i class="fa-solid fa-arrow-up-1-9"></i> Year';
            }

            const portfolioContainer = document.getElementById('portfolio-container');
            const cards = Array.from(portfolioContainer.querySelectorAll('.project-card'));

            cards.sort((a, b) => {
                const yearA = parseInt(a.getAttribute('data-year')) || 0;
                const yearB = parseInt(b.getAttribute('data-year')) || 0;
                const monthA = monthMap[a.getAttribute('data-month')] || 0;
                const monthB = monthMap[b.getAttribute('data-month')] || 0;

                if (newOrder === 'asc') {
                    if (yearA !== yearB) return yearA - yearB;
                    return monthA - monthB;
                } else {
                    if (yearB !== yearA) return yearB - yearA;
                    return monthB - monthA;
                }
            });

            cards.forEach(card => portfolioContainer.appendChild(card));
        });
    }

    // 4. Logika Tab Navigation (Tetap dipertahankan)
    const tabBtns = document.querySelectorAll('.tab-btn[data-target]');
    const panels = document.querySelectorAll('.content-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');

            tabBtns.forEach(t => t.classList.remove('active'));
            btn.classList.add('active');

            panels.forEach(panel => {
                panel.style.display = panel.id === targetId ? 'block' : 'none';
            });
        });
    });
});