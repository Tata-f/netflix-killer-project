import {onClickQueue} from './render-library'
import { filmLibrary } from './render-library';
const renderLibraryEl = document.querySelector('.render-queue-js');
const headerEl = document.querySelector('.header-main')
const renderContainer = document.querySelector('.gallery-section > .container');

export default function addToLockalS(filmUser) {
  const btnQueueEl = document.querySelector('.btn-queue-js');
  if (!localStorage.queueFilm) {
    btnQueueEl.addEventListener('click', onClickBtnAddToQueue);
  } else {
    const filmsStr = localStorage.getItem('queueFilm');
    btnQueueEl.addEventListener('click', onClickBtnAddToQueue);
    if (filmsStr.indexOf(`${filmUser.id}`) && filmsStr.indexOf(`${filmUser.id}`) !== -1) {
      btnQueueEl.innerText = 'remove from queue';
      btnQueueEl.classList.add('modal-button-color')
      btnQueueEl.addEventListener('click', onClickBtnAddToQueue);
    }
  }
  function onClickBtnAddToQueue() {
    if (!localStorage.queueFilm) {
      const films = [];
      films.push(filmUser);
      localStorage.setItem(`queueFilm`, JSON.stringify(films));
      btnQueueEl.innerText = 'remove from queue';
      btnQueueEl.classList.add('modal-button-color')
      if(renderLibraryEl.classList.contains('active') && headerEl.classList.contains('not-active')){
        onClickQueue();
      }
    } else {
      const filmsStr = localStorage.getItem('queueFilm');
      if (filmsStr.indexOf(`${filmUser.id}`) && filmsStr.indexOf(`${filmUser.id}`) !== -1) {
        btnQueueEl.innerText = 'remove from queue';
        btnQueueEl.classList.add('modal-button-color')
        onClickBtnRemoveToQueue();
      } else {
        const filmsArr = JSON.parse(filmsStr);
        filmsArr.push(filmUser);
        localStorage.setItem(`queueFilm`, JSON.stringify(filmsArr));
        btnQueueEl.innerText = 'remove from queue';
        btnQueueEl.classList.add('modal-button-color')
        if(renderLibraryEl.classList.contains('active') && headerEl.classList.contains('not-active')){
          // filmLibrary.incrementPageLib()
          onClickQueue();
        }
      }
    }
  }

  function onClickBtnRemoveToQueue() {
    let width = document.body.clientWidth;
    
    const filmsStr = localStorage.getItem('queueFilm');
    const filmsArr = JSON.parse(filmsStr);

    if (filmsArr.length === 1) {
      localStorage.removeItem('queueFilm');
      btnQueueEl.innerText = 'add to queue';
      btnQueueEl.classList.remove('modal-button-color')

      if(renderLibraryEl.classList.contains('active')&& headerEl.classList.contains('not-active')){
        onClickQueue();
        renderContainer.innerHTML='';
      }
      return;
    }
    if(filmsArr.length%9===1 && width > 1023){
      let pages = Math.ceil(filmsArr.length/9);

      const newArr = filmsArr.filter(film => {
        return film.id !== filmUser.id;
      })
      localStorage.setItem(`queueFilm`, JSON.stringify(newArr));
      btnQueueEl.innerText = 'add to queue';
      btnQueueEl.classList.remove('modal-button-color')
      btnQueueEl.removeEventListener('click', onClickBtnRemoveToQueue);
      if(renderLibraryEl.classList.contains('active') && headerEl.classList.contains('not-active')){

        if (pages === filmLibrary.pageLib) {
          filmLibrary.decrementPageLib();
        }
        onClickQueue();
        renderContainer.innerHTML='';
      }
    }
        if(filmsArr.length%4===1 && width < 768){
      let pages = Math.ceil(filmsArr.length/4);

      const newArr = filmsArr.filter(film => {
        return film.id !== filmUser.id;
      })
      localStorage.setItem(`queueFilm`, JSON.stringify(newArr));
      btnQueueEl.innerText = 'add to queue';
      btnQueueEl.classList.remove('modal-button-color')
      btnQueueEl.removeEventListener('click', onClickBtnRemoveToQueue);
      if(renderLibraryEl.classList.contains('active') && headerEl.classList.contains('not-active')){

        if (pages === filmLibrary.pageLib) {
          filmLibrary.decrementPageLib();
        }
        onClickQueue();
        renderContainer.innerHTML='';
      }
      }

    if(filmsArr.length%6===1 && width > 767 && width < 1024){
      let pages = Math.ceil(filmsArr.length/6);

      const newArr = filmsArr.filter(film => {
        return film.id !== filmUser.id;
      })
      localStorage.setItem(`queueFilm`, JSON.stringify(newArr));
      btnQueueEl.innerText = 'add to queue';
      btnQueueEl.classList.remove('modal-button-color')
      btnQueueEl.removeEventListener('click', onClickBtnRemoveToQueue);
      if(renderLibraryEl.classList.contains('active') && headerEl.classList.contains('not-active')){

        if (pages === filmLibrary.pageLib) {
          filmLibrary.decrementPageLib();
        }
        onClickQueue();
        renderContainer.innerHTML='';
      }
    }

    if (filmsArr.length > 1) {
      const newArr = filmsArr.filter(film => {
        return film.id !== filmUser.id;
      })
      localStorage.setItem(`queueFilm`, JSON.stringify(newArr));
      if(renderLibraryEl.classList.contains('active') && headerEl.classList.contains('not-active')){
        onClickQueue();
      }
      btnQueueEl.innerText = 'add to queue';
      btnQueueEl.classList.remove('modal-button-color')
      btnQueueEl.removeEventListener('click', onClickBtnRemoveToQueue);
    }
  }
}