<script setup></script>
<template>
  <div class="d-flex flex-column text-center justify-content-between" id="videoContent">
    <div id="wrapper">
      <img src="../assets/los.svg" id="logoWrapper" height="236" width="229" alt="" />
      <div class="mt-5" id="reserve">
        <router-link class="nav-link" id="reserveBtn" :to="{ name: 'reservation' }"
          >jetzt reservieren</router-link
        >
      </div>
    </div>

    <div class="mb-4" id="scroll">
      <span id="scroll_link">
        Esplorare
        <img src="../assets/icons/arrow_down.png" class="mt-3" id="arrow" alt="" />
      </span>
    </div>
  </div>
</template>
<style scoped>
#videoContent {
  min-height: calc(100vh - 150px);
  padding-top: 15rem;
}
#wrapper {
  position: relative;
  z-index: 1;
}
#logoWrapper {
  /* margin: 20vh 0 0 35px; */
  border-radius: 50% 50%;
}
/* #reserve {
  margin-bottom: 20vh;
} */
#reserveBtn {
  color: #fff;
  display: inline-block;
  font-size: 25px;
  font-weight: 700;
  font-family: 'trade_gothic_bdcn20', 'Roboto', Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: 46px;
  letter-spacing: calc(100px / 100);
  border: 2px solid #fff;
  border-radius: 50px;
  padding: 1px 45px 5px 45px;
  transition: 0.3s;
}
#reserveBtn:hover {
  background-color: #fff;
  color: #b47501;
  border-color: #f8b333;
}
#scroll {
  color: #fff;
  text-align: center;
  cursor: pointer;
  opacity: 0.7;
}
#scroll:hover {
  color: #b47501;
}
#scroll_link {
  font-size: 1.625rem;
  font-family: 'BoucherieCursive', cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#arrow {
  height: 25px;
  width: 25px;
}
</style>
