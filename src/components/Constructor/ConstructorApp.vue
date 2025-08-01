<template>
  <div class="constructor-app">
    <ConstructorLayer
      v-for="layer in burgerStore.burger"
      :key="layer.code"
      :code="layer.code"
    >
      {{ layer }}
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
import { useBurger } from '@/store/constructor-store.ts'
import { onMounted, watch } from 'vue'
const burgerStore = useBurger()
console.log('my burger', burgerStore.myBurger) // всё ОК

onMounted(() => {
  console.log('Constructor burger mounted', burgerStore.burger)
})

</script>

<style scoped>

@import url('@/styles/Constructor/ConstructorApp.css');

</style>