<template>
    <section class="series-main">
      <h1>Popular TV Shows</h1>
      <div v-if="series.length" class="wrapper-series">
        <div v-for="serie in series" :key="serie.id" class="serie-card">
          <img
            :src="'https://image.tmdb.org/t/p/w500' + serie.poster_path"
            :alt="serie.name"
          />
          <div class="info">
            <div class="info-vote">{{ serie.vote_average.toFixed(1) }}</div>
  
            <router-link :to="`/serie/${serie.id}`" class="serie-link">
              <h2>{{ serie.name }}</h2>
              <p>{{ serie.overview }}</p>
            </router-link>
          </div>
        </div>
      </div>
  
      <p v-else>Cargando series...</p>
    </section>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from "vue";
  import { storeToRefs } from "pinia";
  import { useSeriesStore } from "../../store/series_store";
 

  const store = useSeriesStore();
  const { series, loading, error } = storeToRefs(store);
  
  onMounted(() => {
    store.fetchSeries();
  });
  </script>
  
  <style scoped lang="scss">
  @import "./Home_styles.scss";
  </style>