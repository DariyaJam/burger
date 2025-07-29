<template>
  <h3 class="ingredients-list-title"></h3>
  <ul class="ingredients-list">
    <li class="ingredients-list-item-error" style="display: none">
    </li>
    <li class="ingredients-list-item">
      <a class="ingredient-link">
        <img class="ingredient-img">
        <div class="ingredient-price-container">
          <p class="ingredient-price"></p>
          <img class="price-icon" src="../../images/priceIcon.svg" alt="Валюта">
        </div>
        <p class="ingredient-title ingredients-text-settings"></p>
      </a>
      <div class="ingredient-add-button-container">
        <button class="ingredient-add-button">
          <img class="add-icon" src="../../images/addIcon.svg" alt="Добавить">
          <span class="add-text ingredients-text-settings">Добавить</span>
        </button>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">

</script>

<style scoped>

@import url('@/styles/Ingredients/IngredientsList.css');

</style>








