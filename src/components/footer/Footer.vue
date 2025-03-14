<template>
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__top">
          <nav class="footer__nav">
            <a href="#" class="footer__nav-item">CINE</a>
            <a href="#" class="footer__nav-item">SERIES</a>
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
  @import "./styles.scss";
  </style>