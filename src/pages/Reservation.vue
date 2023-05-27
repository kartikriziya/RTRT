<script setup>
import Rating from '../components/Rating.vue'
import CustomerDetails from '../components/CustomerDetails.vue'
</script>
<template>
  <div class="container-fluid" id="reservation">
    <div class="row pt-5">
      <div class="col-md-6 col-lg-5 col-xl-4 p-5" style="background-color: aqua">
        <div class="row">
          <div
            class="col-sm-8 col-md-12"
            style="
              background-color: aquamarine;
              display: flex;
              flex-direction: row;
              justify-content: end;
            "
          >
            <h2>Olivewood restaurent</h2>
          </div>
          <div class="col-sm-4 col-md-12"></div>
          <Rating />
        </div>
      </div>
      <div class="col-md-6 col-lg-7 col-xl-8" id="tableLayout" style="background-color: brown">
        <CustomerDetails />
      </div>
    </div>
    <div class="row pt-5 pb-5">
      <div class="col-sm-2"></div>
      <div class="col-sm-8" style="background-color: blue">
        <img src="../assets/golden_spoon.jpg" alt="" id="layoutImg" />
      </div>
      <div class="col-sm-2"></div>
    </div>
  </div>
</template>
<style scoped>
#reservation {
  background-color: #f4ebd9;
  min-height: calc(100vh - 151px);
}
#layoutImg {
  height: 100%;
  width: 100%;
}
</style>
