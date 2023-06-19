<template>
  <div class="container" id="contact">
    <h1>KONTAKT</h1>
  </div>
</template>
<script setup>
import { onMounted, inject } from 'vue'
const store = inject('store')
onMounted(() => {
  store.state.isLoading = false
})
</script>
<style scoped>
#contact {
  background-color: cornflowerblue;
}
</style>
