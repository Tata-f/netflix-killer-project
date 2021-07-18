import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const footerBtnEl = document.querySelector('.footer__btn-js');
const footerBackdropEl = document.querySelector('.footer__backdrop');
const footerBtnClose = document.querySelector('.footer__btn-close')

footerBtnEl.addEventListener('click', onClickOpen);
footerBtnClose.addEventListener('click', onClickClose);

function onClickOpen() {
  window.addEventListener('keydown', onEscKeyDown);
  footerBackdropEl.classList.remove('is-hidden');
  document.body.classList.add('scroll-hidden');

  const swiper = new Swiper('.image-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    pagination: {
      el: '.swiper-pogination',
      clickable: true,
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

    mousewheel: {
      sensitivity: 1,
    },

    effect: 'cube',

    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 29,
      shadowScale: 0.94,
    },

    autoplay: {
      delay: 1000,
      disableOnInteraction: true,
    },

    speed: 800,

    loop: true,
 });
}

function onClickClose() {
  window.removeEventListener('keydown', onEscKeyDown);
  footerBackdropEl.classList.add('is-hidden')
  document.body.classList.remove('scroll-hidden');
}

function onEscKeyDown(e) {
  if (e.code === 'Escape') {
    onClickClose();
  }
}