<script setup>
import { ref } from 'vue'
import HomeVideo from '../components/HomeVideo.vue'
import HomeContent from '../components/HomeContent.vue'
import Menu from '../components/Menu.vue'
/*import { useRoute } from 'vue-router'
const pageName = useRoute()
console.log(pageName.fullPath)
*/
</script>
<template>
  <div class="sections" id="homeSection1">
    <div id="videoContainer">
      <HomeVideo />
    </div>
    <div class="container">
      <HomeContent />
    </div>
  </div>

  <div class="sections" id="homeSection2">
    <div class="container pt-5 pb-5">
      <!-- <div class="menu text-center pt-5">
        <h1>Menu</h1>
      </div> -->
      <Menu />
    </div>
  </div>
</template>
<style scoped>
#homeSection1 {
  height: calc(100vh - 151px);
}
#videoContainer {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
#homeSection2 {
  background-color: coral;
  min-height: 100vh;
}
</style>
