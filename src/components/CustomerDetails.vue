<script setup>
import { ref } from 'vue'

const count = ref('')

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
    console.log(minDate.value)
  } else if (date <= 9 && month >= 9) {
    minDate.value = year + '-' + month + '-0' + date
    console.log(minDate.value)
  } else {
    minDate.value = year + '-0' + month + '-0' + date
    console.log(minDate.value)
  }
} else {
  minDate = year + '-' + month + '-' + date
  console.log(minDate.value)
}

function datePickerRestrictions() {
  document.querySelector('#datePicker').setAttribute('min', minDate.value)
}

const noOfPeople = ref([
  { id: 'check2', people: '2' },
  { id: 'check4', people: '4' },
  { id: 'check6', people: '6' },
  { id: 'check8', people: '8' },
  { id: 'check10', people: '10' },
  { id: 'check10+', people: '10+' }
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
</script>
<template>
  <div class="row pb-5">
    <div class="col-sm-12 ps-5 pt-3 pe-5 pb-2" id="details" style="background-color: burlywood">
      <!--                     -->
      <!--    No of People     -->
      <!--                     -->
      <div class="row">
        <div class="col-12 pb-2" style="background-color: cadetblue">
          <h3>No of People</h3>
          <div
            class="row ps-2 ps-sm-4 ps-md-1 ps-lg-3 ps-xl-5 pt-2 pe-xl-5 pe-lg-3 pe-md-1 pe-sm-4 pe-2"
            id="noOfPeople"
          >
            <div
              v-for="People in noOfPeople"
              class="col-2"
              id="check"
              style="background-color: darkred"
            >
              <input type="radio" name="people" :id="People.id" value="2" />
              <label :for="People.id" id="numberLabel"
                ><span id="number">{{ People.people }}</span></label
              >
            </div>
          </div>
        </div>
        <!--                     -->
        <!--        Calender     -->
        <!--                     -->
        <div class="col-12 pt-2" style="background-color: blueviolet">
          <div class="row" style="background-color: cornsilk">
            <div class="col-sm-3"></div>
            <div
              class="col-sm-6"
              style="background-color: coral; display: flex; justify-content: center"
            >
              <h4>Mai / 2023</h4>
            </div>
            <div class="col-sm-3"></div>
          </div>
          <div class="row" style="background-color: cornsilk">
            <div class="col-sm-3"></div>
            <div
              class="col-sm-6"
              style="background-color: coral; display: flex; justify-content: center"
            >
              <input type="date" id="datePicker" @click="datePickerRestrictions()" />
            </div>
            <div class="col-sm-3"></div>
          </div>
        </div>
      </div>
    </div>
    <!--                     -->
    <!--      Time Slot's    -->
    <!--                     -->
    <div class="col-sm-12 pt-3 pb-2" style="background-color: darkgray">
      <h2>Time Slot's</h2>
      <div class="row pt-2" id="timinings">
        <div
          v-for="Slot in timinings"
          class="col-2 col-md-3 col-lg-2 col-xl-3 col-xxl-2 pt-2 pb-3"
          id="slots"
          style="background-color: darkolivegreen"
        >
          <input type="radio" name="slots" :id="Slot.id" :value="Slot.time" />
          <label :for="Slot.id" id="timeLabel"
            ><span id="time">{{ Slot.time }}</span></label
          >
        </div>
      </div>
    </div>
  </div>
  <!-- Reservation Button -->
  <div class="row pb-2">
    <div class="col-lg-4"></div>
    <div class="col-lg-4 text-center d-grid">
      <button class="btn" id="reserveBtn">Reserve Now</button>
    </div>
    <div class="col-lg-4"></div>
  </div>
</template>
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
  justify-content: center;
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
