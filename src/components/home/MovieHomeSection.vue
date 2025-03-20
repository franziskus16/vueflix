<template>
  <section class="movie-main">
    <h1>Popular films</h1>
    <div v-if="movies.length" class="wrapper-movies">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <img
          :src="
            movie.poster_path
              ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
              : '/images/default-poster.png'
          "
          :alt="movie.title"
        />
        <div class="info">
          <div class="info-vote">{{ movie.vote_average.toFixed(1) }}</div>
          <router-link :to="`/movie/${movie.id}`" class="movie-link">
            <h2>{{ movie.title }}</h2>
            <div class="info-genre">{{ getGenresNames(movie.genre_ids) }}</div>
            <p>{{ movie.overview }}</p>
          </router-link>
        </div>
      </div>
    </div>
    <p v-else>charging films...</p>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useMoviesStore } from '../../store/movies_store'

const store = useMoviesStore()

const { movies, genres } = storeToRefs(store)

onMounted(async () => {
  if (!movies.value.length) {
    await store.fetchMovies()
  }
  if (!genres.value.length) {
    await store.fetchMoviesGenres()
  }
})

const getGenresNames = (genreIds: number[]): string => {
  return genreIds
    .map((id) => genres.value.find((g) => g.id === id)?.name || 'No Genre')
    .join(' | ')
}
</script>

<style scoped lang="scss">
@use './Home_styles.scss';
</style>
