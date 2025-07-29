<template>
  <section class="page_constructor">
    <h2 class="constructor_title page_constructor-text-settings">Соберите бургер</h2>
    <div class="constructor_app-container">
      <div class="ingredients-container">

        <IngredientsNavbar
     >
        </IngredientsNavbar>
        <div class="ingredients-list-container">
          <IngredientsList
          ></IngredientsList>
        </div>
      </div>
      <Constructor></Constructor>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue"
import { getIngredientsApi } from '@/api/api.ts'
import { useIngredientsData } from '@/store/ingredients-store.ts'

import IngredientsList from '@/components/Ingredients/IngredientsList.vue'
import IngredientsNavbar from '@/components/Ingredients/IngredientsNavbar.vue'
import Constructor from '@/components/Constructor/ConstructorApp.vue'

const store = useIngredientsData();

const data = store.ingredientsDataApi;
console.log(data)

/*onMounted(async() => {
  const ingredients = await getIngredientsApi();
 console.log(ingredients)
})*/





</script>

<style scoped>

@import url('@/styles/Pages/ConstructorPage.css');

</style>