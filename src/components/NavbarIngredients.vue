<template>
  <div class="ingredients-navbar">
    <button class="ingredients-nav-button"
            type="button"
            v-for="[sectionKey, sectionData] in Object.entries(nav)"
            :key="sectionKey"
            :class="{active:sectionData.isActive}"
    >
      <span class="navbar_ingredients-text-settings">
        {{ sectionData.title }}
      </span>
      <div class="nav-item-label" :class="{active:sectionData.isActive}" />
    </button>

  </div>
</template>

<script setup lang="ts">

const props = defineProps<{ nav: Object }>()


</script>

<style scoped>

@import url('@/styles/NavbarIngredients.css');

</style>