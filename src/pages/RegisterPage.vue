<template>
  <div class="register-page">
    <h2 class="register-page-title">Регистрация</h2>
    <form class="register-form">
      <InputComponent></InputComponent>
      <InputComponent></InputComponent>
      <InputComponent></InputComponent>
    </form>
    <ButtonComponent>Зарегестрироваться</ButtonComponent>
    <div class="page-href-container">
      <p>Уже зарегистрированы?</p>
      <router-link class="page-href" to="/login">Войти</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">

import InputComponent from '@/components/UI/InputComponent.vue'
import ButtonComponent from '@/components/UI/ButtonComponent.vue'
</script>

<style scoped>

@import url('@/styles/Pages/RegisterPage.css');

</style>