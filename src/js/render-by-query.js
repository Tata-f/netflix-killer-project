import getRefs from './get-refs';
import fetchByQuery from './fetch-by-query';
import movieCardTpl from '../templates/movie-card.hbs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const searchQuery = form.elements.query.value;

  fetchByQuery(searchQuery)
    .then(renderCardByQuery)
    .catch(error => {
      console.log(error);
    })
    .finally(() => form.reset());
}

function renderCardByQuery(results) {
  refs.moviesContainer.innerHTML = movieCardTpl(results);
}
