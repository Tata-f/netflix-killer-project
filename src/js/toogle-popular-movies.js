import {renderDefaultMovies }from './render-movies-grid';
import { renderDefaultMoviesPopularOnWeek } from './render-movies-grid';

const refs = {
  toggleRenderPopular: document.querySelector('.toggle-reander'),
  inputTogglePopular: document.querySelector('#toggle-input')
};

refs.inputTogglePopular.addEventListener('click', onTogglePopularMovies);

console.log(refs.inputTogglePopular)

export function onTogglePopularMovies() {
	if (refs.inputTogglePopular.checked) {
		renderDefaultMovies();
		console.log(refs.inputTogglePopular.checked)
		return;
	}

	if (!refs.inputTogglePopular.checked) {
		renderDefaultMoviesPopularOnWeek()
		console.log(refs.inputTogglePopular.checked)
		return;		
	}
  
}
