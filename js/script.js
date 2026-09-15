const langBtn = document.getElementById('lang-btn');
const mainImage = document.getElementById('main-image');

// fetching user's language preference from the browser
const userLang = navigator.language || navigator.userLanguage;
const shortLang = userLang.substring(0, 2).toLowerCase();

// default
let currentLang = 'en';

// applying the language based on the user's preference
function setLanguage(lang) {
    if (lang === 'fr') {
        mainImage.src = 'images/bientot_portrait.png';
        langBtn.textContent = 'EN';
        currentLang = 'fr';
    } else {
        mainImage.src = 'images/soon_portrait.png';
        langBtn.textContent = 'FR';
        currentLang = 'en';
    }
}

if (shortLang === 'fr') {
    setLanguage('fr');
} else {
    setLanguage('en'); // Default
}

langBtn.addEventListener('click', () => {
    if (currentLang === 'en') {
        setLanguage('fr');
    } else {
        setLanguage('en');
    }
});