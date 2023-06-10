<script setup>
import Rating from '../components/Rating.vue'
import CustomerDetails from '../components/CustomerDetails.vue'
</script>
<template>
  <div class="container-fluid" id="reservation">
    <<<<<<< HEAD
    <div class="row pt-5" style="margin-left: 7%; margin-right: 7%">
      <!-- <div class="container"> -->
      <div class="col-md-6">
        <!-- style="background-color: aqua" -->
        <div class="row">
          <div class="col-md-1"></div>
          <div
            class="col-sm-4 col-md-6"
            style="display: flex; flex-direction: row"
            id="OliveWoodRestaurant"
          >
            <h2>Olivewood Restaurant</h2>
          </div>

          <div class="col-sm-6 col-md-5" id="rating">
            <Rating />
          </div>

          <!-- <div class = "col-md-1"> </div> -->
        </div>
        <div class="row">
          <div class="col-sm-12">
            <!-- style="background-color: blue" -->
            <img src="../assets/table5.png" alt="" id="layoutImg" />
          </div>
        </div>
      </div>
      <div class="col-md-6" id="tableLayout">
        <!-- style="background-color: brown" -->
        <CustomerDetails />
      </div>
    </div>
    =======
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
          <!-- Emit named '@getStars' called hier from 'Rating.vue' and
             received Stars passes to a function name 'getStars'
              as a Parameter in this same page Reservation.vue -->
          <Rating @getStars="getStars" />
        </div>
      </div>
      <div class="col-md-6 col-lg-7 col-xl-8" id="tableLayout" style="background-color: brown">
        <!-- passing 'sendStars' as a Prop name ':sendStars' to CustomerDetails.vue -->
        <CustomerDetails :sendStars="sendStars" />
      </div>
    </div>
    <div class="row pt-5 pb-5">
      <div class="col-sm-2"></div>
      <div class="col-sm-8" style="background-color: blue">
        <img src="../assets/golden_spoon.jpg" alt="" id="layoutImg" />
      </div>
      <div class="col-sm-2"></div>
    </div>
    >>>>>>> parent of fb07804 (script tag position changed)
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import Rating from '../components/Rating.vue'
import CustomerDetails from '../components/CustomerDetails.vue'
</script>

<style scoped>
#reservation {
  /* background-color: #f4ebd9; */
  min-height: calc(100vh - 151px);
}
#layoutImg {
  height: 100%;
  width: 100%;
}
#OliveWoodRestaurant {
  font-family: Rockwell;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
#rating {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
