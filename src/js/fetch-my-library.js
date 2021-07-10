const refs = {
	headerLibrary: document.querySelector('header'),
	navMyLibrary: document.querySelector('.nav-header__library'),
	navHome: document.querySelector('.nav-header__home'),
	headerFormNotActive: document.querySelector('.header-form'),
	myLibraryActive: document.querySelector('.librari-nav'),
	navWach: document.querySelector('.librari-nav__wach'),
	navQueue: document.querySelector('.librari-nav__queue'),
	listGallery: document.querySelector('.list'),
}

refs.navMyLibrary.addEventListener('click', onRenderMyLibrary)


function onRenderMyLibrary (evt) {
	evt.preventDefault()

	refs.navHome.classList.remove('active')
	refs.navMyLibrary.classList.add('active')
	refs.headerLibrary.classList.add('active')
	refs.headerFormNotActive.classList.add('not-active')
	refs.myLibraryActive.classList.add('active')
	refs.navWach.classList.add('active')

	refs.listGallery.innerHTML = "";

}