document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;
    const darkModeActive = localStorage.getItem('darkMode') === 'enabled';

    if (darkModeActive) {
        body.classList.add('dark-mode');
        themeIcon.src = 'images/simbulo-lua.png';
        themeIcon.alt = 'Modo Escuro';
    }

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        themeIcon.src = isDarkMode ? 'images/simbulo-lua.png' : 'images/simbulo-sol.png';
        themeIcon.alt = isDarkMode ? 'Modo Escuro' : 'Modo Claro';
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    });
});