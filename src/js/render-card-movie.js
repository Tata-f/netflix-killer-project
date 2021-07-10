import getRefs from './get-refs';
import fetchPopularMovies from './fetch-popular';
import movieCardTpl from '../templates/movie-card.hbs';

const refs = getRefs();

fetchCardMovie(); // рендер карточек популярных фильмов до ввода запроса

function fetchCardMovie() {
    fetchPopularMovies().then(results => {
        // console.log(results);
createCardMarkup(results);
});
}

// функция отображения разметки
function createCardMarkup(results) {
refs.moviesContainer.insertAdjacentHTML('beforeend', movieCardTpl(results));
}