<template>
  <div class="container flex flex-col mt-5 text-center">
    <h1 class="text-3xl" style="color: #b47501"><b> 404 Error</b></h1>
    <h2 class="text-3xl mb-5">This is not the web page you are looking for.</h2>
    <router-link class="btn" id="backToHome" :to="{ name: 'home' }">Back to Home</router-link>
  </div>
</template>

<script setup>
import { onMounted, inject } from 'vue'
const store = inject('store')
onMounted(() => {
  store.state.isLoading = false
})
</script>

<style>
#backToHome:hover {
  color: #f4ebd9;
}
#backToHome {
  --bs-btn-color: #b47501;
  --bs-btn-border-color: #b47501;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #b47501;
  --bs-btn-hover-border-color: #b47501;
  --bs-btn-focus-shadow-rgb: 25, 135, 84;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #b47501;
  --bs-btn-active-border-color: #b47501;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #b47501;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #b47501;
  --bs-gradient: none;
}
</style>
