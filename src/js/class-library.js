export default class FilmLibrary { 
    constructor() {
        this.pageLibrary = 1;
    }

  incrementPageLib() {
    this.pageLibrary += 1;
  }

  decrementPageLib() {
    this.pageLibrary -= 1;
  }

  resetPageLib() {
    this.pageLibrary = 1;
  }
 get pageLib() {
    return this.pageLibrary;
  }

  set pageLib(newPage) {
    this.pageLibrary = newPage;
  }
}