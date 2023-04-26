<script setup>
import Navbar from './Navbar.vue'
</script>
<template>
  <header>
    <video autoplay muted loop id="bgVideo">
      <source src="../assets/test.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
    <Navbar />
  </header>
</template>
<style scoped>
header {
  min-height: calc(100vh);
}
#bgVideo {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
}
</style>
