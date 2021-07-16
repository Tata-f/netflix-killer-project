import getRefs from './get-refs';
import FilmApiService from './class-api-service';
import movieCardTpl from '../templates/movie-card.hbs';
import { loader, loaderStyles } from './spinner';
import { errorMsg, errorMsgStyles } from './notification';
import { async } from 'fast-glob';

import { onRenderPagination, onClickPagination } from './pagination';

const refs = getRefs();
export const filmApiService = new FilmApiService();

//Дефолтный рендер карточек популярных фильмов до ввода запроса пользователем
renderDefaultMovies();

//Рендер карточек фильмов по запросу пользователя
refs.searchForm.addEventListener('submit', onSearch);

//Функция дефолтного рендера популярных фильмов за день
async function renderDefaultMovies() {
  let pageNumber = filmApiService.page;
  loader.showLoading(loaderStyles);
  try {
    const movies = await filmApiService.fetchPopularMovie();
    const { results, total_pages } = movies;
    const genresList = await filmApiService.fetchGenres();
    const { genres } = genresList;

    const moviesWithYearAndGenre = getUpdatedMovieInfo(results, genres);

    createCardMarkup(moviesWithYearAndGenre);

    onRenderPagination(total_pages, pageNumber);
  } catch (error) {
    console.log('Ошибка при дефолтном рендере');
  }
  loader.hideLoading();
}

//Функция дефолтного рендера популярных фильмов за неделю
async function renderDefaultMoviesPopularOnWeek() {
  let pageNumber = filmApiService.page;
  loader.showLoading(loaderStyles);
  try {
    const movies = await filmApiService.fetchPopularMovieOnWeek();
    const { results, total_pages } = movies;
    const genresList = await filmApiService.fetchGenres();
    const { genres } = genresList;

    const moviesWithYearAndGenre = getUpdatedMovieInfo(results, genres);

    createCardMarkup(moviesWithYearAndGenre);

    onRenderPagination(total_pages, pageNumber);
  } catch (error) {
    console.log('Ошибка при дефолтном рендере');
  }
  loader.hideLoading();
}

//Функция рендера фильмов по запросу
async function onSearch(event) {
  event.preventDefault();

  refs.toggleRenderPopular.classList.add('active');

  filmApiService.resetPage();

  let pageNumber = filmApiService.page;
  const form = event.currentTarget;
  filmApiService.query = form.elements.query.value.trim();

  loader.showLoading(loaderStyles);

  try {
    const movies = await filmApiService.fetchByQuery();
    const { results, total_pages } = movies;
    const genresList = await filmApiService.fetchGenres();
    const { genres } = genresList;

    if (filmApiService.query === '') {
      errorMsg.showToast(errorMsgStyles);
    }

    if (movies.total_results === 0) {
      errorMsg.showToast(errorMsgStyles);
      console.log('Ошибка при запросе пользователя');
    }

    const moviesWithYearAndGenre = getUpdatedMovieInfo(results, genres);

    createCardMarkup(moviesWithYearAndGenre);

    onRenderPagination(total_pages, pageNumber);
  } catch (error) {
    console.log('Ошибка при запросе пользователя');
  }
  form.reset();
  loader.hideLoading();
}

//Функция рендера при пагинации с запросом
async function onPaginationWithQuery() {
  let pageNumber = filmApiService.page;
  loader.showLoading(loaderStyles);

  try {
    const movies = await filmApiService.fetchByQuery();
    const { results, total_pages } = movies;
    const genresList = await filmApiService.fetchGenres();
    const { genres } = genresList;

    const moviesWithYearAndGenre = getUpdatedMovieInfo(results, genres);

    createCardMarkup(moviesWithYearAndGenre);

    onRenderPagination(total_pages, pageNumber);
  } catch (error) {
    console.log('Ошибка при запросе пользователя');
  }
  loader.hideLoading();
}

//функция создания разметки сетки фильмов разметки

function createCardMarkup(results) {
  refs.moviesContainer.innerHTML = '';
  const elements = movieCardTpl(results);
  refs.moviesContainer.innerHTML = elements;
}

//функция добавляет необходимую информацию о годе и жанрах в массив фильмов

function getUpdatedMovieInfo(movies, info) {
  return movies.map(movie => ({
    ...movie,
    genres: info
      .filter(genre => movie.genre_ids.includes(genre.id))
      .map(({ name }) => name)
      .join(', '),
    releaseYear: movie.release_date ? movie.release_date.slice(0, 4) : 'n/a',
    voteAverage: movie.vote_average.toFixed(1),
  }));
}

export { renderDefaultMovies, renderDefaultMoviesPopularOnWeek, onPaginationWithQuery };
