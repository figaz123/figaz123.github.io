document.addEventListener('DOMContentLoaded', () => {
    // Select the tab buttons
    const expTabBtn = document.getElementById('tab-exp');
    const portTabBtn = document.getElementById('tab-port');

    // Select the content sections
    const expSection = document.getElementById('experience-section');
    const portSection = document.getElementById('portfolio-section');

    // Event listener for Portfolio Tab
    portTabBtn.addEventListener('click', () => {
        // Update active class on buttons
        portTabBtn.classList.add('active');
        expTabBtn.classList.remove('active');

        // Swap visibility
        expSection.style.display = 'none';
        portSection.style.display = 'block';
    });

    // Event listener for Experience Tab
    expTabBtn.addEventListener('click', () => {
        // Update active class on buttons
        expTabBtn.classList.add('active');
        portTabBtn.classList.remove('active');

        // Swap visibility
        portSection.style.display = 'none';
        expSection.style.display = 'block';
    });
});