<template>
  <section class="page_constructor">
    <h2 class="constructor_title page_constructor-text-settings">Соберите бургер</h2>
    <div class="constructor_app-container">
      <div class="constructor_app-ingredients-container">
        <NavbarIngredients
          :nav="nav">
        </NavbarIngredients>
        <div class="overflow-container">
          <ingredientItem
            :ingredients="cardsData.data"
            @changeVisibility="updateNav"
          ></ingredientItem>
        </div>
      </div>
      <BurgerConstructor></BurgerConstructor>
    </div>
  </section>
</template>

<script setup lang="ts">
import BurgerConstructor from '@/components/BurgerConstructor.vue'
import NavbarIngredients from '@/components/NavbarIngredients.vue'
import IngredientItem from '@/components/IngedientItem.vue'
import cardsData from '@/data/cardsData.ts'
import { ref } from 'vue'
import { getNavModel, categoryTitlesData, useIngredients } from '@/composables/useIngredients.ts'

const nav = ref(getNavModel())
console.log(nav.value)


const updateNav = (payload: { type: string, isVisible: boolean }) => {
  console.log('update nav', payload)

  const oldNav = nav.value
  const newNav: Record<string, { key: string; title: string; isActive: boolean }> = {}

  let prevCurrentActiveItem: any = null
  let lastActiveItem: any = null

  Object.keys(oldNav).forEach((key: string, index) => {
    newNav[key] = { ...oldNav[key] }
    if (payload.type === key) {
      newNav[key].isActive = payload.isVisible
    }
    if (newNav[key].isActive) {
      lastActiveItem = index
      if (prevCurrentActiveItem === null) {
        prevCurrentActiveItem = index
      }
    }
  })
  nav.value = newNav
  let excluded: object = {}

  if (prevCurrentActiveItem !== null &&  lastActiveItem !==null && lastActiveItem !== prevCurrentActiveItem ) {

    if (!prevCurrentActiveItem) {
      let prevCurrentActiveItemKey = Object.keys(oldNav)[prevCurrentActiveItem]
      excluded = newNav[prevCurrentActiveItemKey]
      console.log('excluded 1', excluded  )

    } else {
      let lastActiveItemKey = Object.keys(oldNav)[lastActiveItem]
      excluded = newNav[lastActiveItemKey]
      console.log('excluded 2', excluded  )

    }
    Object.keys(newNav).forEach((key: string, index) => {
      if (newNav[key] !== excluded && newNav[key].isActive) {
        //newNav[key].isActive = false
      }
    })
  }


  nav.value = newNav
  console.log('updated nav', { ...nav.value })
  console.log('prevCurrentActiveItem', prevCurrentActiveItem)
  console.log('lastActiveItem', lastActiveItem)

}


</script>

<style scoped>

@import url('@/styles/ConstructorPage.css');

</style>