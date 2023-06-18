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
          <input type="date" id="datePicker" />
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
                    {{ reservation.Id }}
                    <input
                      type="text"
                      :id="reservation.Id"
                      :value="reservation.Id"
                      @click="reservationAction($event.target.value)"
                    />
                  </td>
                  <td id="table_row_data">{{ reservation.Name }}</td>
                  <td id="table_row_data">{{ reservation.Email }}</td>
                  <td id="table_row_data">{{ reservation.Time }}</td>
                  <td class="text-center">
                    <label id="table_row_data_action" :for="reservation.Id"
                      ><i class="fa-solid fa-check fa-2xl"></i
                    ></label>
                  </td>
                  <td class="text-center">
                    <label id="table_row_data_action" :for="reservation.Id"
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
import { ref } from 'vue'

const action_id = ref('')

// Array named 'reservationList' as const contains all Reservation of the selected Date.
const reservationList = ref([
  { Id: '1', Name: 'Kartik', Email: 'kartikriziya30721@gmail.com', Time: '14:00', Result: 0 },
  { Id: '2', Name: 'Nancy', Email: 'nancybalar132313@gmail.com', Time: '18:00', Result: 0 }
])

console.log(reservationList.value)

function reservationAction(id) {
  action_id.value = id

  let action_id_index = reservationList.value
    .map((el) => {
      return el.Id
    })
    .indexOf(action_id.value) // finds index based on the selected action_id in an array reservation_list.

  console.log('Reservation ID: ' + action_id.value + ' is on Index: ' + action_id_index)
}

// reservationList.value.push({
//   Id: 3,
//   Name: 'RTRT',
//   Email: 'rtrt@gmail.com',
//   Time: '19:00',
//   Result: 0
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
