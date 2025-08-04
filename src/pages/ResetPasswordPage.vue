<template>
  <div class="reset-password-page">
    <h2 class="reset-password-page-title">Восстановление пароля</h2>
    <form class="reset-password-form">
      <InputComponent></InputComponent>
      <InputComponent></InputComponent>
    </form>
    <ButtonComponent>Сохранить</ButtonComponent>
    <div class="page-href-container">
      <p>Вспомнили пароль?</p>
      <router-link class="page-href" to="/login">Войти</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">

import InputComponent from '@/components/UI/InputComponent.vue'
import ButtonComponent from '@/components/UI/ButtonComponent.vue'
</script>

<style scoped>

@import url('@/styles/Pages/ResetPasswordPage.css');

</style>