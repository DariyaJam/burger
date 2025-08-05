<template>

  <button

    type="button"
    class="my-button button-component button-component-text-settings">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'

const attrs = useAttrs()

</script>

<style scoped>

@import url('@/styles/UI/ButtonComponent.css');


</style>