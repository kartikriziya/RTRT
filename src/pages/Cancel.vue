<template>
  <div class="container-fluid" style="text-align: center" id="cancel">
    <div class="container">
      <div class="row pt-5">
        <div class="col-12 text-center">
          <h1 style="color: #262626">Your Reservations</h1>
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-12">
          <!-- ************************** -->
          <!-- Table with all Reservation -->
          <!-- ************************** -->
          <div class="table-responsive">
            <table class="table table-hover table-striped">
              <thead class="table-dark">
                <tr>
                  <td scope="col" id="table_col_head">ID</td>
                  <td scope="col" id="table_col_head">Date</td>
                  <td scope="col" id="table_col_head">Time</td>
                  <td scope="col" id="table_col_head">Cancel Reservation</td>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr v-for="reservation in reservationList">
                  <td scope="row" id="table_row_data" style="color: #262626">
                    {{ reservation.reservation_id }}
                    <input
                      type="text"
                      :id="reservation.reservation_id"
                      :for="reservation.reservation_id"
                      :value="reservation.reservation_id"
                      @click="cancelReservation($event.target.value)"
                      style="display: none"
                    />
                  </td>
                  <td id="table_row_data">{{ reservation.reserve_date }}</td>
                  <td id="table_row_data">{{ reservation.reserve_time }}</td>
                  <td id="table_row_data">
                  <button v-if="reservation.reservation_status != 0" class="btn" id="cancel_reservation_btn" @click="cancelReservation(reservation.reservation_id)">Cancel</button>
                  <span v-else>Cancelled</span>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <!-- End of Table -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
import axios from 'axios'

const store = inject('store')
const Base_Url = 'https://olivewood.elementfx.com'
const action_id = ref('')


const LoggedIn_Email = ref('')
LoggedIn_Email.value = JSON.parse(sessionStorage.getItem('user-email'))

onMounted(() => {
  store.state.isLoading = false
  showReservations()
})

const reservationList = ref('') 

async function showReservations() {
  let result = await axios.post(Base_Url + '/RTRT/reservationAction.php', {
    action: 'user',
    loggedInEmail: LoggedIn_Email.value
  })
  if (result.status == 200 || result.status == 201) {
    reservationList.value = result.data
    console.log(result.data)
  }

}

async function cancelReservation(id) {
  action_id.value = id
  console.log('Reservation ID: ' + action_id.value + ' and has been cancelled.' )
  let result = await axios.post(Base_Url + '/RTRT/reservationAction.php', {
    action: 'user',
    actionID: action_id.value,
    loggedInEmail: LoggedIn_Email.value
  })
  if (result.status == 200 || result.status == 201) {
    console.log(result.data)
    await showReservations();
  }
}
</script>

<style scoped>
#cancel {
  background-color: #f4ebd9;
  min-height: calc(100vh - 151px);
}
#table_col_head {
  color: #b47501;
}
#table_row_data {
  color: #262626;
}
#cancel_reservation_btn {
  --bs-btn-color: #b47501;
  --bs-btn-border-color: #b47501;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #b47501;
  --bs-btn-hover-border-color: #b47501;
  --bs-btn-focus-shadow-rgb: 25, 135, 84;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #b47501;
  --bs-btn-active-border-color: #b47501;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #b47501;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #b47501;
  --bs-gradient: none;
}
</style>
