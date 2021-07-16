export default function getRefs() {
  return {
    moviesContainer: document.querySelector('.gallery-section > .container'),
    searchForm: document.querySelector('.js-search-form'),
    modal: document.querySelector('.js-modal'),
    topArrowBtn: document.querySelector('.top-arrow'),
    paginationEl: document.querySelector('.pagination-list'),
    movieID: document.querySelector('.modal-img-js'),
    toggleRenderPopular: document.querySelector('.toggle-reander'),
    headerMyLibrary: document.querySelector('.header-my-library '),
 renderQueueEl : document.querySelector('.render-queue-js'),
    renderWatchedEl: document.querySelector('.render-watched-js'),
 inputTogglePopular: document.querySelector('#e')
  };
}

