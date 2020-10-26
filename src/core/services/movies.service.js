class MoviesService {
  constructor() {
    this.APIKey = "0650dc23d9158fa968f70eaad71ff3fd";
    this.baseURL = "https://api.themoviedb.org/3/";
    this.baseImageURL = "https://image.tmdb.org/t/p/";
    this.defaultW300Image = "/imgs/300x450poster-not-available.png";
    this.defaultW1280Image = "/imgs/1280x720poster-not-available.png";
  }

  buildURL({ path, query = "" }) {
    return `${this.baseURL}${path}?api_key=${this.APIKey}${query}`;
  }

  parseMoviesList(movies) {
    return movies.map(({ poster_path, ...movie }) => ({
      poster_path: poster_path
        ? this.parseResponseImages(poster_path)
        : this.defaultW300Image,
      ...movie,
    }));
  }

  async fetchProvider() {
    const response = await fetch(...arguments);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`${response.status}: Something went wrong`);
    }
  }

  parseResponseImages(imageSRC, size = "w300") {
    return `${this.baseImageURL}${size}/${imageSRC}`;
  }

  async getDiscoverMovies() {
    const discoverMoviesURL = this.buildURL({
      path: "discover/movie",
      query: "&sort_by=popularity.desc&page=1",
    });

    const { results } = await this.fetchProvider(discoverMoviesURL);
    return this.parseMoviesList(results);
  }

  async searchMovies(value) {
    const searchMoviesURL = this.buildURL({
      path: "search/movie",
      query: `&sort_by=popularity.desc&query=${value}&page=1`,
    });

    const { results } = await this.fetchProvider(searchMoviesURL);
    return this.parseMoviesList(results);
  }

  async getMovieDetailById(id) {
    const movieDetailURL = this.buildURL({
      path: `movie/${id}`,
    });

    const {
      backdrop_path,
      poster_path,
      ...response
    } = await this.fetchProvider(movieDetailURL);

    return {
      ...response,
      backdrop_path: backdrop_path
        ? this.parseResponseImages(backdrop_path, "w1280")
        : this.defaultW1280Image,
      poster_path: poster_path
        ? this.parseResponseImages(poster_path)
        : this.defaultW154Image,
    };
  }
}

export const moviesService = new MoviesService();
