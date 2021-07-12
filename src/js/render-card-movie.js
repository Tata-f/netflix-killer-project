import getRefs from './get-refs';
import { fetchPopularMovies, options } from './fetch-popular';
import movieCardTpl from '../templates/movie-card.hbs';
import { loader, loaderStyles } from "./spinner"


const refs = getRefs();

fetchCardMovie(); // рендер карточек популярных фильмов до ввода запроса

export default function fetchCardMovie() {
    loader.showLoading(loaderStyles);
    fetchPopularMovies().then(results => {
        // console.log(results);
createCardMarkup(results);
loader.hideLoading();
});
}

// функция отображения разметки
function createCardMarkup(results) {
    refs.moviesContainer.insertAdjacentHTML('beforeend', movieCardTpl(results));
}
