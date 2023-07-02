<template>
  <div class="row pb-5">
    <div class="col-sm-12 ps-5 pt-3 pe-5 pb-2" id="details">
      <!-- style="background-color: burlywood" -->
      <!--                     -->
      <!--    No of People     -->
      <!--                     -->
      <div class="row">
        <div class="col-12 pb-2">
          <!-- style="background-color: cadetblue" -->
          <h3 id="noOfPeople">
            <div class="col-sm-2"></div>

            <div class="col-sm-8" style="text-align: center">
              <img
                src="../assets/people1.png"
                alt="Icon"
                width="35"
                height="35"
                style="margin-right: 4px"
              />
              No. of People
            </div>

            <div class="col-sm-2"></div>
          </h3>
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
              />
              <label :for="People.id" id="numberLabel"
                ><span id="number">{{ People.people }}</span></label
              >
            </div>
          </div>
        </div>
        <!--                     -->
        <!--        Calender     -->
        <!--                     -->

        <div class="col-12 pt-4" style="background-color: #fff">
          <h3 id="noOfPeople">
            <div class="col-sm-2"></div>

            <div class="col-sm-8" style="text-align: center">
              <img
                src="../assets/calendar.png"
                alt="Icon"
                width="35"
                height="35"
                style="margin-right: 4px"
              />
              Date
            </div>

            <div class="col-sm-2"></div>
          </h3>

          <div class="row" style="background-color: #fff" id="clock">
            <div class="col-sm-3"></div>
            <div
              class="col-sm-6"
              style="background-color: #fff; display: flex; justify-content: center"
            >
              <input
                v-model="collectDate"
                type="date"
                class="ms-3"
                id="datePicker"
                @click="datePickerRestrictions()"
              />
            </div>
            <div class="col-sm-3"></div>
          </div>
        </div>
      </div>
    </div>
    <!--                     -->
    <!--      Time Slot's    -->
    <!--                     -->
    <div class="col-sm-12 pt-4 pb-2">
      <!-- style="background-color: darkgray" -->
      <h2 id="timeSlot">
        <div class="col-sm-3"></div>

        <div class="col-sm-6" style="text-align: center">
          <img
            src="../assets/time.png"
            alt="Icon"
            width="35"
            height="35"
            style="margin-right: 4px"
          />
          Time Slot's
        </div>

        <div class="col-sm-3"></div>
      </h2>
      <div class="row pt-2" id="timinings">
        <div
          v-for="Slot in timinings"
          class="col-2 col-md-3 col-lg-2 col-xl-3 col-xxl-2 pt-2 pb-3"
          id="slots"
        >
          <input v-model="collectTime" type="radio" name="slots" :id="Slot.id" :value="Slot.time" />
          <label :for="Slot.id" id="timeLabel"
            ><span id="time" style="color: #000">{{ Slot.time }}</span></label
          >
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-12" style="text-align: center">
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
      if (result.data.includes('Reservation added!')) {
        Reservation_Error.style.display = 'none'
        router.push({path: '/cancel'})
      } else {
        Reservation_Error.style.display = 'block'
        Reservation_Error_msg.value = 'Please try some other date and time!'
      }
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
  font-family: Rockwell;
  font-size: 28px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
#check {
  display: flex;
  justify-content: center;
}
#noOfPeople input {
  display: none;
}
#numberLabel {
  /* background-color: #f4ebd9; */
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  font-size: 18px;
  font-weight: 700;
  /* border: 1px solid #b47501; */
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}
#numberLabel:hover > #number {
  transition: 0.4s ease-out;
  transform: rotateY(360deg);
}
#noOfPeople input:checked + #numberLabel {
  background-color: #f8b333;
  color: #f4ebd9;
}
#noOfPeople input:checked + #numberLabel:hover {
  color: #f8b333;
}
#noOfPeople input:not(:checked) + #numberLabel:hover {
  font-size: 20px;
  background-color: #f8b333;
  /* color: #f4ebd9; */
}

/* ********************************** */
/*             Time Slot's            */
/* ********************************** */
#timeSlot {
  font-family: Rockwell;
  font-size: 28px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

#timinings {
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
}
#slots {
  display: flex;
  justify-content: center;
}
#timinings input {
  display: none;
}
#timeLabel {
  display: inline-block;
  padding: 10px 20px;
  /* background-color: #4CAF50; */
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 50px;
  /* background-color: #f4ebd9;
  color: #b47501; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100px;
  font-size: 15px;
  font-weight: 700;
  /* border: 1px solid #b47501; */
  /* border-radius: 10%; */
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

#timeLabel:hover > #time {
  transition: color 0.2s, trasnform 0.2s;
  color: #f8b333;
  transform: scale(1.3);
}
#timinings input:checked + #timeLabel {
  background-color: #f8b333;
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
  background-color: #f8b333;
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
  font-family: Rockwell;
  display: inline-block;
  padding: 10px 20px;
  background-color: #f8b333;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}
#reserveBtn:hover {
  background-color: #f7bb08;
}

#clock {
  font-size: 15px;
  color: #f8b333;
  /* margin-right: 5px; */
  margin-top: 15px;
}

/* changing border radius of the clock */
#datePicker {
  border-radius: 50px;
  border: 1px solid #fff;
  /* padding: 5px; */
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: Rockwell;
  padding: 10px 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  background-color: white;
}
</style>
