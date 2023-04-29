<script setup>
import { ref } from 'vue'
import HomeVideo from '../components/HomeVideo.vue'
import HomeContent from '../components/HomeContent.vue'
/*import { useRoute } from 'vue-router'
const pageName = useRoute()
console.log(pageName.fullPath)*/

const showHomeVideo = ref(true)
</script>
<template>
  <div class="container" id="home">
    <HomeVideo />
    <!-- <h1>Home</h1> -->
    <HomeContent />
  </div>
</template>
<style scoped>
/* #home {
  background-color: chartreuse;
} */
</style>
