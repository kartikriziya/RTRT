<script setup>
import Rating from '../components/Rating.vue'
</script>
<template>
  <div class="container-fluid" id="reservation">
    <div class="row pt-5">
      <div class="col-md-4 p-5" style="background-color: aqua">
        <div class="row">
          <div class="col-12" style="background-color: aquamarine">
            <h1>Olivewood restaurent</h1>
          </div>
          <Rating />
        </div>
      </div>
      <div class="col-md-8" id="tableLayout" style="background-color: brown"></div>
    </div>
    <div class="row pt-5">
      <div class="col-sm-1"></div>
      <div class="col-sm-5"></div>
      <div class="col-sm-4"></div>
      <div class="col-sm-5"></div>
    </div>
  </div>
</template>
<style scoped>
#reservation {
  background-color: #f4ebd9;
  min-height: calc(100vh - 151px);
}
</style>
