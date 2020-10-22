class MoviesService {
  constructor() {
    this.APIKey = "0650dc23d9158fa968f70eaad71ff3fd";
    this.baseURL = "https://api.themoviedb.org/3/";
  }

  buildURL({ path, query }) {
    return `${this.baseURL}${path}?api_key=${this.APIKey}${query}`;
  }

  async fetchProvider() {
    const response = await fetch(...arguments);
    return await response.json();
  }

  async getDiscoverMovies() {
    try {
      const discoverMoviesURL = this.buildURL({
        path: "discover/movie",
        query: "&sort_by=popularity.desc&page=1",
      });

      const { results } = await this.fetchProvider(discoverMoviesURL);

      return results;
    } catch (error) {
      console.warn("discoverMovies", error);
    }
  }
}

export const moviesService = new MoviesService();
