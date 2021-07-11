import fetchCardMovie from './render-card-movie';

const refs = {
	headerLibrary: document.querySelector('header'),
	logoHeader : document.querySelector('.logo-header'),
	navHome : document.querySelector('.nav-header__home'),
	navMyLibrary: document.querySelector('.nav-header__library'),
	headerFormNotActive: document.querySelector('.header-form'),
	myLibraryActive: document.querySelector('.librari-nav')
}


refs.logoHeader.addEventListener('click', onReturnMainPage);
refs.navHome.addEventListener('click', onReturnMainPage);

function onReturnMainPage() {

	refs.headerLibrary.classList.remove('active')
	refs.navHome.classList.add('active')
	refs.navMyLibrary.classList.remove('active')
	refs.headerFormNotActive.classList.remove('not-active')
	refs.myLibraryActive.classList.remove('active')

	fetchCardMovie();
}