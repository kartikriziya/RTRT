<template>
  <header id="header">
    <Navbar />
  </header>
</template>

<script setup>
import { inject } from 'vue'
import Navbar from './Navbar.vue'
const store = inject('store')
</script>

<style scoped></style>
