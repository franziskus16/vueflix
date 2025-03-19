<template>
  <header class="header">
    <div class="header__logo-nav">
      <h1 class="header__logo">
        <router-link class="header__logo-item" to="/">VUEFLIX</router-link>
      </h1>
      <button
        class="hamburger"
        @click="toggleMenu"
        aria-label="Toggle navigation"
      >
        <span class="hamburger__line" :class="{ 'is-open': isMenuOpen }"></span>
        <span class="hamburger__line" :class="{ 'is-open': isMenuOpen }"></span>
        <span class="hamburger__line" :class="{ 'is-open': isMenuOpen }"></span>
      </button>
      <nav :class="['header__nav', { 'is-open': isMenuOpen }]">
        <router-link class="header__nav-item" to="/" @click="closeMenu"
          >HOME</router-link
        >
        <router-link class="header__nav-item" to="/movies" @click="closeMenu"
          >MOVIES</router-link
        >
        <router-link class="header__nav-item" to="/series" @click="closeMenu"
          >TV SHOWS</router-link
        >
      </nav>
    </div>

    <div class="header__user-actions">
      <router-link class="header__nav-item" to="/subscription"
        >Subscribe</router-link
      >
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style lang="scss" scoped>
@use './styles.scss';
</style>
