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
  <Loader />
</template>

<script setup>
import { provide } from 'vue'

import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import Loader from './components/Loader.vue'
import store from './store/store'

provide('store', store)
</script>

<style scoped>
#app {
  background-color: #fff;
  position: relative;
}
#app_header_main {
  min-height: calc(100vh - 151px);
}
#app_footer {
  background-color: #262626;
}
</style>
