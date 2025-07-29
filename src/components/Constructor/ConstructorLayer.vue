<template>
  <ul class="constructor-list">
    <li class="constructor-list-item">
      <div class="move-buttons-container">
        <button class="move-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#3A3A55" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.9541 10.3525C11.5164 9.88251 12.4836 9.88251 13.0459 10.3525L17.6243 14.1786C18.4585 14.8758 17.8129 16 16.5783 16H7.42166C6.1871 16 5.54152 14.8758 6.37574 14.1786L10.9541 10.3525Z"
              fill="#3A3A55"></path>
          </svg>
        </button>
        <button class="move-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#3A3A55" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.9541 15.6475C11.5164 16.1175 12.4836 16.1175 13.0459 15.6475L17.6243 11.8214C18.4585 11.1242 17.8129 10 16.5783 10H7.42166C6.1871 10 5.54152 11.1242 6.37574 11.8214L10.9541 15.6475Z"
              fill="#3A3A55"></path>
          </svg>
        </button>
      </div>
      <div class="constructor-list-item-container">
        <img class="constructor-list-item-img" src="../../images/bun-02.png" alt="Булка2">
        <p class="constructor-list-item-text constructor-list-text-settings">Краторная булка N-200i</p>
        <p class="constructor-list-item-price">20</p>
        <img class="price-icon" src="../../images/priceIcon.svg" alt="Валюта">
        <button class="delete-button">
          <img src="../../images/deleteIcon.svg" alt="Удалить">
        </button>
        <img class="locked-icon" src="../../images/lockIcon.svg" alt="Заблокировано">
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">

</script>

<style scoped>

@import url('@/styles/Constructor/ConstructorLayer.css');

</style>