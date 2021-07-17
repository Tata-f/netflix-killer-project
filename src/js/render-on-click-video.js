import movieVideoTpl from '../templates/movie-video-card.hbs';
import FilmApiService from './class-api-service';
import getRefs from './get-refs';
import {onEscKeyDown} from './modal-open';

const refs = getRefs();
const filmApiService = new FilmApiService();
const openModalEl = document.querySelector('.js-lightbox');
const windowModal = document.querySelector('.lightbox__content');
const overlayEl = document.querySelector('.lightbox__overlay');
const closeModalBtnEl = document.querySelector('[data-action = "close-lightbox"]');

// для получения id фильма
window.addEventListener('click', onOpenModalVideo)
refs.moviesContainer.addEventListener('click', fetchVideoMovieID);
overlayEl.addEventListener('click', onOverlayCloseModalClick);
closeModalBtnEl.addEventListener('click', onCloseModalClick);

let lengthArr = 0;
let firstVideo = '';
let newMovie = '';

// функция вызывает фетч с фильмом по id

async function fetchVideoMovieID(event) {
  try {
    if (event.target.className !== 'card-image-js') return;
    newMovie = event.target.dataset.id
    
    filmApiService.movie = newMovie;
    const movies = await filmApiService.fetchVideoMovie();
    const { results } = movies;
    lengthArr = results.length;
    firstVideo = results[0];

    renderOpenedVideo(firstVideo);
    const btnWatchTeaser = document.querySelector('.btn-teaser-js');
    if (lengthArr === 0) {
    console.log(lengthArr === 0)
      btnWatchTeaser.classList.add('is-hidden')
  } 
      
  } catch {
     
    }
}


//рендер карточки с видео
function renderOpenedVideo(firstVideo) {
  const elements = movieVideoTpl(firstVideo);
  windowModal.innerHTML = elements;
}
//открытие модалки на клик
function onOpenModalVideo(event) {
  let watchBtn = event.target.className
  
  if (watchBtn === 'modal-button teaser-button btn-teaser-js') {
    
    openModalEl.classList.add('is-open')

    window.removeEventListener('keydown', onEscKeyDown);
    window.addEventListener('keydown', onEscCloseModalClick);
    renderOpenedVideo(firstVideo)
  }
}
//закрытие модалки
function onCloseModalClick() {
  openModalEl.classList.remove('is-open')
  windowModal.innerHTML = '';
}
//закрытие модалки на ESC
function onEscCloseModalClick(event) {
    if (event.code === 'Escape') {
        onCloseModalClick();
        window.addEventListener('keydown', onEscKeyDown);
    }  
}
//закрытие модалки на оверлей.
function onOverlayCloseModalClick () {
    onCloseModalClick();
}