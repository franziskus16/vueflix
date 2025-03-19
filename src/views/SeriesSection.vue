<template>
  <section class="list">
    <h2 class="list-title">Popular TV Shows</h2>

    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>

    <div v-else class="list-grid">
      <div v-for="serie in series" :key="serie.id" class="list-card">
        <h2 class="movie-title">{{ serie.name }}</h2>
        <img
          :src="'https://image.tmdb.org/t/p/w500' + serie.backdrop_path"
          :alt="serie.name"
        />
        <div class="info">
          <router-link :to="`/serie/${serie.id}`" class="serie-link">
            <div class="info-vote">{{ serie.vote_average }}</div>
            <p>{{ serie.overview }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useSeriesStore } from '../store/series_store'

const store = useSeriesStore()
const { series, loading, error } = storeToRefs(store)

onMounted(() => {
  store.fetchSeries()
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/List.scss';
</style>
