import translations from './translate.js';

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('languageModal');
  const savedLang = localStorage.getItem('lang');

  if (!savedLang) {
    modal?.style.setProperty('display', 'flex');
  } else {
    setLanguage(savedLang);
    modal?.style.setProperty('display', 'none');
  }

  document.querySelectorAll('[data-lang]').forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
      if (lang) {
        localStorage.setItem('lang', lang);
        setLanguage(lang);

        modal?.style.setProperty('display', 'none');
      }
    });
  });
});

function setLanguage(lang) {
  if (typeof i18next !== 'undefined') {
    i18next.changeLanguage(lang);
  }

  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach(el => {
    const key = el.dataset.i18n;

    if (translations[lang] && translations[lang][key]) {
      el.classList.add('fading-out');
      setTimeout(() => {
        el.innerHTML = translations[lang][key];
        el.classList.remove('fading-out');
      }, 300);
    }
  });
}
