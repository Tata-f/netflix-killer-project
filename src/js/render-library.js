const renderLibraryEl = document.querySelector('.render-library-js');
const renderWatchedEl = document.querySelector('.render-watched-js');
const renderQueueEl = document.querySelector('.render-queue-js');
const renderContainer = document.querySelector('.gallery-section > .container');
import movieCardTpl from '../templates/movie-card.hbs';
import FilmApiService from './class-api-service';

renderLibraryEl.addEventListener('click', onClickLibrary);
// renderWatchedEl.addEventListener('click', onClickWatched);
// renderQueueEl.addEventListener('click', onClickQueue);
const filmApiService = new FilmApiService();

async function  onClickLibrary() {
  renderWatchedEl.classList.add('active');
  renderQueueEl.classList.remove('active');

  const filmsStr = localStorage.getItem('watchedFilm');
  const filmsArr = JSON.parse(filmsStr);
  const genresList = await filmApiService.fetchGenres()
  const { genres } = genresList;
  
  const moviesWithYearAndGenre = getUpdatedMovieInfo(filmsArr, genres);


  createCardMarkup(moviesWithYearAndGenre);
}

// function onClickWatched() {
//   renderWatchedEl.classList.add('active');
//   renderQueueEl.classList.remove('active');
//   renderContainer.innerHTML = '';
//   const filmsStr = localStorage.getItem('watchedFilm');
//   const filmsArr = JSON.parse(filmsStr);
//   // renderDefaultMovies(filmsStr);
//   renderContainer.insertAdjacentHTML('beforeend', movieCardTpl(filmsArr));
// }

// function onClickQueue() {
//   renderWatchedEl.classList.remove('active');
//   renderQueueEl.classList.add('active');
//   renderContainer.innerHTML = '';
//   const filmsStr = localStorage.getItem('queueFilm');
//   const filmsArr = JSON.parse(filmsStr);
//   // renderDefaultMovies(filmsStr);

//   renderContainer.insertAdjacentHTML('beforeend', movieCardTpl(filmsArr));
// }

function getUpdatedMovieInfo(movies, info) {
  return movies.map(movie => ({
    ...movie,
    genres: info
      .filter(genre => movie.genre_ids.includes(genre.id))
      .map(({ name }) => name)
      .join(', '),
    releaseYear: movie.release_date ? movie.release_date.slice(0, 4) : 'n/a',
  }));
}

function createCardMarkup(results) {
  renderContainer.innerHTML='';
  const elements = movieCardTpl(results);
  renderContainer.innerHTML = elements;
}