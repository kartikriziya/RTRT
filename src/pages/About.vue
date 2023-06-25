<template>
  <div class="container" id="about">
    <h1>ÜBER UNS</h1>
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
#about {
  background-color: coral;
}
</style>
