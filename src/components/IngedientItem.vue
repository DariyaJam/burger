<template>
  <template v-for="(items, type) in ingredientsTypeList" :key="type">
    <h3 class="ingredients-list-title page_constructor-text-settings">
      {{ categoryTitles[type] }}</h3>
    <ul class="ingredients-list" v-element-visibility="(isVisible) => handleVisibilityChange(type, isVisible)">
      <template v-for="item in items" :key="item._id">
        <li class="ingredient-item">
          <a class="ingredient-item-link">
            <img class="ingredient-item-img" :src="item.image" :alt="item.name">
            <div class="ingredient-item-price-container">
              <p class="price">{{ item.price }}</p>
              <img class="price-icon" src="@/images/priceIcon.svg" alt="Валюта">
            </div>
            <p class="ingredient-item-title ingredient-item-text-settings">{{ item.name }}</p>
          </a>
          <div class="add-button-container">
            <button class="add-button">
              <img class="add-icon" src="@/images/addIcon.svg" alt="Добавить">
              <span class="add-text ingredient-item-text-settings">Добавить</span>
            </button>
          </div>
        </li>
      </template>
    </ul>
  </template>
</template>

<script setup lang="ts">
import { vElementVisibility } from '@vueuse/components'
import { type Ingredient, useIngredients } from '@/composables/useIngredients.ts'

const emit = defineEmits<{
  (e: 'typeVisible', payload: { type: string }): void
  (e: 'typeHidden', payload: { type: string }): void
  (e: 'changeVisibility', payload: { type: string, isVisible: boolean }): void
}>()
const props = defineProps<{ ingredients: Ingredient[] }>()

const { search, categoryTitles, ingredientsTypeList } = useIngredients(props.ingredients)

const setIntersected = (type: string) => {
  emit('typeVisible', { type })
  console.log('is visible', type)
}


function handleVisibilityChange(type: string, isVisible: boolean) {
  console.log(type, isVisible)
  emit('changeVisibility', { type, isVisible })
}
</script>

<style scoped>

@import url('@/styles/IngredientItem.css');

</style>








