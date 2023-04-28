<script setup>
import Navbar from './Navbar.vue'
</script>

<template>
  <header>
    <Navbar @hideHomeVideo="hideHomeVideo" />
  </header>
</template>

<style scoped>
/* header {
  min-height: calc(100vh);
} */
</style>
