<script setup></script>
<template>
  <video autoplay muted loop id="bgVideo">
    <source src="../assets/test.mp4" type="video/mp4" />
    Your browser does not support HTML5 video.
  </video>
</template>
<style scoped>
video {
  position: absolute;
  min-height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  object-fit: fill;
}
</style>
