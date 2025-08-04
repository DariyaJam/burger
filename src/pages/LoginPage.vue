<template>
  <div class="login-page">
    <h2 class="login-page-title">Вход</h2>
    <form class="login-form">
      <InputComponent></InputComponent>
      <InputComponent></InputComponent>
    </form>
    <ButtonComponent>Войти</ButtonComponent>
    <div class="page-href-container">
      <p>Вы - новый пользователь?</p>
      <router-link class="page-href" to="/register">Зарегестрироваться</router-link>
    </div>
    <div class="page-href-container">
      <p>Забыли пароль?</p>
      <router-link class="page-href" to="/forgot-password">Восстановить пароль</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">

import Input from '@/components/UI/InputComponent.vue'
import InputComponent from '@/components/UI/InputComponent.vue'
import ButtonComponent from '@/components/UI/ButtonComponent.vue'

const loginInputs = {
  email: {
    placeholder: 'E-mail',
    type: 'email',
    value: '',
    hasEditButton: false,
    hasVisibleButton: false,
  },
  password: {
    placeholder: 'Пароль',
    type: 'password',
    value: '',
    hasEditButton: false,
    hasVisibleButton: true,
  }
}
</script>

<style scoped>

@import url('@/styles/Pages/LoginPage.css');

</style>