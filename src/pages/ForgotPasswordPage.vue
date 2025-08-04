<template>
  <div class="forgot-password-page">
    <h2 class="forgot-password-page-title">Восстановление пароля</h2>
    <form class="forgot-password-form">
      <InputComponent></InputComponent>
    </form>
    <ButtonComponent>Восстановить</ButtonComponent>
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

@import url('@/styles/Pages/ForgotPasswordPage.css');

</style>