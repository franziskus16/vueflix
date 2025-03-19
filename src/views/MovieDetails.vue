<template>
  <div v-if="movie">
    <div class="movie-wrapper">
      <div class="section-movie">
        <div
          class="movie-background"
          :style="{
            backgroundImage: `url(${movie.backdrop_path ? 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path : '/images/default-background.png'})`,
          }"
        >
          <div class="movie-content">
            <img
              class="movie-poster"
              :src="
                movie.poster_path
                  ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
                  : '/images/default-poster.png'
              "
              :alt="movie.title"
            />
            <div class="movie-details">
              <div class="info-vote">{{ movie.vote_average.toFixed(1) }}</div>
              <h1>{{ movie.title }}</h1>
              <h2>{{ directors.join(', ') || 'Not available' }}</h2>
              <p>{{ movie.release_date }} | {{ movie.runtime }} min</p>
              <p>{{ getGenresNames(movie?.genre_ids || []) }}</p>
            </div>
          </div>
          <div class="section-button">
            <router-link class="btn-subscription" to="/subscription">
              <font-awesome-icon :icon="['fas', 'ticket']" />
              <span>SUBSCRIBE</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-details">
      <div class="movie-overview bg-details">
        <h2>Overview:</h2>
        <p>{{ movie.overview }}</p>
      </div>
      <div class="movie-cast bg-details">
        <h2>Cast:</h2>
        <p>
          <strong>Directors:</strong>
          {{ directors.join(', ') || 'Not available' }}
        </p>
        <p><strong>Cast:</strong> {{ actors.join(', ') || 'Not available' }}</p>
      </div>
      <div class="extra-details bg-details">
        <h2>More details:</h2>
        <p><strong>Country:</strong> {{ movie.origin_country }}</p>
        <p><strong>Original language:</strong> {{ movie.original_language }}</p>
        <p><strong>Original title:</strong> {{ movie.original_title }}</p>
        <p><strong>Release Date:</strong> {{ movie.release_date }}</p>
        <p><strong>Popularity:</strong> {{ movie.popularity }}</p>
      </div>
      <div class="bg-details">
        <h2>Related movies:</h2>
        <div
          class="page-content__movies-item"
          v-for="similar in similarMovies"
          :key="similar.id"
        >
          <img
            :src="getMovieImageUrl(similar.poster_path)"
            :alt="similar.title"
          />
          <div class="page-content__actors-item-overlay">
            <p class="page-content__actors-item-name">{{ similar.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Waiting for movies..</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useMoviesStore } from '../store/movies_store'

const route = useRoute()

const directors = ref<string[]>([])
const actors = ref<string[]>([])

const store = useMoviesStore()
const { movie, genres, similarMovies } = storeToRefs(store)

onMounted(async () => {
  try {
    const movieId = Number(route.params.id)
    await Promise.all([
      store.fetchMovieById(movieId),
      store.fetchMovieCredits(movieId),
      store.fetchMoviesGenres(),
    ])

    directors.value = store.credits.directors || []
    actors.value = store.credits.actors || []
  } catch (error) {
    console.error('Error loading movie data:', error)
  }
})

const getGenresNames = (genreIds: number[]): string => {
  return genreIds
    .map((id) => genres.value.find((g) => g.id === id)?.name || 'No Genre')
    .join(' | ')
}
</script>

<style scoped lang="scss">
@use '../assets/styles/movie_details.scss';
</style>
