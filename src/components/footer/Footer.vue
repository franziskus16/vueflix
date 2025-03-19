<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__top">
        <nav class="footer__nav">
          <router-link class="footer__nav-item" to="/movies">
            MOVIES
          </router-link>
          <router-link class="footer__nav-item" to="/series"
            >TV SHOWS</router-link
          >
          <a
            href="https://francescgimenez.com/"
            class="footer__nav-item"
            target="_blank"
            >WHO I AM</a
          >
        </nav>
        <div class="footer__social">
          <a href="#" class="footer__social-item">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
          <a href="#" class="footer__social-item">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a href="#" class="footer__social-item">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
          <a href="#" class="footer__social-item">
            <font-awesome-icon :icon="['fab', 'youtube']" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use './styles.scss';
</style>
