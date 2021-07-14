import renderDefaultMovies from './render-movies-grid';
import { renderDefaultMoviesPopularOnWeek } from './render-movies-grid';

const refs = {
  toggleRenderPopular: document.querySelector('.toggle-reander'),
  inputTogglePopular: document.querySelector('#e')
};

refs.inputTogglePopular.addEventListener('click', onTogglePopularMovies);

console.dir(refs.inputTogglePopular.checked)

function onTogglePopularMovies() {
	if (refs.inputTogglePopular.checked) {
		renderDefaultMovies();
		return;
	}

	if (!refs.inputTogglePopular.checked) {
		renderDefaultMoviesPopularOnWeek()
		return;		
	}
  
}
