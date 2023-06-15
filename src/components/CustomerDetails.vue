<script setup>
import { ref } from 'vue'

const count = ref('')

const current = new Date()
const date = current.getDate()
const month = current.getMonth() + 1
const year = current.getFullYear()
const totalDays = new Date(year, month, 0).getDate()

const minDate = ref(year + '-0' + month + '-0' + date)
console.log(minDate.value)

function test() {
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
            <div v-for="People in noOfPeople" class="col-2" id="check">
              <!-- style="background-color: darkred" -->
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

          
          <div class="row" style="background-color:#fff" id="clock">
            <div class="col-sm-3"></div>
            <div
              class="col-sm-6"
              style="background-color: #fff; display: flex; justify-content: center"
            >
              <input type="date" id="datePicker" @click="test()" />
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
          <!-- style="background-color: darkolivegreen" -->
          <input type="radio" name="slots" :id="Slot.id" :value="Slot.time" />
          <label :for="Slot.id" id="timeLabel"
            ><span id="time" style="color: #000">{{ Slot.time }}</span></label
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

#clock{
  font-size: 15px;
  color: #f8b333;
  /* margin-right: 5px; */
  margin-top: 15px;
}

/* changing border radius of the clock */
#datePicker{
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
