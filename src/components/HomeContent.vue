<template>
  <div class="d-flex flex-column text-center justify-content-between" id="videoContent">
    <div id="wrapper">
      <img src="../assets/los.svg" id="logoWrapper" alt="" />
      <div class="mt-5" id="reserve">
        <router-link class="nav-link" id="reserveBtn" :to="{ name: 'reservation' }"
          >register now</router-link
        >
      </div>
    </div>

    <!-- <div class="mb-4" id="scroll">
      <span id="scroll_link">
        Esplorare
        <img src="../assets/icons/arrow_down.png" class="mt-3" id="arrow" alt="" />
      </span>
    </div> -->
  </div>
</template>

<script setup>
import { inject } from 'vue'
const store = inject('store')
</script>

<style scoped>
#videoContent {
  min-height: calc(100vh - 150px);
  padding-top: 10rem;
}
#wrapper {
  position: relative;
  z-index: 1;
}
#logoWrapper {
  border-radius: 50% 50%;
  height: 150px;
  width: 150px;
}
#reserveBtn {
  color: #fff;
  display: inline-block;
  font-family: 'trade_gothic_bdcn20', 'Roboto', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 28px;
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
/* #scroll {
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
} */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  #videoContent {
    padding-top: 11rem;
  }
  #logoWrapper {
    height: 165px;
    width: 165px;
  }
  #reserveBtn {
    font-size: 16px;
    line-height: 30px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  #videoContent {
    padding-top: 12rem;
  }
  #logoWrapper {
    height: 175px;
    width: 175px;
  }
  #reserveBtn {
    font-size: 17px;
    line-height: 32px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  #videoContent {
    padding-top: 13rem;
  }
  #logoWrapper {
    height: 185px;
    width: 185px;
  }
  #reserveBtn {
    font-size: 18px;
    line-height: 35px;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  #videoContent {
    padding-top: 14rem;
  }
  #logoWrapper {
    height: 200px;
    width: 200px;
  }
  #reserveBtn {
    font-size: 20px;
    line-height: 40px;
  }
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
  #videoContent {
    padding-top: 15rem;
  }
  #logoWrapper {
    height: 236px;
    width: 229px;
  }
  #reserveBtn {
    font-size: 25px;
    line-height: 46px;
  }
}
</style>
