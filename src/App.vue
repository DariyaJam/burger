<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import IngedientItem from '@/components/IngedientItem.vue'
</script>
<template>
  <navbar></navbar>
  <section class="page_constructor">
    <h2 class="constructor_title page_constructor-text-settings">Соберите бургер</h2>
    <div class="constructor_app-container">
      <div class="constructor_app-ingredients-container">
        <div class="ingredients-navbar">
          <button class="ingredients-nav-button">
            <span class="page_constructor-text-settings" style="font-size: 16px; font-weight: 400">Булки</span>
            <div class="nav-item-label"></div>
          </button>
          <button class="ingredients-nav-button">
            <span class="page_constructor-text-settings" style="font-size: 16px; font-weight: 400">Соусы</span>
            <div class="nav-item-label"></div>
          </button>
          <button class="ingredients-nav-button">
            <span class="page_constructor-text-settings" style="font-size: 16px; font-weight: 400">Начинки</span>
            <div class="nav-item-label"></div>
          </button>
        </div>
        <div class="overflow-container">
          <div class="ingredients-menu">
            <template v-for="title in ['Булки','Соусы','Начинки']">
              <h3 class="ingredients-list-title page_constructor-text-settings">{{ title }}</h3>
              <ul class="ingredients-list">
                <template v-for="i in new Array(10)">
                  <li class="ingredient-item">
                    <a class="ingredient-item-link">
                      <img class="ingredient-item-img" src="@/images/bun-02.png" alt="Булка">
                      <div class="ingredient-item-price-container">
                        <p class="price">20</p>
                        <img class="price-icon" src="@/images/priceIcon.svg" alt="Валюта">
                      </div>
                      <p class="ingredient-item-title ingredient-item-text-settings">Краторная булка N-200i</p>
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
          </div>
        </div>
      </div>
      <div class="constructor_app-constructor-container">
        <div class="top-bun-container"></div>
        <ul class="fill-list">
          <div class="fill-list-item"></div>
        </ul>
        <div class="bottom-bun-container"></div>
        <div class="order-container">
          <div class="total-price-container">
            <p class="total-price"></p>
            <div class="total-price-icon"></div>
          </div>
          <button class="order-button"></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

@import url('@/styles/style.css');
@import url('@/styles/ConstructorPage.css');
@import url('@/styles/IngredientItem.css');

</style>
