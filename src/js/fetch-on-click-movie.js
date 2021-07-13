import getRefs from "./get-refs";
import movieModalCard from '../templates/movie-modal-card.hbs';
import onOpenModal from './modal-open';
import { loader, loaderStyles } from './spinner';

const refs = getRefs();

const options = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  API_KEY: 'bb99cf0123948bcb57616045b789da85',
};

refs.moviesContainer.addEventListener('click', getMovieById)

async function getMovieById(e) {
    loader.showLoading(loaderStyles);  
    try {
        if (e.target.className !== 'card-image-js') return
        refs.modal.innerHTML = '';
        const filmId = e.target.dataset.id;
        const response = await fetch(`${options.BASE_URL}movie/${filmId}?api_key=${options.API_KEY}`);
        const result = await response.json();
        const render = await renderOpenedMovie(result);
        
        onOpenModal();
    }   catch {
        console.log('Oops!');
    }
    loader.hideLoading();
}

async function renderOpenedMovie(res) {
   const result = await refs.modal.insertAdjacentHTML('beforeend', movieModalCard(res))
}

