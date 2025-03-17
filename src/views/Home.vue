<template>
    <div class="home">
        <HeroSection />
        <MovieHomeSection/>
        <SerieHomeSection/>
    </div>
  </template>

<script setup lang="ts">
import HeroSection from "../components/home/HeroSection.vue";
import MovieHomeSection from "../components/home/MovieHomeSection.vue";
import SerieHomeSection from "../components/home/SerieHomeSection.vue";
</script>