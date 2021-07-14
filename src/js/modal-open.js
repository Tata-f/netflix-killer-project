const refs = {
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
}

refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

export default function onOpenModal() {
  window.addEventListener('keydown', onEscKeyDown);
  document.body.classList.add('show-modal');
  document.body.classList.add('scroll-hidden');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyDown);
  document.body.classList.remove('show-modal');
  document.body.classList.remove('scroll-hidden');
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onEscKeyDown(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}