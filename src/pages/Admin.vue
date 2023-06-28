<template>
  <div class="container-fluid" id="admin">
    <h1 style="color: #262626">Admin</h1>
    <div class="container">
      <div class="row">
        <!-- Date Picker to get all Reservation of the respectively Date. -->
        <div class="col-8 text-end">
          <h4 style="font-weight: 700">
            Select a Date to see all Reservation on respectively Date.
          </h4>
        </div>
        <div class="col-4 text-start">
          <input
            v-model="collectDate"
            type="date"
            id="datePicker"
            @click="datePickerRestrictions()"
            @change="showReservations()"
          />
        </div>
        <!-- End of Date Picker -->
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
                  <td scope="col" id="table_col_head">Name</td>
                  <td scope="col" id="table_col_head">Email</td>
                  <td scope="col" id="table_col_head">Time</td>
                  <td scope="col" id="table_col_head" class="text-center"><b>ARRIVED</b></td>
                  <td scope="col" id="table_col_head" class="text-center"><b>CANCEL</b></td>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr v-for="reservation in reservationList">
                  <td scope="row" id="table_row_data" style="color: #262626">
                    {{ reservation.reservation_id }}
                    <input
                      type="text"
                      :id="reservation.reservation_id"
                      :value="reservation.reservation_id"
                      @click="reservationAction($event.target.value)"
                      style="display: none"
                      :disabled="reservation.reservation_status"
                    />
                  </td>
                  <td id="table_row_data">
                    {{ reservation.guest_fname + ' ' + reservation.guest_lname }}
                  </td>
                  <td id="table_row_data">{{ reservation.email }}</td>
                  <td id="table_row_data">{{ reservation.reserve_time }}</td>
                  <td class="text-center">
                    <label
                      id="table_row_data_action"
                      :for="reservation.reservation_id"
                      @click="arrived(true)"
                      :style="[
                        reservation.reservation_status == 1
                          ? { color: 'green', cursor: 'not-allowed' }
                          : {},
                        reservation.reservation_status == 0 ? { display: 'none' } : {}
                      ]"
                      ><i class="fa-solid fa-check fa-2xl"></i
                    ></label>
                  </td>
                  <td class="text-center">
                    <label
                      id="table_row_data_action"
                      :for="reservation.reservation_id"
                      @click="cancel(false)"
                      :style="[
                        reservation.reservation_status == 0
                          ? { color: 'red', cursor: 'not-allowed' }
                          : {},
                        reservation.reservation_status == 1 ? { display: 'none' } : {}
                      ]"
                      ><i class="fa-solid fa-xmark fa-2xl"></i
                    ></label>
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

const collectDate = ref('')
const action = ref('')
const action_id = ref('')

onMounted(() => {
  store.state.isLoading = false
})

// Array named 'reservationList' as const contains all Reservations of the selected Date.
const reservationList = ref('')

async function showReservations() {
  // reservationList.value.push(
  //   { Id: '1', Name: 'Kartik', Email: 'kartikriziya30721@gmail.com', Time: '14:00', Action: 0 },
  //   { Id: '2', Name: 'Nancy', Email: 'nancybalar132313@gmail.com', Time: '18:00', Action: 0 }
  // ) // add new data to an Array 'reservationList'
  let result = await axios.post(Base_Url + '/admin.php', {
    date: collectDate.value
  })
  if (result.status == 200 || result.status == 201) {
    reservationList.value = result.data
    //console.log(reservationList.value)
  }
}

function arrived(boolean) {
  action.value = boolean
}
function cancel(boolean) {
  action.value = boolean
}
async function reservationAction(id) {
  action_id.value = id
  console.log('Reservation ID: ' + action_id.value + ' and has been: ' + action.value)
}

const current = new Date()
const date = current.getDate()
const month = current.getMonth() + 1
const year = current.getFullYear()
const totalDays = new Date(year, month, 0).getDate()

const minDate = ref('')

if (month <= 9 || date <= 9) {
  if (month <= 9 && date >= 9) {
    minDate.value = year + '-0' + month + '-' + date
  } else if (date <= 9 && month >= 9) {
    minDate.value = year + '-' + month + '-0' + date
  } else {
    minDate.value = year + '-0' + month + '-0' + date
  }
} else {
  minDate = year + '-' + month + '-' + date
}

function datePickerRestrictions() {
  document.querySelector('#datePicker').setAttribute('min', minDate.value)
}

// const reservationList = ref([
//   { Id: '1', Name: 'Kartik', Email: 'kartikriziya30721@gmail.com', Time: '14:00', Result: 0 },
//   { Id: '2', Name: 'Nancy', Email: 'nancybalar132313@gmail.com', Time: '18:00', Result: 0 }
// ])

// let action_id_index = reservationList.value
//     .map((el) => {
//       return el.Id
//     })
//     .indexOf(action_id.value) // finds index based on the selected action_id in an array reservation_list.

//   reservationList.value.splice(action_id_index, 1)

// reservationList.value.push({
//   Id: 3,
//   Name: 'RTRT',
//   Email: 'rtrt@gmail.com',
//   Time: '19:00',
//   Action: 0
// }) // add new data to an Array 'reservationList'

//reservationList.value.splice(action_id_index, 1) // remove data based on 'action_id_index' from an Array 'reservationList'

//reservationList.value[action_id_index].Name = 'Nancy Balar' // update data based on 'action_id_index' in an Array 'reservationList'
</script>
<style scoped>
#admin {
  background-color: #f4ebd9;
  min-height: calc(100vh - 151px);
}
#datePicker {
  color: #b47501;
  font-weight: 600;
  border: 1px solid #b47501;
  cursor: pointer;
}

#table_col_head {
  color: #b47501;
}
#table_row_data {
  color: #262626;
}
#table_row_data_action {
  color: #b47501;
  cursor: pointer;
}
</style>
