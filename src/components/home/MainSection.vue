<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getPopularMovies } from "../../services/movies";

const movies = ref([]);

onMounted(async () => {
  try {
    movies.value = await getPopularMovies();
  } catch (error) {
    console.error("Error al cargar películas populares", error);
  }
});
</script>

<template>
  <section class="main">
    <h1>Películas Populares</h1>
    <div v-if="movies.length">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
        <h2>{{ movie.title }}</h2>
      </div>
    </div>
    <p v-else>charging films...</p>
  </section>
</template>


<style scoped>
.main {
  padding: 2rem;
}
.movie-card {
  display: inline-block;
  margin: 1rem;
  text-align: center;
}
img {
  width: 200px;
  border-radius: 12px;
}
</style>