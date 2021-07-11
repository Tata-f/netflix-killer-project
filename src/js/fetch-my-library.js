import getRefs from './get-refs';
const targetList = getRefs();

const refs = {
	headerLibrary: document.querySelector('header'),
	navMyLibrary: document.querySelector('.nav-header__library'),
	navHome: document.querySelector('.nav-header__home'),
	headerFormNotActive: document.querySelector('.header-form'),
	myLibraryActive: document.querySelector('.librari-nav'),
	navWach: document.querySelector('.librari-nav__wach'),
	navQueue: document.querySelector('.librari-nav__queue')	
}


refs.navMyLibrary.addEventListener('click', onRenderMyLibrary)


function onRenderMyLibrary () {
	
	refs.headerLibrary.classList.add('active')
	refs.navHome.classList.remove('active')
	refs.navMyLibrary.classList.add('active')
	refs.headerFormNotActive.classList.add('not-active')
	refs.myLibraryActive.classList.add('active')
	

	targetList.moviesContainer.innerHTML = "";

	
	

}
