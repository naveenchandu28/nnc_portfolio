














document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // --- Mobile Navigation Toggle ---
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Toggle between hamburger and close icon
        navToggle.querySelector('i').classList.toggle('fa-bars');
        navToggle.querySelector('i').classList.toggle('fa-times');
    });

    // Close the nav menu when a link is clicked (for single-page navigation)
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.querySelector('i').classList.remove('fa-times');
                navToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // --- Light/Dark Mode Toggle ---
    // Check for saved theme preference or default to light
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.querySelector('i').classList.remove('fa-moon');
        themeToggle.querySelector('i').classList.add('fa-sun');
    } else {
        body.setAttribute('data-theme', 'light');
        themeToggle.querySelector('i').classList.remove('fa-sun');
        themeToggle.querySelector('i').classList.add('fa-moon');
    }

    themeToggle.addEventListener('click', () => {
        let theme = body.getAttribute('data-theme');
        if (theme === 'light') {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.querySelector('i').classList.remove('fa-moon');
            themeToggle.querySelector('i').classList.add('fa-sun');
        } else {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.querySelector('i').classList.remove('fa-sun');
            themeToggle.querySelector('i').classList.add('fa-moon');
        }
    });
});