<script setup></script>
<template>
  <div class="row" id="content">
    <div class="col-12">
      <img src="../assets/golden_spoon.jpg" id="logoWrapper" height="236" width="229" alt="" />
    </div>
    <div class="col-12" id="reserve">
      <router-link class="nav-link" id="reserveBtn" :to="{ name: 'reservieren' }"
        >jetzt reservieren</router-link
      >
    </div>
    <div class="col-12" id="scroll">
      <span id="scroll_link">
        Esplorare
        <img src="../assets/icons/arrow_down.png" class="mt-3" id="arrow" alt="" />
      </span>
    </div>
  </div>
</template>
<style scoped>
#content {
  /* background-color: red; */
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 50%;
  transform: translateX(-50%);
}
#logoWrapper {
  margin: 20vh 0 0 35px;
  border-radius: 50% 50%;
}
#reserve {
  margin-bottom: 20vh;
}
#reserveBtn {
  background-color: transparent;
  color: #fff;
  text-decoration: none;
  margin: 20% 0px 0 0;
  display: inline-block;
  position: relative;
  font-size: 25px;
  font-weight: 700;
  font-family: 'trade_gothic_bdcn20', 'Roboto', Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: 46px;
  letter-spacing: calc(100px / 100);
  border: 2px solid #fff;
  border-radius: 50px;
  padding: 1px 45px 5px 45px;
  transition: 0.3s;
  opacity: 0.8;
}
#reserveBtn:hover {
  background-color: #fff;
  color: #4dba87;
  opacity: 1;
}
#scroll {
  /* background-color: red; */
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  opacity: 0.3;
}
#scroll_link {
  color: #fff;
  font-size: 1.625rem;
  font-family: 'BoucherieCursive', cursive;
  font-variant-ligatures: no-contextual;
  letter-spacing: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#arrow {
  height: 25px;
  width: 25px;
}
</style>
