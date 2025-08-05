<template>
  <form class="login-page">
<!--    <form class="login-page" ref="loginForm" method="post" action=""
          @input="onformchange"
          @change="onformchange">-->
    <h2 class="login-page-title">Вход</h2>
    <div class="login-form">
      <InputComponent :inputSettings="loginInputSettings.email"></InputComponent>
      <InputComponent :inputSettings="loginInputSettings.password"></InputComponent>
    </div>
<!--    <ButtonComponent :disabled="submitDisabled">Войти</ButtonComponent>-->
    <ButtonComponent>Войти</ButtonComponent>
    <div class="page-href-container">
      <p>Вы - новый пользователь?</p>
      <router-link class="page-href" to="/register">Зарегестрироваться</router-link>
    </div>
    <div class="page-href-container">
      <p>Забыли пароль?</p>
      <router-link class="page-href" to="/forgot-password">Восстановить пароль</router-link>
    </div>
  </form>
</template>

<script setup lang="ts">

import Input from '@/components/UI/InputComponent.vue'
import InputComponent from '@/components/UI/InputComponent.vue'
import ButtonComponent from '@/components/UI/ButtonComponent.vue'
import { ref } from 'vue'

/*const loginForm = ref(null)
const submitDisabled = ref(true)

const onformchange = (): void => {
  console.log('form valid:', loginForm?.value?.elements)
  const valid = loginForm?.value?.elements ? Array.from(loginForm?.value?.elements).reduce((isValid, element) => {
    console.log('Before', isValid, element, element.valid)
    isValid &&= element.valid
    console.log('After', isValid)
    return isValid
  }, true) : false
  console.log('form valid:', loginForm?.value)
  console.log('form valid:', valid)
  submitDisabled.value = !valid
}*/


const loginInputSettings = {
  email: {
    required: true,
    placeholder: 'E-mail',
    type: 'email',
    value: '',
    name: 'email',
    id: 'email-input',
    hasEditButton: false,
    hasVisibleButton: false
  },
  password: {
    required: true,
    placeholder: 'Пароль',
    type: 'password',
    value: '',
    name: 'password',
    id: 'password-input',
    hasEditButton: false,
    hasVisibleButton: true
  }
}
</script>

<style scoped>

@import url('@/styles/Pages/LoginPage.css');

</style>