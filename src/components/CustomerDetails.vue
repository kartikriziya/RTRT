<template>
  <div class="row pt-5 pb-5">
    <div class="col-sm-12 ps-5 pt-3 pe-5 pb-2">
      <!-- No of People -->
      <div class="row">
        <div class="col-12 pb-5">
          <h3 style="cursor: default">No of People*</h3>
          <div
            class="row ps-2 ps-sm-4 ps-md-1 ps-lg-3 ps-xl-5 pt-2 pe-xl-5 pe-lg-3 pe-md-1 pe-sm-4 pe-2"
            id="noOfPeople"
          >
            <div v-for="People in noOfPeople1" class="col-2" id="check">
              <input
                v-model="collectPeople"
                type="radio"
                name="people"
                :id="People.id"
                :value="People.people"
                @click="disableError()"
              />
              <label :for="People.id" id="numberLabel"
                ><span id="number">{{ People.people }}</span></label
              >
            </div>
          </div>
          <div
            class="row ps-2 ps-sm-4 ps-md-1 ps-lg-3 ps-xl-5 pt-2 pe-xl-5 pe-lg-3 pe-md-1 pe-sm-4 pe-2"
            id="noOfPeople"
          >
            <div v-for="People in noOfPeople2" class="col-2" id="check">
              <input
                v-model="collectPeople"
                type="radio"
                name="people"
                :id="People.id"
                :value="People.people"
                @click="disableError()"
              />
              <label :for="People.id" id="numberLabel"
                ><span id="number">{{ People.people }}</span></label
              >
            </div>
          </div>
        </div>
      </div>
      <!-- Calender -->
      <div class="row">
        <div class="col-12 pt-5 pb-5">
          <h3 style="cursor: default">Date*</h3>
          <div class="row">
            <div
              class="col-sm-12 ps-5 mt-3"
              style="background-color: ; display: flex; justify-content: start"
            >
              <input
                v-model="collectDate"
                type="date"
                class="ms-3"
                id="datePicker"
                @click="datePickerRestrictions(), disableError()"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Time Slot's  -->
      <div class="row">
        <div class="col-sm-12 pt-5">
          <h3 style="cursor: default">Time*</h3>
          <div
            class="row ps-2 ps-sm-4 ps-md-1 ps-lg-3 ps-xl-5 pt-2 pe-xl-5 pe-lg-3 pe-md-1 pe-sm-4 pe-2"
            id="timinings"
          >
            <div v-for="Slot in timinings" class="col-2 pb-2" id="slots">
              <input
                v-model="collectTime"
                type="radio"
                name="slots"
                :id="Slot.id"
                :value="Slot.time"
                @click="disableError()"
              />
              <label :for="Slot.id" id="timeLabel"
                ><span id="time">{{ Slot.time }}</span></label
              >
            </div>
          </div>
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-12">
          <!-- Guest Details -->
          <h3 style="cursor: default">Guest</h3>
          <form
            action=""
            class="row gy-3 needs-validation pt-5 ps-3 pe-3 pb-5"
            autocomplete="off"
            id="loginForm"
          >
            <div class="row">
              <div class="col-md-1 col-lg-2 col-xl-3"></div>
              <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3 text-center">
                <div class="form-floating">
                  <input
                    v-model="guest_fname"
                    type="text"
                    class="form-control"
                    id="guest_fname"
                    placeholder="guestFname"
                  />
                  <label for="guest_fname" id="guest_labels">Firstname</label>
                </div>
              </div>
              <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3 text-center">
                <div class="form-floating">
                  <input
                    v-model="guest_lname"
                    type="text"
                    class="form-control"
                    id="guest_lname"
                    placeholder="guestLname"
                  />
                  <label for="guest_lname" id="guest_labels">Lastname</label>
                </div>
              </div>
              <div class="col-md-1 col-lg-2 col-xl-3"></div>
            </div>
          </form>
        </div>
      </div>

      <div class="row pt-3">
        <div class="col-12 text-center">
          <div class="R_Error" id="Reservation_Error">{{ Reservation_Error_msg }}</div>
        </div>
      </div>
    </div>
  </div>
  <!-- Reservation Button -->
  <div class="row pb-2">
    <div class="col-lg-4"></div>
    <div class="col-lg-4 text-center d-grid">
      <button class="btn" id="reserveBtn" @click="reserveTable()">Reserve Now</button>
    </div>
    <div class="col-lg-4"></div>
  </div>
</template>
<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const store = inject('store')
const router = useRouter()
const Base_Url = 'https://olivewood.elementfx.com'

const Reservation_Error_msg = ref('')

const props = defineProps({ sendStars: String }) // props defined in props variable as const
const collectPeople = ref('') // no. of people will be updated in collectPeople variable as const
const collectDate = ref('') // date will be updated in collectDate variable as const
const collectTime = ref('') // time will be updated in collectTime variable as const
const guest_fname = ref('')
const guest_lname = ref('')

const LogIn_Email = ref('')
LogIn_Email.value = JSON.parse(sessionStorage.getItem('user-email'))

/********************************************************************************/
/* Start of reserveTable() */
/* -> Rating Stars received => as a Prop name 'sendStars'
/********************************************************************************/

async function reserveTable() {
  console.log('reserveTable')
  const Reservation_Error = document.getElementById('Reservation_Error')
  if (collectPeople.value == '' || collectDate.value == '' || collectTime == '') {
    Reservation_Error.style.display = 'block'
    Reservation_Error_msg.value = 'Please enter missing value!'
  } else {
    store.state.isLoading = true
    let result = await axios.post(Base_Url + '/RTRT/reservation.php', {
      action: 'reserve_Table',
      props: props,
      noOfPeople: collectPeople.value,
      reserveDate: collectDate.value,
      reserveTime: collectTime.value,
      guestFname: guest_fname.value,
      guestLname: guest_lname.value,
      loginEmail: LogIn_Email.value
    })
    store.state.isLoading = false
    if (result.status == 200 || result.status == 201) {
      console.log(result.data)
      console.log(
        'Reserve Now clicked' +
          'with -> ' +
          'Stars = ' +
          props.sendStars +
          ', People = ' +
          collectPeople.value +
          ', Date = ' +
          collectDate.value +
          ', Time = ' +
          collectTime.value +
          ', gFname = ' +
          guest_fname.value +
          ', gLname = ' +
          guest_lname.value +
          ', Login Email = ' +
          LogIn_Email.value
      )

      if (result.data == 'Reservation added!') {
        console.log(result.data)
        Reservation_Error.style.display = 'none'
        router.push({ path: '/cancel' })
      } else {
        Reservation_Error.style.display = 'block'
        Reservation_Error_msg.value = 'Please try some other date and time!'
      }
    } else {
      console.log(result.data)
    }
  }
}
/* End of reserveTable()  */

const current = new Date()
const date = current.getDate()
const month = current.getMonth() + 1
const year = current.getFullYear()
const totalDays = new Date(year, month, 0).getDate()

const minDate = ref('')
//const minDate = ref(year + '-0' + month + '-0' + date)

if (month <= 9 || date <= 9) {
  if (month <= 9 && date >= 9) {
    minDate.value = year + '-0' + month + '-' + date
    //console.log(minDate.value)
  } else if (date <= 9 && month >= 9) {
    minDate.value = year + '-' + month + '-0' + date
    //console.log(minDate.value)
  } else {
    minDate.value = year + '-0' + month + '-0' + date
    //console.log(minDate.value)
  }
} else {
  minDate = year + '-' + month + '-' + date
  //console.log(minDate.value)
}

function datePickerRestrictions() {
  document.querySelector('#datePicker').setAttribute('min', minDate.value)
}

const noOfPeople1 = ref([
  { id: 'check1', people: '1' },
  { id: 'check2', people: '2' },
  { id: 'check3', people: '3' },
  { id: 'check4', people: '4' },
  { id: 'check5', people: '5' }
])

const noOfPeople2 = ref([
  { id: 'check6', people: '6' },
  { id: 'check7', people: '7' },
  { id: 'check8', people: '8' },
  { id: 'check9', people: '9' },
  { id: 'check10', people: '10' }
])

const timinings = ref([
  { id: 'eleven', time: '11:00' },
  { id: 'eleventhirty', time: '11:30' },
  { id: 'twelve', time: '12:00' },
  { id: 'twelvethirty', time: '12:30' },
  { id: 'thirteen', time: '13:00' },
  { id: 'thirteenthirty', time: '13:30' },
  { id: 'fourteen', time: '14:00' },
  { id: 'fourteenthirty', time: '14:30' },
  { id: 'fifteen', time: '15:00' },
  { id: 'fifteenthirty', time: '15:30' },
  { id: 'sixteen', time: '16:00' },
  { id: 'sixteenthirty', time: '16:30' },
  { id: 'seventeen', time: '17:00' },
  { id: 'seventeenthirty', time: '17:30' },
  { id: 'eightteen', time: '18:00' },
  { id: 'eightteenthirty', time: '18:30' },
  { id: 'nineteen', time: '19:00' },
  { id: 'nineteenteenthirty', time: '19:30' }
])
function disableError() {
  const Reservation_Error = document.getElementById('Reservation_Error')
  Reservation_Error.style.display = 'none'
}
</script>
<style scoped>
/* ********************************** */
/*            No of People            */
/* ********************************** */
#noOfPeople {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
#check {
  display: flex;
  justify-content: start;
}
#noOfPeople input {
  display: none;
}
#numberLabel {
  background-color: #f4ebd9;
  color: #b47501;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  font-size: 18px;
  font-weight: 700;
  border: 1px solid #b47501;
  border-radius: 50%;
  cursor: pointer;
}
#numberLabel:hover > #number {
  transition: 0.4s ease-out;
  transform: rotateY(360deg);
}
#noOfPeople input:checked + #numberLabel {
  background-color: #b47501;
  color: #f4ebd9;
}
#noOfPeople input:checked + #numberLabel:hover {
  color: #f8b333;
}
#noOfPeople input:not(:checked) + #numberLabel:hover {
  font-size: 20px;
  background-color: #b47501;
  color: #f4ebd9;
}
/* ********************************** */
/*             Calender           */
/* ********************************** */
#datePicker {
  color: #b47501;

  font-weight: 600;
  border: 1px solid #b47501;
  cursor: pointer;
}

/* ********************************** */
/*             Time Slot's            */
/* ********************************** */
#timinings {
  display: flex;
  flex-direction: row;
}
#slots {
  display: flex;
  justify-content: center;
}
#timinings input {
  display: none;
}
#timeLabel {
  background-color: #f4ebd9;
  color: #b47501;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100px;
  font-size: 15px;
  font-weight: 700;
  border: 1px solid #b47501;
  border-radius: 10%;
  cursor: pointer;
}
#timeLabel:hover > #time {
  transition: color 0.2s, trasnform 0.2s;
  transform: scale(1.3);
}
#timinings input:checked + #timeLabel {
  background-color: #b47501;
  color: #f4ebd9;
}
#timinings input:checked + #timeLabel:hover {
  color: #f8b333;
}
#timinings input:checked + #timeLabel > #time {
  transition: color 0.2s, trasnform 0.2s;
  transform: scale(1.3);
}
#timinings input:not(:checked) + #timeLabel:hover {
  background-color: #b47501;
  color: #f4ebd9;
}

.R_Error {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
  animation: erroBlinker 1.5s linear infinite;
}
@keyframes erroBlinker {
  50% {
    opacity: 0;
  }
}
/* ********************************** */
/*          Reservation Button        */
/* ********************************** */
#reserveBtn {
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
