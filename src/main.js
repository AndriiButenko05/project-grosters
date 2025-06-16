  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#bulgaria-slider', {
      type: 'loop',
      autoplay: true,
      interval: 5000,
      pauseOnHover: true,
      pagination: true,
      arrows: true,
      speed: 800,
    }).mount()
  });

  const buttons = document.querySelectorAll('.accordion-button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;

      // Закриваємо всі інші
      document.querySelectorAll('.accordion-content').forEach(el => {
        if (el !== content) el.style.maxHeight = null;
      });

      // Перемикаємо поточну
      content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
    });
  });