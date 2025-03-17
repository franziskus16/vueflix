<template>
  <div v-if="serie">
    <h1>{{ serie.name }}</h1>
    <img
      :src="'https://image.tmdb.org/t/p/w1280' + serie.backdrop_path"
      alt="Imagen de fondo"
      class="background"
    />
    <p><strong>Resumen:</strong> {{ serie.overview }}</p>
    <p><strong>Fecha de estreno:</strong> {{ serie.first_air_date }}</p>
    <p><strong>Valoración:</strong> {{ serie.vote_average.toFixed(1) }}</p>
  </div>

  <div v-else>
    <p>Cargando detalles de la serie...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getSerieById } from "../services/series";

const route = useRoute();
const serie = ref<any>(null);

onMounted(async () => {
  try {
    const serieId = Number(route.params.id);
    serie.value = await getSerieById(serieId);
  } catch (error) {
    console.error("Error when try to charger some TVShow Details", error);
  }
});
</script>


<style scoped lang="scss">
@import "../assets/styles/serie_details.scss";
</style>