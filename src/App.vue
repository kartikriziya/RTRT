<script setup>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <div id="app_header_main">
      <Header />

      <Main />
    </div>
    <div id="app_footer">
      <Footer />
    </div>
  </div>
</template>

<style scoped>
#app {
  background-color: rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 0;
}
#app_header_main {
  min-height: 100vh;
}
</style>
