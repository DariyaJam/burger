<template>
  <div class="constructor-app">
    {{ burgerStore.burger }}
    <ConstructorLayer
      v-for="layer in burgerStore.burger"
      :key="layer.code"
      :code="layer.code"
    >

    </ConstructorLayer>
    <div class="order-container">
      <div class="total-price-container">
        <p class="total-price">{{ burgerStore.getBurgerPrice() }}</p>
        <img class="price-icon" src="@/images/priceIcon.svg" alt="Валюта">
      </div>
      <button class="order-button" :disabled="!burgerStore.burgerComplete()">
        Оформить заказ
      </button>
      <template v-if="orderProcessModalActive">
        <div class="order-container"></div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import ConstructorLayer from '@/components/Constructor/ConstructorLayer.vue'
import { useBurger } from '@/store/constructor-store.ts'
import { onBeforeMount, onMounted, watch } from 'vue'
import { useIngredientsData } from '@/store/ingredients-store.ts'

const burgerStore = useBurger()
const ingredientStore = useIngredientsData()

const orderProcessModalActive = ref(false)


onBeforeMount(async () => {
  await burgerStore.initBurger()
  console.log(burgerStore.burger)
})

onMounted(async () => {
  console.log('Constructor burger mounted', burgerStore.burger)
  console.log('Бургер', burgerStore.burger)
})

</script>

<style scoped>

@import url('@/styles/Constructor/ConstructorApp.css');

</style>