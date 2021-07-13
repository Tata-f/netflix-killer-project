/*import getRefs from './get-refs';
import { fetchGenresArray } from './fetch-popular';


const refs = getRefs();

const options = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  API_KEY: 'bb99cf0123948bcb57616045b789da85',
  PAGE_NUM: 1,
};


export default function fetchByQuery(query) {
  return fetch(
    `${options.BASE_URL}search/movie?api_key=${options.API_KEY}&language=en-US&page=${options.PAGE_NUM}&query=${query}`,
  )
    .then(response => response.json()).then(({ results }) => {
            return fetchGenresArray().then(genresArray => {
                return results.map(movie => ({
                    ...movie,
                    genres: genresArray.filter(genre => movie.genre_ids.includes(genre.id)).map(({ name }) => name).join(', '),
                    releaseYear: movie.release_date ? movie.release_date.slice(0, 4) : 'n/a'
                
                }));
            })
        })
}*/

//====================================================

import getRefs from './get-refs';
import FilmApiService from './class-api-service';
import movieCardTpl from '../templates/movie-card.hbs';
import { fetchGenresArray } from './fetch-popular';

const refs = getRefs();

const filmApiService = new FilmApiService();

refs.searchForm.addEventListener('submit', onSearch);

function fetchByQuery() {
  return filmApiService.fetchByQuery().then(({ results }) => {
    return fetchGenresArray().then(genresArray => {
      return results.map(movie => ({
        ...movie,
        genres: genresArray.filter(genre => movie.genre_ids.includes(genre.id)).map(({ name }) => name).join(', '),
        releaseYear: movie.release_date ? movie.release_date.slice(0, 4) : 'n/a'
                
      }));
    })
  })
}

function onSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  filmApiService.query = form.elements.query.value;

  fetchByQuery()
    .then(renderCardByQuery)
    .catch(error => {
      console.log(error);
    })
    .finally(() => form.reset());
}

function renderCardByQuery(results) {
  refs.moviesContainer.innerHTML = movieCardTpl(results);
}