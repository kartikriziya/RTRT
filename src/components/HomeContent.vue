<script setup></script>
<template>
  <div class="row" id="content">
    <div class="col-12">
      <img src="../assets/golden_spoon.jpg" id="logoWrapper" height="236" width="229" alt="" />
    </div>
    <div class="col-12">
      <router-link class="nav-link" id="reserveBtn" :to="{ name: 'reservieren' }"
        >jetzt reservieren</router-link
      >
    </div>
  </div>
</template>
<style scoped>
#content {
  /* background-color: red; */
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#logoWrapper {
  margin: 0 0 0 20px;
  border-radius: 50% 50%;
}
#reserveBtn {
  background-color: transparent;
  color: #fff;
  text-decoration: none;
  margin: 50% 20px 0 0;
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
</style>
