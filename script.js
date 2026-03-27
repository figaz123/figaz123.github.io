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
        description: "Intensive 13-week program covering end-to-end data analytics including SQL, Python, Data Visualization, and Statistics."
    },
    {
        degree: "Bachelor of Electrical Engineering",
        institution: "Telkom University",
        date: "GPA: 3.45 / 4.00",
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
            { url: "#", icon: "fa-solid fa-code", text: "Google Colab", type: "btn-outline" },
            { url: "https://drive.google.com/file/d/1JE6XH81YiLASRdEnzoNTLXp5CZSyibLu/view?usp=sharing", icon: "fa-solid fa-chart-simple", text: "Presentation", type: "btn-solid" }
        ],
        // embedUrl: "https://drive.google.com/file/d/1JE6XH81YiLASRdEnzoNTLXp5CZSyibLu/preview?usp=sharing" // Contoh embed Google Drive
        embedUrl: "https://drive.google.com/file/d/1JE6XH81YiLASRdEnzoNTLXp5CZSyibLu/preview?usp=sharing"
    },
    {
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
            { url: "#", icon: "fa-solid fa-code", text: "GitHub", type: "btn-outline" },
            { url: "#", icon: "fa-solid fa-file-lines", text: "Tableau", type: "btn-solid" }
        ]
    },
    {
        category: "ml",
        icon: "fa-microchip",
        previewText: "Signal Processing",
        tags: ["[Python]", "[LSTM]", "[Signal Processing]"],
        title: "Radar-based Elderly Fall Detection System",
        description: "Developed a privacy-preserving monitoring system using FMCW radar signals and LSTM models to detect falls with 97% accuracy.",
        details: {
            "Objective": "Detect elderly fall events without camera-based surveillance to preserve user privacy.",
            "Methodology": "Processed FMCW radar signals using FFT/STFT and developed a classification model using LSTM (TensorFlow/Keras).",
            "Key Findings": "Achieved 97% detection accuracy for fall and non-fall classes through time-series modeling.",
            "Recommendations": "Deploy radar-based systems in healthcare facilities as a non-intrusive alternative to traditional surveillance."
        },
        links: [
            { url: "#", icon: "fa-solid fa-code", text: "Code", type: "btn-outline" },
            { url: "#", icon: "fa-solid fa-file-pdf", text: "Publication", type: "btn-solid" }
        ]
    }
];


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
        <article class="project-card shadow-sm" data-category="${proj.category}">
            <div class="project-visual">
                ${visualContent}
            </div>
            <div class="project-content">
                <div class="project-tags mono">${proj.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
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

// document.addEventListener('DOMContentLoaded', () => {

//     // Render content
//     renderExperience();
//     renderEducation();
//     renderSkills();
//     renderSoftSkills();
//     renderPortfolio();
//     renderLanguages();



//     // Tab Navigation
//     const tabBtns = document.querySelectorAll('.tab-btn[data-target]');
//     const panels = document.querySelectorAll('.content-panel');

//     function activateTab(btn) {
//         tabBtns.forEach(t => {
//             t.classList.remove('active');
//             t.setAttribute('aria-selected', 'false');
//         });
//         btn.classList.add('active');
//         btn.setAttribute('aria-selected', 'true');

//         const targetId = btn.getAttribute('data-target');
//         panels.forEach(panel => {
//             const isTarget = panel.id === targetId;
//             panel.style.display = isTarget ? 'block' : 'none';
//             if (isTarget) {
//                 panel.style.animation = 'none';
//                 panel.offsetHeight; // force reflow
//                 panel.style.animation = '';
//             }
//         });
//     }

//     tabBtns.forEach(btn => {
//         btn.addEventListener('click', () => activateTab(btn));
//     });

//     // Portfolio Filtering
//     const filterBtns = document.querySelectorAll('.filter-btn');
//     // Ambil ulang DOM elements karena baru dirender oleh JS
//     const portfolioCards = document.querySelectorAll('.project-card');

//     filterBtns.forEach(btn => {
//         btn.addEventListener('click', () => {
//             filterBtns.forEach(f => f.classList.remove('active'));
//             btn.classList.add('active');

//             const filterValue = btn.getAttribute('data-filter');

//             portfolioCards.forEach(card => {
//                 if (filterValue === 'all') {
//                     card.style.display = 'block';
//                 } else {
//                     const category = card.getAttribute('data-category');
//                     if (category && category.includes(filterValue)) {
//                         card.style.display = 'block';
//                     } else {
//                         card.style.display = 'none';
//                     }
//                 }
//             });
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', () => {

    // Render semua konten terlebih dahulu
    if (typeof renderExperience === "function") renderExperience();
    if (typeof renderEducation === "function") renderEducation();
    if (typeof renderSkills === "function") renderSkills();
    if (typeof renderPortfolio === "function") renderPortfolio();
    if (typeof renderSoftSkills === "function") renderSoftSkills();
    if (typeof renderLanguages === "function") renderLanguages();

    // Pastikan selektor menggunakan CLASS, bukan ID yang tidak ada
    const tabBtns = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.content-panel');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-target');

                // Update button active state
                tabBtns.forEach(t => t.classList.remove('active'));
                btn.classList.add('active');

                // Switch panels
                panels.forEach(panel => {
                    if (panel.id === targetId) {
                        panel.style.display = 'block';
                    } else {
                        panel.style.display = 'none';
                    }
                });
            });
        });
    }
});