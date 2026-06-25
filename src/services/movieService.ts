import api from '@/lib/axios';
import type { PopularMovies } from '@/types/movie';
// import { Movie, MovieResponse } from '@/types/movie';

// TODO: Create service functions to fetch data from TMDB API
// Reference: https://developer.themoviedb.org/reference/intro/getting-started

export const movieService = {
  // TODO: Implement getPopularMovies function
  // Endpoint: GET /movie/popular

  // TODO: Implement getNowPlayingMovies function
  // Endpoint: GET /movie/now_playing

  // TODO: Implement getMovieDetails function
  // Endpoint: GET /movie/{movie_id}

  // TODO: Implement searchMovies function
  // Endpoint: GET /search/movie

  // TODO: Add more endpoints as needed

  getPopularMovies: async (): Promise<PopularMovies[]> => {
    const { data } = await api.get('/movie/popular');
    return data;
  },

  getNowPlayingMovies: async () => {
    const { data } = await api.get('/movie/now_playing');
    return data;
  },

  getMovieDetails: async (movieId: string) => {
    const { data } = await api.get(`/movie/${movieId}`);
    return data;
  },

  searchMovies: async (keyword: string) => {
    const { data } = await api.get(`/search/movie?query=${keyword}`);
    return data;
  },
};
