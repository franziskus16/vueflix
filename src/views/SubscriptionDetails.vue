<template>
  <section>
    <h1>Pricing Options</h1>
    <p>Choose the plan that’s right for you</p>

    <div class="pricing-cards">
      <div
        v-for="(plan, index) in plans"
        :key="index"
        class="pricing-card"
        :class="{ active: activeCard === index }"
        @mouseover="setActiveCard(index)"
      >
        <div class="card">
          <div v-if="plan.isBest" class="ribbon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"
              />
            </svg>
            <div>best</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h3 class="card-title">{{ plan.title }}</h3>
          <hr class="first" />
          <p class="card-price"><span>$</span>{{ plan.price }}</p>

          <ul class="features">
            <li v-for="(feature, i) in plan.features" :key="i">
              {{ feature }}
            </li>
          </ul>
          <hr class="second" />
          <a href="#" class="card-btn">I want it</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { plansMock } from '../utils/data'

const plans = ref(plansMock)

const activeCard = ref(1)
const setActiveCard = (index: number) => {
  activeCard.value = index
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/subscription.scss';
</style>
