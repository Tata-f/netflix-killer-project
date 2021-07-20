import {onClickLibrary, renderPlaceholderImg} from './render-library'
import { filmLibrary } from './render-library';

const renderLibraryEl = document.querySelector('.render-watched-js');
const headerEl = document.querySelector('.header-main')
const renderContainer = document.querySelector('.gallery-section > .container');
const libraryIsActive = () => renderLibraryEl.classList.contains('active');
const libraryIsNotActive = () => headerEl.classList.contains('not-active');
const resetContainer = () => renderContainer.innerHTML= renderPlaceholderImg();

export default function addToLockalS(filmUser) {
  const btnWatchedEl = document.querySelector('.btn-watched-js');
  const onClickWatched = () => btnWatchedEl.addEventListener('click', onClickBtnAddToWatched);
  const removeWatchedBtn = () => {
      btnWatchedEl.innerText = 'remove from watched';
      btnWatchedEl.classList.add('modal-button-color')
  }

  if (!localStorage.watchedFilm) {
    onClickWatched()
  } else {
    const filmsStr = localStorage.getItem('watchedFilm');
    onClickWatched();

    if (filmsStr.indexOf(`${filmUser.id}`) && filmsStr.indexOf(`${filmUser.id}`) !== -1) {
      removeWatchedBtn();
      onClickWatched();
    }
  }

  function onClickBtnAddToWatched() {

    if (!localStorage.watchedFilm) {
      const films = [];

      films.push(filmUser);
      localStorage.setItem(`watchedFilm`, JSON.stringify(films));
      removeWatchedBtn();
      if(libraryIsActive()&& libraryIsNotActive()){
        onClickLibrary();
      }
    } else {
      const filmsStr = localStorage.getItem('watchedFilm');
      
      if (filmsStr.indexOf(`${filmUser.id}`) && filmsStr.indexOf(`${filmUser.id}`) !== -1) {
        removeWatchedBtn();
        onClickBtnRemoveToWatched();
      } else {
        const filmsArr = JSON.parse(filmsStr);

        filmsArr.push(filmUser);
        localStorage.setItem(`watchedFilm`, JSON.stringify(filmsArr));
        removeWatchedBtn();
        if(libraryIsActive()&& libraryIsNotActive()){
          // filmLibrary.incrementPageLib()
          onClickLibrary();
        }
      }
    }
  }

  function onClickBtnRemoveToWatched() {
    let width = document.body.clientWidth;
    const filmsStr = localStorage.getItem('watchedFilm');
    const filmsArr = JSON.parse(filmsStr);
    const newArr = filmsArr.filter(film => {
        return film.id !== filmUser.id;
      })
    const setWatchedFilm = (newArr) => localStorage.setItem(`watchedFilm`, JSON.stringify(newArr));
    const addWatchedBtn = () => {
      btnWatchedEl.innerText = 'add to watched';
      btnWatchedEl.classList.remove('modal-button-color')
    };
    
    if (filmsArr.length === 1) {
      localStorage.removeItem('watchedFilm');
      addWatchedBtn();
      if(libraryIsActive()&& libraryIsNotActive()){
        onClickLibrary();
        resetContainer()
      }
      return;
    } 

    if(filmsArr.length%9===1 && width > 1023){
      let pages = Math.ceil(filmsArr.length/9);
      setWatchedFilm(newArr);
      addWatchedBtn();
      btnWatchedEl.removeEventListener('click', onClickBtnRemoveToWatched);
      if(libraryIsActive() && libraryIsNotActive()){
            
        if (pages === filmLibrary.pageLib) {
          filmLibrary.decrementPageLib();
        }
        onClickLibrary();
        resetContainer()
      }
    }

    if(filmsArr.length%4===1 && width < 768){
      let pages = Math.ceil(filmsArr.length/4);

      setWatchedFilm(newArr);
      addWatchedBtn();
      btnWatchedEl.removeEventListener('click', onClickBtnRemoveToWatched);
      if(libraryIsActive() && libraryIsNotActive()){
            
        if (pages === filmLibrary.pageLib) {
          filmLibrary.decrementPageLib();
        }
        onClickLibrary();
        resetContainer()
      }
    }

    if(filmsArr.length%6===1 && width > 767 && width < 1024){
      let pages = Math.ceil(filmsArr.length/6);

      setWatchedFilm(newArr);
      addWatchedBtn();
      btnWatchedEl.removeEventListener('click', onClickBtnRemoveToWatched);
      if(libraryIsActive() && libraryIsNotActive()){
            
        if (pages === filmLibrary.pageLib) {
          filmLibrary.decrementPageLib();
        }
        onClickLibrary();
        resetContainer()
      }
    }
      
    if (filmsArr.length > 1) {
      setWatchedFilm(newArr);
      if(libraryIsActive() && libraryIsNotActive()){
        onClickLibrary();
      }
      addWatchedBtn();
      btnWatchedEl.removeEventListener('click', onClickBtnRemoveToWatched);
    }
  }
}