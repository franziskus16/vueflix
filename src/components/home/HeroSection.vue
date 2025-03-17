<template>
    <section class="hero">
      <div class="hero-image">
        <div class="hero-text">
          <h1>Unlimited Movies, TV shows, and more</h1>
          <p>Watch anywhere. Cancel Anytime</p>
          <button>Get Started</button>
        </div>
      </div>
      <!-- <swiper
        :slides-per-view="1"
        :loop="movies.length > 1"
        :pagination="{ clickable: true }"
        :navigation="true"
      >
        <swiper-slide v-for="movie in movies" :key="movie.id">
          <img
            :src="getImageUrl(movie.backdrop_path)"
            :alt="movie.title"
            class="hero-image"
          />
          <div class="overlay">
            <h1>{{ movie.title }}</h1>
            <p>{{ movie.overview }}</p>
          </div>
        </swiper-slide>
      </swiper> -->
    </section>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  import axios from "axios";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        movies: [],
      };
    },
    methods: {
      async fetchMovies() {
        try {
          const apiKey = import.meta.env.VITE_API_KEY;
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`
          );
          this.movies = response.data.results;
        } catch (error) {
          console.error("algo falla en con las imagenes de CINE", error);
        }
      },
      getImageUrl(path) {
        return `https://image.tmdb.org/t/p/original${path}`;
      },
    },
    mounted() {
      this.fetchMovies();
    },
  };
  </script>

  <style scoped lang="scss">
  @import "./Home_styles.scss";
  </style>
  