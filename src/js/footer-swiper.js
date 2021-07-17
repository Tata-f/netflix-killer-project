import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const footerBtnEl = document.querySelector('.footer__btn-js');
const footerBackdropEl = document.querySelector('.footer__backdrop');
const footerBtnClose = document.querySelector('.footer__btn-close')

footerBtnEl.addEventListener('click', onClick);

footerBtnClose.addEventListener('click', () => 
  footerBackdropEl.classList.add('is-hidden')
);

function onClick() {
  footerBackdropEl.classList.remove('is-hidden');

  const swiper = new Swiper('.image-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  pagination: {
    el: '.swiper-pogination',
    clickable: true,
  }
 });
}