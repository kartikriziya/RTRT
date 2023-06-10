<script setup></script>
<template>
  <video autoplay muted loop id="bgVideo">
    <!-- <source src="../assets/test.mp4" type="video/mp4" /> -->
    <!-- <source src="../assets/test_dining.mp4" type="video/mp4" /> -->
    <!-- <source src="../assets/people.mp4" type="video/mp4" /> -->
    <!-- <source src="../assets/high_dining.mp4" type="video/mp4" /> -->
    <!-- <source src="../assets/dining.mp4" type="video/mp4" /> -->
    <!-- <source src="../assets/dev.mp4" type="video/mp4" /> -->
    <source src="../assets/bg_video.mp4" type="video/mp4" />
    Your browser does not support HTML5 video.
  </video>
</template>
<style scoped>
video {
  height: 100vh;
  width: 100%;
  object-fit: fill;
  filter: contrast(300%);
  filter: blur(8px);
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
