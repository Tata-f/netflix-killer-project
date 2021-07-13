const options = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  API_KEY: 'bb99cf0123948bcb57616045b789da85',
  PAGE_NUM: 1,
};

export default class FilmApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchOnClickMovie() {
    const response = await fetch(`${options.BASE_URL}movie/${this.searchQuery}?api_key=${options.API_KEY}`);
    return response.json();
  }

  async fetchPopularMovie() {
    const response = await fetch(`${options.BASE_URL}trending/movie/day?api_key=${options.API_KEY}&page=${options.PAGE_NUM}`);
    return await response.json();
  }

  async fetchGenres() {
    const response = await fetch(`${options.BASE_URL}genre/movie/list?api_key=${options.API_KEY}&page=${options.PAGE_NUM}`);
    return response.json();
  }

  async fetchByQuery() {
    const response = await fetch(`${options.BASE_URL}search/movie?api_key=${options.API_KEY}&language=en-US&page=${options.PAGE_NUM}&query=${this.searchQuery}`);
    return response.json();
  }

  incrementPage() {
    this.page += 1;
  }

  decrementPage() {
    this.page -= 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}