<template>
  <div class="constructor-app">
    <ConstructorLayer  v-for="n in 3"
                       :key="n"
    >
    </ConstructorLayer>
    <div class="order-container">
      <div class="total-price-container">
        <p class="total-price">610</p>
        <img class="price-icon" src="@/images/priceIcon.svg" alt="Валюта">
      </div>
      <button class="order-button">Оформить заказ</button>
    </div>
  </div>
</template>

<script setup lang="ts">

import ConstructorLayer from '@/components/Constructor/ConstructorLayer.vue'

</script>

<style scoped>

@import url('@/styles/Constructor/ConstructorApp.css');

</style>