import apiClient from "./axios";

export const getMovies = async () => {
  try {
    const response = await apiClient.get("discover/movie");
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await apiClient.get("/movie/popular");
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getMovieCertifications = async (id: number) => {
  try {
    const response = await apiClient.get(`/movie/${id}/release_dates`);
    return response.data; 
  } catch (error) {
    throw error;
  }
};

export const getMovieById = async (id: number) => {
  try {
    const response = await apiClient.get(`movie/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieCredits = async (id: number) => {
  try {
    const response = await apiClient.get(`movie/${id}/credits`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieSimilarId = async (id: number) => {
  try {
    const response = await apiClient.get(`movie/${id}/similar`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getMoviesGenres = async () => {
  try {
    const response = await apiClient.get("genre/movie/list");
    return response.data.genres;
  } catch (error) {
    throw error;
  }
};

export const getTrendingMovies = async () => {
  try {
    const response = await apiClient.get("trending/movie/day");
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
