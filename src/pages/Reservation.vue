<template>
  <div class="container-fluid" id="reservation">
    <div class="row pt-5">
      <div class="col-md-6 p-5" style="background-color: aqua">
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-sm-8 col-md-6" style="background-color: aquamarine">
            <h2>Olivewood restaurent</h2>
          </div>
          <div class="col-sm-4 col-md-5" id="rating" style="background-color: darkolivegreen">
            <!-- Emit named '@getStars' called hier from 'Rating.vue' and
             received Stars passes to a function name 'getStars'
              as a Parameter in this same page Reservation.vue -->
            <Rating @getStars="getStars" />
          </div>
        </div>
        <div class="row pt-5 pb-5">
          <div class="col-sm-12">
            <img src="../assets/golden_spoon.jpg" alt="" id="layoutImg" />
          </div>
        </div>
      </div>

      <div class="col-md-6" id="tableLayout" style="background-color: brown">
        <!-- passing 'sendStars' as a Prop name ':sendStars' to CustomerDetails.vue -->
        <CustomerDetails :sendStars="sendStars" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import Rating from '../components/Rating.vue'
import CustomerDetails from '../components/CustomerDetails.vue'

const sendStars = ref('') // stars will be updated after getting 'getStars()' called in 'sendStars' variable as const

/*********************************************************************************************************/
/* Start of getStars(event) 
/* -> getting Stars in a form of 'event' parameter from Rating.vue(Child) => as function name 'getStars()'
/* -> will be saved in 'sendStars' variable as const
/* -> will be passed as a Props to CustomerDetails.vue(Child) => as Prop name 'sendStars'
/*********************************************************************************************************/
function getStars(event) {
  sendStars.value = event
}
/* End of getStars(event) */
</script>

<style scoped>
#reservation {
  background-color: #f4ebd9;
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
