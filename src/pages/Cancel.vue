<template>
    <div class="container-fluid" style="text-align: center " id="cancel">
      <h1 style="color: #262626">Your Reservations</h1>
      <div class="container">
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
                    <td scope="col" id="table_col_head">Cancel</td>
                  </tr>
                </thead>
                <tbody class="table-group-divider">
                  <tr v-for="reservation in reservationList">
                    <td scope="row" id="table_row_data" style="color: #262626">
                      {{ reservation.Id }}
                      <input
                        type="text"
                        :id="reservation.Id"
                        :value="reservation.Id"
                        @click="reservationAction($event.target.value)"
                        style="display: none"
                      />
                    </td>
                    <td id="table_row_data">{{ reservation.Date }}</td>
                    <td id="table_row_data">{{ reservation.Time }}</td>
                    <td id="table_row_data">
                    <button class="btn" id="cancel_reservation_btn" @click.prevent="cancelReservation(reservation.Id)">Cancel Reservation</button>
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
  import { ref, onBeforeMount, onMounted, inject } from 'vue'
  
  const store = inject('store')
  const action_id = ref('')
  const action = ref('')
  
  // onBeforeMount(() => {
  //   store.state.isLoading = true
  //   console.log('onBeforeMount isLoading : ' + store.state.isLoading)
  // })
  onMounted(() => {
    store.state.isLoading = false
    console.log('onMounted isLoading : ' + store.state.isLoading)
  })
  
  // Array named 'reservationList' as const contains all Reservation of the selected Date.
  const reservationList = ref([
    { Id: '1', Date: '01.01.2023',  Time: '14:00'},
    { Id: '2', Date: '02.02.2023',  Time: '18:00'},
    { Id: '3', Date: '22.01.2023',  Time: '14:00'},
    { Id: '4', Date: '30.02.2023',  Time: '15:00'}
  ])
  
  
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
  