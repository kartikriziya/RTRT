<template>
  <RouterView />
</template>
<script setup>
import { inject } from 'vue'
import { RouterView } from 'vue-router'
const store = inject('store')
</script>
<style scoped></style>
