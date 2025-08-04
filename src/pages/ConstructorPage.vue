<template>
  <section class="page_constructor">
    <h2 class="constructor_title page_constructor-text-settings">Соберите бургер</h2>

    <div class="constructor_app-container">
      <div class="ingredients-container">
        <IngredientsNavbar />
        <div class="ingredients-list-container">
          <IngredientsList />
        </div>
      </div>
      <div class="ingredients-list-container"> <Constructor></Constructor></div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useIngredientsData } from '@/store/ingredients-store.ts'

import IngredientsList from '@/components/Ingredients/IngredientsList.vue'
import IngredientsNavbar from '@/components/Ingredients/IngredientsNavbar.vue'
import Constructor from '@/components/Constructor/ConstructorApp.vue'

const ingredientsStore = useIngredientsData()

/*if (!ingredientsStore.ingredients.length) {
  ingredientsStore.getIngredients()
}

// Следим за изменениями ингредиентов
watch(
  () => ingredientsStore.ingredients,
  (oldIngredients, newIngredients) => {
    console.log('Ингредиенты изменились:', oldIngredients, newIngredients)
  },
  { deep: true, immediate: true }
)*/
onMounted(async () => {
  setTimeout(() =>
    ingredientsStore.getIngredients(),
    500)
})

</script>

<style scoped>

@import url('@/styles/Pages/ConstructorPage.css');

</style>