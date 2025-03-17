<template>
    <section class="list">
      <h2 class="list-title">Popular TV Shows</h2>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else class="list-grid">
        <div v-for="serie in series" :key="serie.id" class="list-card">
        <img :src="'https://image.tmdb.org/t/p/w500' + serie.poster_path" :alt="serie.title" />
        <div class="info">
            <div class="info-vote">{{ serie.vote_average }}</div>
            <router-link :to="`/movie/${serie.id}`" class="movie-link">
              <h2>{{ serie.title }}</h2>
              <!-- <div class="info-genre">{{ getGenresNames(movie.genre_ids) }}</div> -->
              <p> {{ serie.overview }}</p>
            </router-link>
        </div>
      </div>
      </div>
  </section>
  </template>

<script setup lang="ts">
import { onMounted } from "vue";
import { getSerieById } from "../services/series";
import { storeToRefs } from "pinia";


const { movies, loading, error } = storeToRefs(store);

onMounted(() => {
  store.fetchMovies();
  console.log("Movies cargadas: ", store.movies);
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/List.scss";
</style>