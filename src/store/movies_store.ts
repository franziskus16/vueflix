import { defineStore } from "pinia";
import {
  getMovieById,
  getMovieCredits,
  getMovies,
  getMoviesGenres,
  getMovieSimilarId,
  getTrendingMovies,
} from "../services/movies";
import type { MovieState } from "../utils/interfaces";

export const useMoviesStore = defineStore("movies", {
  state: (): MovieState => ({
    movies: [],
    movie: null,
    credits: {
      directors: [],
      actors: [],
    },
    similarMovies: [],
    trendingMovies: [],
    genres: [],
    loading: false,
    error: null,
    lastFetch: 0,
    certifications: null,
  }),

  actions: {
    async fetchMovies() {
      const CACHE_TIME = 5 * 60 * 1000;
      const now = Date.now();

      if (this.movies.length > 0 && now - this.lastFetch < CACHE_TIME) {
        return;
      }

      this.loading = true;
      this.error = null;

      try {
        const movies = await getMovies();
        this.movies = movies;
        this.lastFetch = now;
      } catch (err) {
        this.error = "Error loading movies";
      } finally {
        this.loading = false;
      }
    },
    async fetchMovieById(id: number) {
      this.loading = true;
      this.error = null;
      this.movie = null;

      try {
        const movie = await getMovieById(id);
        this.movie = movie;
      } catch (err) {
        this.error = `Error loading movie with id ${id}`;
      } finally {
        this.loading = false;
      }
    },
    async fetchMovieCredits(id: number) {
      try {
        const credits = await getMovieCredits(id); // Función que hace la llamada a la API
        this.credits.directors = credits.crew.filter((member: any) => member.job === 'Director').map((director: any) => director.name);
        this.credits.actors = credits.cast.slice(0, 5).map((actor: any) => actor.name); // Los primeros 5 actores
      } catch (err) {
        console.error("Error al cargar los créditos de la película:", err);
      }
    },
    async fetchSimilarMovies(id: number) {
      this.loading = true;
      this.error = null;

      try {
        const similarMovies = await getMovieSimilarId(id);
        this.similarMovies = similarMovies?.slice(0, 10);
      } catch (err) {
        this.error = `Error loading movie with id ${id}`;
      } finally {
        this.loading = false;
      }
    },
    async fetchMoviesGenres() {
      this.loading = true;
      this.error = null;

      try {
        const genres = await getMoviesGenres();
        this.genres = genres;
      } catch (err) {
        this.error = "Error loading genres";
      } finally {
        this.loading = false;
      }
    },
    async fetchTrendingMovies() {
      this.loading = true;
      this.error = null;

      try {
        const trendingMovies = await getTrendingMovies();
        this.trendingMovies = trendingMovies;
      } catch (err) {
        this.error = "Error loading movies";
      } finally {
        this.loading = false;
      }
    },
  },
});
