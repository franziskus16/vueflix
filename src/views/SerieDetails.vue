<template>
  <div v-if="serie">
    <div class="serie-wrapper">
      <div class="section-serie">
        <div
          class="serie-background"
          :style="{
            backgroundImage: `url(${serie.backdrop_path ? 'https://image.tmdb.org/t/p/w500' + serie.backdrop_path : '/images/default-background.png'})`,
          }"
        >
          <div class="serie-content">
            <img
              class="serie-poster"
              :src="'https://image.tmdb.org/t/p/w500' + serie.poster_path"
              alt="TV Show Poster"
            />
            <div class="serie-details">
              <div class="info-vote">{{ serie.vote_average.toFixed(1) }}</div>
              <h1>{{ serie.name }}</h1>
              <p>{{ serie.first_air_date }}</p>
              <p>{{ serie.genre_ids }}</p>
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
      <div class="serie-overview bg-details">
        <h2>Overview:</h2>
        <p>{{ serie.overview }}</p>
      </div>
      <div class="extra-details bg-details">
        <h2>More details:</h2>
        <p><strong>Country:</strong> {{ serie.origin_country }}</p>
        <p><strong>Original language:</strong> {{ serie.original_language }}</p>
        <p><strong>Original title:</strong> {{ serie.original_name }}</p>
        <p><strong>First Air date:</strong> {{ serie.first_air_date }}</p>
        <p><strong>Popularity:</strong> {{ serie.popularity }}</p>
      </div>
    </div>
  </div>

  <div v-else>
    <p>Loading TV shows details...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getSerieById } from '../services/series'

const route = useRoute()
const serie = ref<any>(null)

onMounted(async () => {
  try {
    const serieId = Number(route.params.id)
    serie.value = await getSerieById(serieId)
  } catch (error) {
    console.error('Error when try to load some TVShow Details', error)
  }
})
</script>

<style scoped lang="scss">
@use '../assets/styles/serie_details.scss';
</style>
