document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    let currentTheme = savedTheme || 'light'; 

    function setTheme(theme) {
        body.classList.remove('light-mode', 'dark-mode', 'eclipse-mode');
        body.classList.add(`${theme}-mode`);
        localStorage.setItem('theme', theme);

        if (theme === 'dark') {
            themeIcon.src = 'images/simbulo-lua.png';
            themeIcon.alt = 'Modo Escuro';
        } else if (theme === 'eclipse') {
            themeIcon.src = 'images/simbulo-eclipse.png';
            themeIcon.alt = 'Modo Eclipse';
        } else {
            themeIcon.src = 'images/simbulo-sol.png';
            themeIcon.alt = 'Modo Claro';
        }
        currentTheme = theme;
    }

    setTheme(currentTheme); 

    darkModeToggle.addEventListener('click', function() {
        if (currentTheme === 'light') {
            setTheme('dark');
        } else if (currentTheme === 'dark') {
            setTheme('eclipse');
        } else {
            setTheme('light');
        }
    });
});