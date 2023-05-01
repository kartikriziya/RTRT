<script setup>
import Navbar from './Navbar.vue'
</script>

<template>
  <header id="header">
    <Navbar @hideHomeVideo="hideHomeVideo" />
  </header>
</template>

<style scoped>
/* #header {
  background-color: aqua;
} */
</style>
