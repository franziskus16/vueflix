<template>
    <section class="list">
      <h2 class="list-title">Popular films</h2>
      <div v-if="loading">Cargando...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else class="list-grid">
        <div v-for="movie in movies" :key="movie.id" class="list-card">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
        <div class="info">
            <div class="info-vote">{{ movie.vote_average }}</div>
            <router-link :to="`/movie/${movie.id}`" class="movie-link">
              <h2>{{ movie.title }}</h2>
              <!-- <div class="info-genre">{{ getGenresNames(movie.genre_ids) }}</div> -->
              <p> {{ movie.overview }}</p>
            </router-link>
        </div>
      </div>
      </div>
  </section>
  </template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useMoviesStore } from "../store/movies_store";
import { storeToRefs } from "pinia";


const store = useMoviesStore();
const { movies, loading, error } = storeToRefs(store);

onMounted(() => {
  store.fetchMovies();
  console.log("Movies cargadas: ", store.movies);
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/List.scss";
</style>