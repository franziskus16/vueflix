<template>
  <header class="header">
    <div class="header__logo-nav">
      <h1 class="header__logo">
        <router-link class="header__logo-item" to="/">VUEFLIX</router-link>
      </h1>
      <nav class="header__nav">
        <router-link class="header__nav-item" to="/">INICIO</router-link>
        <router-link class="header__nav-item" to="/movies">
          CINE
        </router-link>
        <router-link class="header__nav-item" to="/series">
          SERIES
        </router-link>
      </nav>
    </div>

    <div class="header__user-actions">
      <router-link class="header__nav-item" to="/">Subscribe</router-link>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
