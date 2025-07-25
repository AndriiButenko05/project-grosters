import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.toget-item');
  const section = document.querySelector('.toget-section');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          items.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'none';

            setTimeout(() => {
              item.style.transition = 'opacity 1s ease, transform 1s ease';
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, index * 700);
          });
        }
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(section);
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
let mybutton = document.getElementById('myBtn');
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const buttons = document.querySelectorAll('.accordion-button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    document.querySelectorAll('.accordion-content').forEach(el => {
      if (el !== content) el.style.maxHeight = null;
    });
    content.style.maxHeight = content.style.maxHeight
      ? null
      : content.scrollHeight + 'px';
  });
});
const swiperFeedback = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Keyboard],
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
    disabledClass: 'disabled',
  },
  pagination: {
    el: '.pagination-for-swiper',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
mybutton.addEventListener('click', topFunction);
