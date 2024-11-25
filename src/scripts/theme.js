const themeButton = document.getElementById('theme-button');
let darkMode = false;

export function applySavedTheme() {
    const savedTheme = JSON.parse(localStorage.getItem('@openMusic:theme'));
    if (savedTheme !== null) {
        darkMode = savedTheme;
    } else {
        const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        darkMode = systemDarkMode;
    }

    themeButton.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('dark-mode', darkMode);

    document.querySelectorAll('header, h1, .price-setter,.genre-title, .genre-button, li, .price-title, .albums-title, .albums-list, h3, .singer, .music-gender, .price').forEach(element => {
        element.classList.toggle('dark-mode', darkMode);
    });

}

export function activeThemeButton() {
    applySavedTheme();
    themeButton.addEventListener('click', () => {
        darkMode = !darkMode;
        localStorage.setItem('@openMusic:theme', JSON.stringify(darkMode));
        applySavedTheme();
    });
}



