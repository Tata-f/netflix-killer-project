import {onClickLibrary} from './render-library'
import { filmLibrary } from './render-library';

const renderLibraryEl = document.querySelector('.render-watched-js');
const headerEl = document.querySelector('.header-main')
const renderContainer = document.querySelector('.gallery-section > .container');

export default function addToLockalS(filmUser) {
  const btnWatchedEl = document.querySelector('.btn-watched-js');

  if (!localStorage.watchedFilm) {
    btnWatchedEl.addEventListener('click', onClickBtnAddToWatched);
  } else {
    const filmsStr = localStorage.getItem('watchedFilm');
    btnWatchedEl.addEventListener('click', onClickBtnAddToWatched);

    if (filmsStr.indexOf(`${filmUser.id}`) && filmsStr.indexOf(`${filmUser.id}`) !== -1) {
      btnWatchedEl.innerText = 'remove from watched';
      btnWatchedEl.classList.add('modal-button-color')
      btnWatchedEl.addEventListener('click', onClickBtnAddToWatched);
    }
  }

  function onClickBtnAddToWatched() {

    if (!localStorage.watchedFilm) {
      const films = [];

      films.push(filmUser);
      localStorage.setItem(`watchedFilm`, JSON.stringify(films));
      btnWatchedEl.innerText = 'remove from watched';
      btnWatchedEl.classList.add('modal-button-color')
      if(renderLibraryEl.classList.contains('active')&& headerEl.classList.contains('not-active')){
        onClickLibrary();
      }
    } else {
      const filmsStr = localStorage.getItem('watchedFilm');
      
      if (filmsStr.indexOf(`${filmUser.id}`) && filmsStr.indexOf(`${filmUser.id}`) !== -1) {
        btnWatchedEl.innerText = 'remove from watched';
        btnWatchedEl.classList.add('modal-button-color')
        onClickBtnRemoveToWatched();
      } else {
        const filmsArr = JSON.parse(filmsStr);

        filmsArr.push(filmUser);
        localStorage.setItem(`watchedFilm`, JSON.stringify(filmsArr));
        btnWatchedEl.innerText = 'remove from watched';
        btnWatchedEl.classList.add('modal-button-color')
        if(renderLibraryEl.classList.contains('active')&& headerEl.classList.contains('not-active')){
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

    if (filmsArr.length === 1) {
      localStorage.removeItem('watchedFilm');
      btnWatchedEl.innerText = 'add to watched';
      btnWatchedEl.classList.remove('modal-button-color')
      if(renderLibraryEl.classList.contains('active')&& headerEl.classList.contains('not-active')){
        onClickLibrary();
        renderContainer.innerHTML='';
      }
      return;
    } 

    if(filmsArr.length%9===1 && width > 1023){
      let pages = Math.ceil(filmsArr.length/9);

      const newArr = filmsArr.filter(film => {
        return film.id !== filmUser.id;
      })
      localStorage.setItem(`watchedFilm`, JSON.stringify(newArr));
      btnWatchedEl.innerText = 'add to watched';
      btnWatchedEl.classList.remove('modal-button-color')
      btnWatchedEl.removeEventListener('click', onClickBtnRemoveToWatched);
      if(renderLibraryEl.classList.contains('active') && headerEl.classList.contains('not-active')){
            
        if (pages === filmLibrary.pageLib) {
          filmLibrary.decrementPageLib();
        }
        onClickLibrary();
        renderContainer.innerHTML='';
      }
    }

    if(filmsArr.length%4===1 && width < 768){
      let pages = Math.ceil(filmsArr.length/4);

      const newArr = filmsArr.filter(film => {
        return film.id !== filmUser.id;
      })
      localStorage.setItem(`watchedFilm`, JSON.stringify(newArr));
      btnWatchedEl.innerText = 'add to watched';
      btnWatchedEl.classList.remove('modal-button-color')
      btnWatchedEl.removeEventListener('click', onClickBtnRemoveToWatched);
      if(renderLibraryEl.classList.contains('active') && headerEl.classList.contains('not-active')){
            
        if (pages === filmLibrary.pageLib) {
          filmLibrary.decrementPageLib();
        }
        onClickLibrary();
        renderContainer.innerHTML='';
      }
    }

    if(filmsArr.length%6===1 && width > 767 && width < 1024){
      let pages = Math.ceil(filmsArr.length/6);

      const newArr = filmsArr.filter(film => {
        return film.id !== filmUser.id;
      })
      localStorage.setItem(`watchedFilm`, JSON.stringify(newArr));
      btnWatchedEl.innerText = 'add to watched';
      btnWatchedEl.classList.remove('modal-button-color')
      btnWatchedEl.removeEventListener('click', onClickBtnRemoveToWatched);
      if(renderLibraryEl.classList.contains('active') && headerEl.classList.contains('not-active')){
            
        if (pages === filmLibrary.pageLib) {
          filmLibrary.decrementPageLib();
        }
        onClickLibrary();
        renderContainer.innerHTML='';
      }
    }
      
    if (filmsArr.length > 1) {
      const newArr = filmsArr.filter(film => {
        return film.id !== filmUser.id;
      })
      localStorage.setItem(`watchedFilm`, JSON.stringify(newArr));
      if(renderLibraryEl.classList.contains('active')&& headerEl.classList.contains('not-active')){
        onClickLibrary();
      }
      btnWatchedEl.innerText = 'add to watched';
      btnWatchedEl.classList.remove('modal-button-color')
      btnWatchedEl.removeEventListener('click', onClickBtnRemoveToWatched);
    }
  }
}
