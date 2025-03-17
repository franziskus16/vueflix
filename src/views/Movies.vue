<template>
  <div v-if="movie">
    <div class="movie-wrapper">
      <div class="section-movie">
          <div
            class="movie-background"
            :style="{ backgroundImage: 'url(https://image.tmdb.org/t/p/w500' + movie.backdrop_path + ')' }"
          ></div>
            <div class="movie-content">
                <img class="movie-poster" :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Poster de la película" />
                <div class="movie-details">
                  <div class="info-vote">{{ movie.vote_average }}</div>
                  <h1>{{ movie.title }}</h1>
                  <h2>{{ directors.join(", ") || 'Not available' }}</h2>
                  <p>{{ movie.release_date }} |  {{ movie.runtime }} min</p>
                  <p>{{ movie.genre_ids }}</p>
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
        <p><strong>Directors:</strong> {{ directors.join(", ") || 'Not available' }}</p>
        <p><strong>Cast:</strong> {{ actors.join(", ") || 'Not available' }}</p>
      </div>
      <div class="extra-details bg-details">
        <h2>More details:</h2> 
        <p>Country: {{ movie.origin_country }}</p>
        <p>Original title: {{ movie.original_name }}</p>
        <p>First Air date: {{ movie.first_air_date }}</p>
        <p><strong> {{ movie.popularity }}</strong></p>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Waiting for movies..</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useMoviesStore } from "../store/movies_store";

const route = useRoute();
const store = useMoviesStore();
const movie = ref<any>(null);
const directors = ref<string[]>([]);
const actors = ref<string[]>([]);

const loadMovie = async () => {
  const movieId = route.params.id as string;
  await store.fetchMovieById(Number(movieId));
  movie.value = store.movie;
  await store.fetchMovieCredits(Number(movieId));

  directors.value = store.credits.directors;  
  actors.value = store.credits.actors;
};

onMounted(() => {
  loadMovie();
});

</script>

<style scoped lang="scss">
@import "../assets/styles/movie_details.scss";
</style>

  