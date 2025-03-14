<script setup lang="ts">
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'
</script>

<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>
