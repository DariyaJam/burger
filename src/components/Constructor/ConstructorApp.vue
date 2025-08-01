<template>
  <div class="constructor-app">
    {{ burgerStore.burger }}
    <ConstructorLayer
      v-for="layer in burgerStore.burger"
      :key="layer.code"
      :code="layer.code"
    >
      {{ layer.elements }}
    </ConstructorLayer>
    <div class="order-container">
      <div class="total-price-container">
        <p class="total-price">{{burgerStore.calcTotalPrice()}}</p>
        <img class="price-icon" src="@/images/priceIcon.svg" alt="Валюта">
      </div>
      <button class="order-button">Оформить заказ</button>
    </div>
  </div>
</template>

<script setup lang="ts">

import ConstructorLayer from '@/components/Constructor/ConstructorLayer.vue'
import { useBurger } from '@/store/constructor-store.ts'
import { onBeforeMount, onMounted, watch } from 'vue'
import { useIngredientsData } from '@/store/ingredients-store.ts'

const burgerStore = useBurger()
const ingredientStore = useIngredientsData()

onBeforeMount(async () => {
  await burgerStore.initBurger()
  console.log(burgerStore.burger)
})

onMounted(async () => {
  console.log('Constructor burger mounted', burgerStore.burger)
  console.log('Бургер',burgerStore.burger)
})

</script>

<style scoped>

@import url('@/styles/Constructor/ConstructorApp.css');

</style>