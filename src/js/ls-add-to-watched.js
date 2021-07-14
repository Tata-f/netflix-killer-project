export default function addToLockalS(filmUser) {
  const btnWatchedEl = document.querySelector('.btn-watched-js');

  if (!localStorage.watchedFilm) {
    btnWatchedEl.addEventListener('click', onClickBtnAddToWatched);
  } else {
    const filmsStr = localStorage.getItem('watchedFilm');
    btnWatchedEl.addEventListener('click', onClickBtnAddToWatched);

    if (filmsStr.indexOf(`${filmUser.id}`) && filmsStr.indexOf(`${filmUser.id}`) !== -1) {
      btnWatchedEl.innerText = 'remove from watched';
      btnWatchedEl.addEventListener('click', onClickBtnAddToWatched);
    }
  }

  function onClickBtnAddToWatched() {
    if (!localStorage.watchedFilm) {
      const films = [];

      films.push(filmUser);
      localStorage.setItem(`watchedFilm`, JSON.stringify(films));
      btnWatchedEl.innerText = 'remove from watched';
    } else {
      const filmsStr = localStorage.getItem('watchedFilm');

      if (filmsStr.indexOf(`${filmUser.id}`) && filmsStr.indexOf(`${filmUser.id}`) !== -1) {
        btnWatchedEl.innerText = 'remove from watched';
        onClickBtnRemoveToWatched();
      } else {
        const filmsArr = JSON.parse(filmsStr);

        filmsArr.push(filmUser);
        localStorage.setItem(`watchedFilm`, JSON.stringify(filmsArr));
        btnWatchedEl.innerText = 'remove from watched';
      }
    }
  }

  function onClickBtnRemoveToWatched() {
    const filmsStr = localStorage.getItem('watchedFilm');
    const filmsArr = JSON.parse(filmsStr);

    if (filmsArr.length === 1) {
      localStorage.removeItem('watchedFilm');
      btnWatchedEl.innerText = 'add to watched';
      return;
    } else {
      if (filmsArr.length > 1) {
        for (let i = 0; i <= filmsArr.length; i++) {
          if (filmsArr[i].id === filmUser.id) {
            filmsArr.splice(i, 1);
            localStorage.setItem(`watchedFilm`, JSON.stringify(filmsArr));
            btnWatchedEl.innerText = 'add to watched';
            btnWatchedEl.removeEventListener('click', onClickBtnRemoveToWatched);
          }
        }
      }
    }
  }
}
