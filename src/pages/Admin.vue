<template>
  <div class="container-fluid" id="admin">
    <h1 style="color: #262626">Admin</h1>
    <div class="container">
      <div class="row pt-5">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-hover table-striped">
              <thead class="table-dark">
                <tr>
                  <td scope="col" style="color: #b47501">ID</td>
                  <td scope="col" style="color: #b47501">Name</td>
                  <td scope="col" style="color: #b47501">Email</td>
                  <td scope="col" class="text-center" style="color: #b47501; font-weight: 700">
                    Arrived
                  </td>
                  <td scope="col" class="text-center" style="color: #b47501; font-weight: 700">
                    REJECT
                  </td>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr>
                  <td scope="row" style="color: #262626">1</td>
                  <td style="color: #262626">Kartik Riziya</td>
                  <td style="color: #262626">kartikriziya30721@gmail.com</td>
                  <td class="text-center" style="color: green; cursor: pointer">
                    <i class="fa-solid fa-check fa-2xl"></i>
                  </td>
                  <td class="text-center" style="color: red; cursor: pointer">
                    <i class="fa-solid fa-xmark fa-2xl"></i>
                  </td>
                </tr>
                <tr>
                  <td scope="row" style="color: #262626">1</td>
                  <td style="color: #262626">Nancy Balar</td>
                  <td style="color: #262626">nancybalar132313@gmail.com</td>
                  <td class="text-center" style="color: #b47501; cursor: pointer">
                    <i class="fa-solid fa-check fa-2xl"></i>
                  </td>
                  <td class="text-center" style="color: #b47501; cursor: pointer">
                    <i class="fa-solid fa-xmark fa-2xl"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

let action_id = 3

const reservationList = ref([
  { Id: 1, Name: 'Kartik', Email: 'kartikriziya30721@gmail.com', Result: 0 },
  { Id: 2, Name: 'Nancy', Email: 'nancybalar132313@gmail.com', Result: 0 }
])

reservationList.value.push({ Id: 3, Name: 'RTRT', Email: 'rtrt@gmail.com', Result: 0 }) // add

let action_id_index = reservationList.value
  .map((el) => {
    return el.Id
  })
  .indexOf(action_id) // finds index based on the selected action_id in an array reservation_list.

reservationList.value.splice(action_id_index, 1) // remove
reservationList.value[1].Name = 'Nancy Balar' // update
console.log(reservationList.value)
</script>
<style scoped>
#admin {
  background-color: #f4ebd9;
  min-height: calc(100vh - 151px);
}
</style>
