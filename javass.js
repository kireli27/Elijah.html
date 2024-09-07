function switchTheme() {
    const themeLink = document.getElementById('theme');
    const isDarkMode = themeLink.getAttribute('href') === 'dark.css';

    if (isDarkMode) {
        themeLink.setAttribute('href', 'light.css');
    } else {
        themeLink.setAttribute('href', 'dark.css');
    }
}