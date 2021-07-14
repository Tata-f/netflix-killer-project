import getRefs from './get-refs';
const targetList = getRefs();

const refs = {
	headerHome: document.querySelector('.header-home'),
	headerLibrary: document.querySelector('.header-my-library'),
	btnNavMyLibrary: document.querySelector('.nav-header-home .nav-header__library'),
		
}

refs.btnNavMyLibrary.addEventListener('click', onRenderMyLibrary)

function onRenderMyLibrary () {

	refs.headerHome.classList.add('not-active')	
	refs.headerLibrary.classList.remove('not-active')	

	targetList.moviesContainer.innerHTML = "";

}
