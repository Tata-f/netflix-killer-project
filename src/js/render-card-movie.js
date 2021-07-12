import getRefs from './get-refs';
import fetchPopularMovies from './fetch-popular';
import movieCardTpl from '../templates/movie-card.hbs';

const refs = getRefs();

fetchCardMovie(); // рендер карточек популярных фильмов до ввода запроса

export default function fetchCardMovie() {
    fetchPopularMovies().then(results => {
        // console.log(results);
createCardMarkup(results);
});
}

// функция отображения разметки
function createCardMarkup(results) {
    // insertAdjacentHTML добавляет новые элменеты, а нам нужно их менять при переключении страницы
    // refs.moviesContainer.insertAdjacentHTML('beforeend', movieCardTpl(results));
    const elements = movieCardTpl(results);
    refs.moviesContainer.innerHTML = elements;
}