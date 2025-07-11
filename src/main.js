import translations from "./js/translate.js";
// HEADER
const burgerBtn = document.querySelector(".burger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".mobile-menu-icon-close");
const navList = document.querySelector(".mobile-menu-navigation-list")
burgerBtn.addEventListener("click", () => {
  document.body.classList.add('no-scroll');
  mobileMenu.classList.add("is-open")
})
closeBtn.addEventListener("click", () => {
  document.body.classList.remove('no-scroll');
  mobileMenu.classList.remove("is-open")
})
navList.addEventListener("click", (event) => {
  if (event.target.classList.contains("mobile-menu-navigation-list-link")) {
      document.body.classList.remove('no-scroll');
    mobileMenu.classList.remove("is-open")
  }
  return;
})

// PLUSES
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#bulgaria-slider', {
      type: 'loop',
      autoplay: true,
      interval: 50000,
      pauseOnHover: true,
      pagination: true,
      arrows: true,
      speed: 800,
    }).mount()
  });

  // QUESTIONS
  const buttons = document.querySelectorAll('.accordion-button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      document.querySelectorAll('.accordion-content').forEach(el => {
        if (el !== content) el.style.maxHeight = null;
      });
      content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
    });
  });

  // ROOT
  document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".advantages-item");
    const section = document.querySelector(".root-section");
  
    // ANIMATION
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            items.forEach((item, index) => {
              item.style.opacity = "0";
              item.style.transform = "translateY(20px)";
              item.style.transition = "none";
  
              setTimeout(() => {
                item.style.transition = "opacity 1s ease, transform 1s ease";
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
              }, index * 700); 
            });
          }
        });
      },
      { threshold: 0.3 } 
    );
    observer.observe(section);
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  
// BUTTON
let mybutton = document.getElementById("myBtn");
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}
mybutton.addEventListener("click", topFunction)

// TRANSLATE
function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]'); 
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const newText = translations[lang][key];
    if (newText && el.innerHTML !== newText) {
      el.style.transition = 'opacity 0.3s ease';
      el.style.opacity = 0;
      setTimeout(() => {
        el.innerHTML = newText;
        el.style.opacity = 1;
      }, 300);
    }
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    setLanguage(lang);
    localStorage.setItem('language', lang);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || 'ua';
  setLanguage(savedLang);
});
