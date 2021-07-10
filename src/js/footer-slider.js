const footerBtnEl = document.querySelector('.footer__btn-js');
const footerBackdropEl = document.querySelector('.footer__backdrop');
const footerBtnClose = document.querySelector('.footer__btn-close')


footerBtnEl.addEventListener('click', () => 
  footerBackdropEl.classList.remove('is-hidden')
);

footerBtnClose.addEventListener('click', () => 
  footerBackdropEl.classList.add('is-hidden')
);

