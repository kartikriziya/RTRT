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
  position: relative;
}
#app_header_main {
  min-height: 100vh;
}
#app_footer {
  background-color: red;
}
</style>
