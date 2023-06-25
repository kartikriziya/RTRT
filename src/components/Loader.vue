<template>
  <div class="container-fluid">
    <div v-if="store.state.isLoading" id="overlay">
      <div class="cv-spinner">
        <span class="spinner"></span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { inject, onBeforeMount, onMounted } from 'vue'

const store = inject('store')
</script>
<style scoped>
#overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.cv-spinner {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.spinner {
  width: 40px;
  height: 40px;
  border: 4px #ddd solid;
  border-top: 4px #b47501 solid;
  border-radius: 50%;
  animation: sp-anime 0.8s infinite linear;
}
@keyframes sp-anime {
  100% {
    transform: rotate(360deg);
  }
}
</style>
