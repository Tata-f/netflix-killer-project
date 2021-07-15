import movieVideoTpl from '../templates/movie-video-card.hbs';
import FilmApiService from './class-api-service';
import getRefs from './get-refs';

const refs = getRefs();
const filmApiService = new FilmApiService();
const openModalEl = document.querySelector('.js-lightbox');
const windowModal = document.querySelector('.lightbox__content');
// const modalContaier = document.querySelector('.modal-container')
const btnWatchTeaser = document.querySelector('.btn-teaser-js');
const overlayEl = document.querySelector('.lightbox__overlay');
const closeModalBtnEl = document.querySelector('[data-action = "close-lightbox"]');

// для получения id фильма
window.addEventListener('click', onOpenModalVideo)
refs.moviesContainer.addEventListener('click', fetchVideoMovieID);
overlayEl.addEventListener('click', onOverlayCloseModalClick);
closeModalBtnEl.addEventListener('click', onCloseModalClick);

let lengthArr = 0;
let firstVideo ='';
// функция вызывает фетч с фильмом по id


async function fetchVideoMovieID(event) {
  
  let newMovie = '';
  
  try {
    if (event.target.className !== 'card-image-js') return;
    newMovie = event.target.dataset.id
    // console.log(newMovie)
    filmApiService.movie = newMovie;
    const movies = await filmApiService.fetchVideoMovie();
    const { results } = movies;
    lengthArr = results.length;
    firstVideo = results[0];
    // console.log(firstVideo)
    console.log(lengthArr)
    renderOpenedVideo(firstVideo); 
    if (lengthArr === 0) {
    console.log(lengthArr === 0)
      btnWatchTeaser.classList.add('is-hidden')
    // onRenderBtnWatchTeaser(lengthArr);
  } 
      
  } catch {
     
    }
}

fetchVideoMovieID()

//функция рендера кнопки, не работает
// function onRenderBtnWatchTeaser(lengthArr) {
//   console.log(lengthAr)
//   if (lengthArr === 0) {
//     console.log(lengthArr > 0)
//       btnWatchTeaser.classList.add('is-hidden')
//   } 
// }

//рендер карточки с видео
function renderOpenedVideo(firstVideo) {
  const elements = movieVideoTpl(firstVideo);
  windowModal.innerHTML = elements;
  // console.log(elements)
  // console.log(firstVideo)
}
//открытие модалки на клик
function onOpenModalVideo(event) {
  let watchBtn = event.target.className
  window.addEventListener('keydown', onEscCloseModalClick);
  if (watchBtn.includes('btn-teaser-js')) {
    // console.log(watchBtn.includes('btn-teaser-js'))
    openModalEl.classList.add('is-open')
    
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
    }  
}
//закрытие модалки на оверлей.
function onOverlayCloseModalClick () {
    onCloseModalClick();
}