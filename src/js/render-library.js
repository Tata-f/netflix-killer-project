const renderLibraryEl = document.querySelector('.render-library-js');
const renderWatchedEl = document.querySelector('.render-watched-js');
const renderQueueEl = document.querySelector('.render-queue-js');
const renderContainer = document.querySelector('.gallery-section > .container');

import movieCardTpl from '../templates/movie-card.hbs';
import { onRenderPagination, onClickPagination } from './pagination';

renderLibraryEl.addEventListener('click', onClickLibrary);
renderWatchedEl.addEventListener('click', onClickWatched);
renderQueueEl.addEventListener('click', onClickQueue);

 function onClickLibrary() {
   let total_pages = 0;
   let pageNumber = 1;
   renderWatchedEl.classList.add('active');
   renderQueueEl.classList.remove('active');
   renderContainer.innerHTML = '';
   
   const filmsStr = localStorage.getItem('watchedFilm');
   const filmsArr = JSON.parse(filmsStr);
   total_pages = Math.ceil(filmsArr.length/9);
   const moviesWithYearAndGenre = getUpdatedLibraryMovieInfo(filmsArr);

   createCardMarkup(moviesWithYearAndGenre);
   onRenderPagination(total_pages, pageNumber)
}

function onClickWatched() {
  renderWatchedEl.classList.add('active');
  renderQueueEl.classList.remove('active');
  renderContainer.innerHTML = '';

  const filmsStr = localStorage.getItem('watchedFilm');
  const filmsArr = JSON.parse(filmsStr);
  const moviesWithYearAndGenre = getUpdatedLibraryMovieInfo(filmsArr);

  createCardMarkup(moviesWithYearAndGenre);
}
 function onClickQueue() {
  renderWatchedEl.classList.remove('active');
  renderQueueEl.classList.add('active');
  renderContainer.innerHTML = '';

  const filmsStr = localStorage.getItem('queueFilm');
  const filmsArr = JSON.parse(filmsStr);
  const moviesWithYearAndGenre = getUpdatedLibraryMovieInfo(filmsArr);

  createCardMarkup(moviesWithYearAndGenre);
}

function getUpdatedLibraryMovieInfo(movies) {
  return movies.map(movie => ({
    ...movie,
    genres: movie.genres.map(({ name }) => name).join(', '),
    releaseYear: movie.release_date ? movie.release_date.slice(0, 4) : 'n/a',
    voteAverage: movie.vote_average.toFixed(1),
  }));
}

function createCardMarkup(results) {
  renderContainer.innerHTML = '';
  const elements = movieCardTpl(results);
  renderContainer.innerHTML = elements;
  const voteAverageRef = document.querySelectorAll('.vote-average');
  voteAverageRef.forEach(el => el.classList.add('is-visible'));
}

export { onClickWatched, onClickQueue, onClickLibrary }