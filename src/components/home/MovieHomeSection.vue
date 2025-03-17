<template>
  <section class="movie-main">
    <h1>Popular films</h1>
    <div v-if="movies.length" class="wrapper-movies">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
        <div class="info">
            <div class="info-vote">{{ movie.vote_average }}</div>
            <router-link :to="`/movie/${movie.id}`" class="movie-link">
              <h2>{{ movie.title }}</h2>
              <div 
                class="info-genre">{{ getGenresNames(movie.genre_ids) }}</div>
              <p> {{ movie.overview }}</p>
            </router-link>
        </div>
      </div>
    </div>
    <p v-else>charging films...</p>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getPopularMovies, getMoviesGenres } from "../../services/movies";

const movies = ref([]);
const genres = ref<any[]>([]);


onMounted(async () => {
  try {
    const [moviesData, genresData ] = await Promise.all([
      getPopularMovies(),
      getMoviesGenres(),
    ]);

    movies.value = moviesData;
    genres.value = genresData;
 

  } catch (error) {
    console.error("Ups! parece que no hay peliculas!?", error);
  }
});

const getGenresNames = (genreIds: number[]): string => {
  return genreIds
    .map((id) => genres.value.find((g) => g.id === id)?.name || "Sin Genero")
    .join(" | ");
};
</script>


<style scoped lang="scss">
  @import "./Home_styles.scss";
</style>