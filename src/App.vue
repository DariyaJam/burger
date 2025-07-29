<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import ConstructorPage from '@/pages/ConstructorPage.vue'
import OrderListPage from '@/pages/OrderFeedPage.vue'
import AppNavbar from '@/components/AppNavbar.vue'

</script>

<template>
  <AppNavbar></AppNavbar>
  <ConstructorPage></ConstructorPage>
<!--  <OrderListPage></OrderListPage>-->
</template>

<style>

@import url('styles/style.css');


</style>
