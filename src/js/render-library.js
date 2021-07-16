import movieCardTpl from '../templates/movie-card.hbs';
import { filmApiService } from './render-movies-grid';
import { onRenderPagination, onClickPagination } from './pagination';
import FilmLibrary from './class-library';
export const filmLibrary = new FilmLibrary();






const renderLibraryEl = document.querySelector('.render-library-js');
const renderWatchedEl = document.querySelector('.render-watched-js');
const renderQueueEl = document.querySelector('.render-queue-js');
const renderContainer = document.querySelector('.gallery-section > .container');


// renderLibraryEl.addEventListener('click', onClickLibrary);
renderWatchedEl.addEventListener('click', onClickWatched);
renderQueueEl.addEventListener('click', onClickQueue);
let libraryPage;
async function onClickLibrary() {
  libraryPage = filmLibrary.pageLibrary;
  // console.log('Это значение из рендера LEO', libraryPage);
  let total_pages = 0;
  // renderWatchedEl.classList.add('active');
  // renderQueueEl.classList.remove('active');
  // renderContainer.innerHTML = '';
  let width = document.body.clientWidth;
  console.log('onClickLibrary ~ width', width);

  if (width > 1023) {
    try {
      filmApiService.query = '';
      const filmsStr = await localStorage.getItem('watchedFilm');
      const filmsArr = await JSON.parse(filmsStr);
      const pageArr = [];
      total_pages = await Math.ceil(filmsArr.length / 9);
      console.log("onClickLibrary ~  total_pages ",  total_pages )
      
      for (let i = 0; i < total_pages - 1; i++) {
        pageArr.push(filmsArr.splice(0, 9));
      }
      pageArr.push(filmsArr);
      console.log(pageArr);
      const moviesWithYearAndGenre = await getUpdatedLibraryMovieInfo(pageArr[libraryPage-1]);
      const result = await createCardMarkup(moviesWithYearAndGenre);
      await createCardMarkup(moviesWithYearAndGenre);
      await onRenderPagination(total_pages, libraryPage);
      return result;
    } catch {
      console.log('Oops!');
    }
  }

  if (width > 767 && width < 1024) {
    try {
      filmApiService.query = '';
      const filmsStr = await localStorage.getItem('watchedFilm');
      const filmsArr = await JSON.parse(filmsStr);
      total_pages = await Math.ceil(filmsArr.length / 6);
      console.log("onClickLibrary ~ total_pages", total_pages)
      const pageArr = [];
      for (let i = 0; i < total_pages - 1; i++) {
        pageArr.push(filmsArr.splice(0, 6));
      }
      pageArr.push(filmsArr);
      console.log(pageArr);
      const moviesWithYearAndGenre = await getUpdatedLibraryMovieInfo(pageArr[libraryPage-1]);
      const result = await createCardMarkup(moviesWithYearAndGenre);
      await createCardMarkup(moviesWithYearAndGenre);
      await onRenderPagination(total_pages, libraryPage);
      return result;
    } catch {
      console.log('Oops!');
    }
  }

  if (width > 320 && width < 768) {
    try {
      filmApiService.query = '';
      const filmsStr = await localStorage.getItem('watchedFilm');
      const filmsArr = await JSON.parse(filmsStr);
      total_pages = await Math.ceil(filmsArr.length / 4);
      console.log("onClickLibrary ~ total_pages", total_pages)
      const pageArr = [];
      for (let i = 0; i < total_pages - 1; i++) {
        pageArr.push(filmsArr.splice(0, 4));
      }
      pageArr.push(filmsArr);
      console.log(pageArr);
      const moviesWithYearAndGenre = await getUpdatedLibraryMovieInfo(pageArr[libraryPage-1]);
      const result = await createCardMarkup(moviesWithYearAndGenre);
      await createCardMarkup(moviesWithYearAndGenre);
      await onRenderPagination(total_pages, libraryPage);
      return result;
    } catch {
      console.log('Oops!');
    }
  }
}

async function onClickWatched() {
  // renderWatchedEl.classList.add('active');
  // renderQueueEl.classList.remove('active');
  // renderContainer.innerHTML = '';

  // const filmsStr = localStorage.getItem('watchedFilm');
  // const filmsArr = JSON.parse(filmsStr);
  // const moviesWithYearAndGenre = getUpdatedLibraryMovieInfo(filmsArr);

  // createCardMarkup(moviesWithYearAndGenre);

  libraryPage = filmLibrary.pageLibrary;
  // console.log('Это значение из рендера LEO', libraryPage);
  let total_pages = 0;
  let width = document.body.clientWidth;
  console.log('onClickLibrary ~ width', width);

  if (width > 1023) {
    try {
      filmApiService.query = '';
      const filmsStr = await localStorage.getItem('watchedFilm');
      const filmsArr = await JSON.parse(filmsStr);
      const pageArr = [];
      total_pages = await Math.ceil(filmsArr.length / 9);
      console.log("onClickLibrary ~  total_pages ",  total_pages )
      
      for (let i = 0; i < total_pages - 1; i++) {
        pageArr.push(filmsArr.splice(0, 9));
      }
      pageArr.push(filmsArr);
      console.log(pageArr);
      const moviesWithYearAndGenre = await getUpdatedLibraryMovieInfo(pageArr[libraryPage-1]);
      const result = await createCardMarkup(moviesWithYearAndGenre);
      await createCardMarkup(moviesWithYearAndGenre);
      await onRenderPagination(total_pages, libraryPage);
      return result;
    } catch {
      console.log('Oops!');
    }
  }

  if (width > 767 && width < 1024) {
    try {
      filmApiService.query = '';
      const filmsStr = await localStorage.getItem('watchedFilm');
      const filmsArr = await JSON.parse(filmsStr);
      total_pages = await Math.ceil(filmsArr.length / 6);
      console.log("onClickLibrary ~ total_pages", total_pages)
      const pageArr = [];
      for (let i = 0; i < total_pages - 1; i++) {
        pageArr.push(filmsArr.splice(0, 6));
      }
      pageArr.push(filmsArr);
      console.log(pageArr);
      const moviesWithYearAndGenre = await getUpdatedLibraryMovieInfo(pageArr[libraryPage-1]);
      const result = await createCardMarkup(moviesWithYearAndGenre);
      await createCardMarkup(moviesWithYearAndGenre);
      await onRenderPagination(total_pages, libraryPage);
      return result;
    } catch {
      console.log('Oops!');
    }
  }

  if (width > 320 && width < 768) {
    try {
      filmApiService.query = '';
      const filmsStr = await localStorage.getItem('watchedFilm');
      const filmsArr = await JSON.parse(filmsStr);
      total_pages = await Math.ceil(filmsArr.length / 4);
      console.log("onClickLibrary ~ total_pages", total_pages)
      const pageArr = [];
      for (let i = 0; i < total_pages - 1; i++) {
        pageArr.push(filmsArr.splice(0, 4));
      }
      pageArr.push(filmsArr);
      console.log(pageArr);
      const moviesWithYearAndGenre = await getUpdatedLibraryMovieInfo(pageArr[libraryPage-1]);
      const result = await createCardMarkup(moviesWithYearAndGenre);
      await createCardMarkup(moviesWithYearAndGenre);
      await onRenderPagination(total_pages, libraryPage);
      return result;
    } catch {
      console.log('Oops!');
    }
  }

}
async function onClickQueue() {
  // renderWatchedEl.classList.remove('active');
  // renderQueueEl.classList.add('active');
  // renderContainer.innerHTML = '';

  // const filmsStr = localStorage.getItem('queueFilm');
  // const filmsArr = JSON.parse(filmsStr);
  // const moviesWithYearAndGenre = getUpdatedLibraryMovieInfo(filmsArr);

  // createCardMarkup(moviesWithYearAndGenre);

  libraryPage = filmLibrary.pageLibrary;
  console.log('Это значение из рендера LEO', libraryPage);
  let total_pages = 0;
  let width = document.body.clientWidth;
  console.log('onClickLibrary ~ width', width);

  if (width > 1023) {
    try {
      filmApiService.query = '';
      const filmsStr = await localStorage.getItem('queueFilm');
      const filmsArr = await JSON.parse(filmsStr);
      const pageArr = [];
      total_pages = await Math.ceil(filmsArr.length / 9);
      console.log("onClickLibrary ~  total_pages ",  total_pages )
      
      for (let i = 0; i < total_pages - 1; i++) {
        pageArr.push(filmsArr.splice(0, 9));
      }
      pageArr.push(filmsArr);
      console.log(pageArr);
      const moviesWithYearAndGenre = await getUpdatedLibraryMovieInfo(pageArr[libraryPage-1]);
      const result = await createCardMarkup(moviesWithYearAndGenre);
      await createCardMarkup(moviesWithYearAndGenre);
      await onRenderPagination(total_pages, libraryPage);
      return result;
    } catch {
      console.log('Oops!');
    }
  }

  if (width > 767 && width < 1024) {
    try {
      filmApiService.query = '';
      const filmsStr = await localStorage.getItem('queueFilm');
      const filmsArr = await JSON.parse(filmsStr);
      total_pages = await Math.ceil(filmsArr.length / 6);
      console.log("onClickLibrary ~ total_pages", total_pages)
      const pageArr = [];
      for (let i = 0; i < total_pages - 1; i++) {
        pageArr.push(filmsArr.splice(0, 6));
      }
      pageArr.push(filmsArr);
      console.log(pageArr);
      const moviesWithYearAndGenre = await getUpdatedLibraryMovieInfo(pageArr[libraryPage-1]);
      const result = await createCardMarkup(moviesWithYearAndGenre);
      await createCardMarkup(moviesWithYearAndGenre);
      await onRenderPagination(total_pages, libraryPage);
      return result;
    } catch {
      console.log('Oops!');
    }
  }

  if (width > 320 && width < 768) {
    try {
      filmApiService.query = '';
      const filmsStr = await localStorage.getItem('queueFilm');
      const filmsArr = await JSON.parse(filmsStr);
      total_pages = await Math.ceil(filmsArr.length / 4);
      console.log("onClickLibrary ~ total_pages", total_pages)
      const pageArr = [];
      for (let i = 0; i < total_pages - 1; i++) {
        pageArr.push(filmsArr.splice(0, 4));
      }
      pageArr.push(filmsArr);
      console.log(pageArr);
      const moviesWithYearAndGenre = await getUpdatedLibraryMovieInfo(pageArr[libraryPage-1]);
      const result = await createCardMarkup(moviesWithYearAndGenre);
      await createCardMarkup(moviesWithYearAndGenre);
      await onRenderPagination(total_pages, libraryPage);
      return result;
    } catch {
      console.log('Oops!');
    }
  }

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

export { onClickWatched, onClickQueue, onClickLibrary };
