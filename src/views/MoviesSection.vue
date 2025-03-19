<template>
  <section class="list">
    <h2 class="list-title">Popular films</h2>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="list-grid">
      <div v-for="movie in movies" :key="movie.id" class="list-card">
        <h2 class="movie-title">{{ movie.title }}</h2>
        <img
          :src="
            movie.backdrop_path
              ? 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path
              : '/images/default-poster.png'
          "
          :alt="movie.title"
        />
        <div class="info">
          <div class="info-vote">{{ movie.vote_average }}</div>
          <router-link :to="`/movie/${movie.id}`" class="movie-link">
            <div v-if="genres" class="featured__genres">
              <div
                v-for="genre in getMovieGenres(movie.genre_ids)"
                :key="genre.id"
                class="info-genre"
              >
                {{ genre.name }}
              </div>
            </div>
            <p>{{ movie.overview }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useMoviesStore } from '../store/movies_store'

const store = useMoviesStore()
const { movies, genres, loading, error } = storeToRefs(store)

const getMovieGenres = (genreIds: number[]) => {
  return genres.value.filter((genre) => genreIds.includes(genre.id))
}

onMounted(() => {
  store.fetchMovies()
  store.fetchMoviesGenres()
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/List.scss';
</style>
