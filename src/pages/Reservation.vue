<template>
  <div class="container-fluid" id="reservation">
    <div class="row pt-5">
      <div class="col-lg-6 p-5">
        <div class="row">
          <div class="col-sm-7 col-lg-8 col-xl-6">
            <h2 style="cursor: default"><b>Olivewood restaurent</b></h2>
          </div>
          <!-- Emit named '@getStars' called hier from 'Rating.vue' and
             received Stars passes to a function name 'getStars'
              as a Parameter in this same page Reservation.vue -->
          <Rating @getStars="getStars" />
        </div>
        <div class="row pt-5 pb-5">
          <div class="col-sm-12">
            <img src="../assets/table.png" alt="" id="layoutImg" />
          </div>
        </div>
      </div>

      <div class="col-lg-6" id="tableLayout">
        <!-- passing 'sendStars' as a Prop name ':sendStars' to CustomerDetails.vue -->
        <CustomerDetails :sendStars="sendStars" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, inject } from 'vue'
import axios from 'axios'
import Rating from '../components/Rating.vue'
import CustomerDetails from '../components/CustomerDetails.vue'

const store = inject('store')
onMounted(() => {
  store.state.isLoading = false
})

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
  color: #b47501;
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
</style>
