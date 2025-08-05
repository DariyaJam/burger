<template>
  <div class="profile-page-container">
    <div class="profile-navbar-container">
      <div class="profile-navbar profile-page-text-settings">
        <a class="profile-navbar-item">Профиль</a>
        <a class="profile-navbar-item">История заказов</a>
        <a class="profile-navbar-item">Выход</a>
      </div>
      <p class="profile-navbar-description profile-page-text-settings">В этом разделе вы можете<br> изменить свои персональные данные</p>
    </div>
    <div class="profile-personal-data-container">
      <InputComponent></InputComponent>
      <InputComponent></InputComponent>
      <InputComponent></InputComponent>
      <div class="change-personal-data-buttons-container">
        <button class="change-personal-data-button cancel-button">Отменить</button>
        <ButtonComponent class="change-personal-data-button">Сохранить</ButtonComponent>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

import InputComponent from '@/components/UI/InputComponent.vue'
import ButtonComponent from '@/components/UI/ButtonComponent.vue'
</script>

<style scoped>

@import url('@/styles/Pages/ProfilePage.css');

</style>