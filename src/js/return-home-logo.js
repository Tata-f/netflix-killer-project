import fetchCardMovie from './render-card-movie';

const refs = {	
	logoHeader : document.querySelector('.logo-header-library'),
	btnNavHome : document.querySelector('.nav-header-library .nav-header__home'),
	headerHome: document.querySelector('.header-home'),
	headerLibrary: document.querySelector('.header-my-library'),	
}

refs.logoHeader.addEventListener('click', onReturnMainPage);
refs.btnNavHome.addEventListener('click', onReturnMainPage);

function onReturnMainPage() {
	refs.headerLibrary.classList.add('not-active')
	refs.headerHome.classList.remove('not-active')	
	

	fetchCardMovie();
}