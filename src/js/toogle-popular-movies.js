import {renderDefaultMovies }from './render-movies-grid';
import { renderDefaultMoviesPopularOnWeek } from './render-movies-grid';

const refs = {
  toggleRenderPopular: document.querySelector('.toggle-reander'),
  inputTogglePopular: document.querySelector('#toggle-input')
};

refs.inputTogglePopular.addEventListener('click', onTogglePopularMovies);


export function onTogglePopularMovies() {
	if (refs.inputTogglePopular.checked) {
		renderDefaultMovies();
		return;
	}

	if (!refs.inputTogglePopular.checked) {
		renderDefaultMoviesPopularOnWeek()
		return;		
	}
  
}
