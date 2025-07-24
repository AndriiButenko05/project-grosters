import translations from "./translate.js";

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('languageModal');
  const savedLang = localStorage.getItem('lang');

  // Показать модалку только если язык не выбран
  if (!savedLang) {
    modal?.style.setProperty('display', 'flex');
  } else {
    setLanguage(savedLang);
    modal?.style.setProperty('display', 'none');
  }

  // Универсальный обработчик для всех кнопок с data-lang
  document.querySelectorAll('[data-lang]').forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
      if (lang) {
        localStorage.setItem('lang', lang);
        setLanguage(lang);

        // Закрыть модалку, если нажали внутри неё
        modal?.style.setProperty('display', 'none');
      }
    });
  });
});

// 🔁 Устанавливает переводы по ключам из data-i18n
function setLanguage(lang) {
  if (typeof i18next !== 'undefined') {
    i18next.changeLanguage(lang);
  }

  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach(el => {
    const key = el.dataset.i18n;

    if (translations[lang] && translations[lang][key]) {
      // Додати клас зникнення
      el.classList.add('fading-out');

      // Через 300мс змінити текст і прибрати клас
      setTimeout(() => {
        el.innerHTML = translations[lang][key];
        el.classList.remove('fading-out');
      }, 300);
    }
  });
}