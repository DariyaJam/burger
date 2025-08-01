<template>
  <template v-if="getIngredientsState()" v-for="(items, type) in ingredientsStore.ingredients" :key="type">
    <h3 class="ingredients-list-title">
      {{ ingredientsStore.ingredientsTitles[type] }}</h3>
    <!--      <ul class="ingredients-list" v-element-visibility="(isVisible) => handleVisibilityChange(type, isVisible)">-->
    <ul class="ingredients-list">
      <template v-for="item in items" :key="item._id">
        <li class="ingredients-list-item">
          <a class="ingredient-link">
            <img class="ingredient-img" :src="item.image" :alt="item.name">
            <div class="ingredient-price-container">
              <p class="ingredient-price">{{ item.price }}</p>
              <img class="price-icon" src="../../images/priceIcon.svg" alt="Валюта">
            </div>
            <p class="ingredient-title ingredients-text-settings">{{ item.name }}</p>
          </a>
          <div class="ingredient-add-button-container">
            <button class="ingredient-add-button" @click="addIngredientFunction(type, item._id)">
              <img class="add-icon" src="../../images/addIcon.svg" alt="Добавить">
              <span class="add-text ingredients-text-settings">Добавить</span>
            </button>
          </div>
        </li>
      </template>
    </ul>
  </template>
  <template v-else>
    <div class="busy">
      <Loader />
    </div>
  </template>

</template>

<script setup lang="ts">

import { useIngredientsData } from '@/store/ingredients-store.ts'
import {useBurger} from '@/store/constructor-store.ts'
import Loader from '@/images/svg/Loader.vue'


const ingredientsStore = useIngredientsData()
const getIngredientsState = () => {
  if (ingredientsStore.ingredients) {
    return true
  } else {
    return false
  }
}

const burgerStore = useBurger()

function addIngredientFunction(type, id) {
  burgerStore.addIngredient(type, id)
  console.log('добавить ингридиент',type, id)
}


/*import { vElementVisibility } from '@vueuse/components'


const emit = defineEmits<{
  (e: 'typeVisible', payload: { type: string }): void
  (e: 'typeHidden', payload: { type: string }): void
  (e: 'changeVisibility', payload: { type: string, isVisible: boolean }): void
}>()
const props = defineProps<{ ingredients: Ingredient[] }>()

const getListByType = (type: string) => Array.from(ingredients.value).filter(el.type = type)

const { search, categoryTitles, ingredientsTypeList } = useIngredients(props.ingredients)

const setIntersected = (type: string) => {
  emit('typeVisible', { type })
}


function handleVisibilityChange(type: string, isVisible: boolean) {
  emit('changeVisibility', { type, isVisible })
}*/
</script>

<style scoped>

@import url('@/styles/Ingredients/IngredientsList.css');

</style>








