<script setup></script>
<template>
  <video autoplay muted loop id="bgVideo">
    <source src="../assets/test.mp4" type="video/mp4" />
    <!-- <source src="../assets/test_dining.mp4" type="video/mp4" /> -->
    <!-- <source src="../assets/people.mp4" type="video/mp4" /> -->
    <!-- <source src="../assets/high_dining.mp4" type="video/mp4" /> -->
    <!-- <source src="../assets/dining.mp4" type="video/mp4" /> -->
    Your browser does not support HTML5 video.
  </video>
</template>
<style scoped>
video {
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  object-fit: fill;

  animation: 1.2s ease-out 0s 1 slideUp;
}

@keyframes slideUp {
  0% {
    transform: translateY(20vh);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
