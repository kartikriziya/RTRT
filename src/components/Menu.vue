<script setup></script>
<template>
  <div class="row pb-5" style="">
    <div class="col-lg-12 text-center" id="menu">
      <h1 id="menuTxt">Menu</h1>
    </div>
  </div>
  <!--********************************************************************************************
  ||||||||||||||||||||||||||||||||||||||||   Food Items   ||||||||||||||||||||||||||||||||||||||||
  *********************************************************************************************-->
  <div class="row mt-5">
    <!-- Item 1 -->
    <div class="col-sm-4 col-md-4 col-lg-3 mt-5" id="itemCol">
      <div id="item">
        <div id="front" style="">
          <img src="../assets/pizza.png" alt="items" id="itemImg" />
        </div>
        <div id="back">
          <div class="text-center" id="itemText">
            <h3>Pizza</h3>
          </div>
          <div id="name_price">
            <div id="names">
              <h6>margerita</h6>
              <h6>Caprese</h6>
            </div>
            <div id="prices">
              <h6>11€</h6>
              <h6>13€</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Item 2 -->
    <div class="col-sm-4 col-md-4 col-lg-3 mt-5" id="itemCol">
      <div id="item">
        <div id="front">
          <img src="../assets/pasta.png" alt="items" id="itemImg" />
        </div>
        <div id="back">
          <div class="text-center" id="itemText">
            <h3>Pasta</h3>
          </div>
          <div id="name_price">
            <div id="names">
              <h6>margerita</h6>
              <h6>Caprese</h6>
            </div>
            <div id="prices">
              <h6>11€</h6>
              <h6>13€</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Item 3 -->
    <div class="col-sm-4 col-md-4 col-lg-3 mt-5" id="itemCol">
      <div id="item">
        <div id="front">
          <img src="../assets/spoon.jpg" alt="items" id="itemImg" />
        </div>
        <div id="back">
          <div class="text-center" id="itemText">
            <h3>Risotto</h3>
          </div>
          <div id="name_price">
            <div id="names">
              <h6>margerita</h6>
              <h6>Caprese</h6>
            </div>
            <div id="prices">
              <h6>11€</h6>
              <h6>13€</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Item 4 -->
    <div class="col-sm-4 col-md-4 col-lg-3 mt-5" id="itemCol">
      <div id="item">
        <div id="front">
          <img src="../assets/pp.jpg" alt="items" id="itemImg" />
        </div>
        <div id="back">
          <div class="text-center" id="itemText">
            <h3>Antipasti</h3>
          </div>
          <div id="name_price">
            <div id="names">
              <h6>margerita</h6>
              <h6>Caprese</h6>
            </div>
            <div id="prices">
              <h6>11€</h6>
              <h6>13€</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Item 5 -->
    <div class="col-sm-4 col-md-4 col-lg-3 mt-5" id="itemCol">
      <div id="item">
        <div id="front">
          <img src="../assets/burger.png" alt="items" id="itemImg" />
        </div>
        <div id="back">
          <div class="text-center" id="itemText">
            <h3>Burger</h3>
          </div>
          <div id="name_price">
            <div id="names">
              <h6>margerita</h6>
              <h6>Caprese</h6>
            </div>
            <div id="prices">
              <h6>11€</h6>
              <h6>13€</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Item 6 -->
    <div class="col-sm-4 col-md-4 col-lg-3 mt-5" id="itemCol">
      <div id="item">
        <div id="front">
          <img src="../assets/cocktail.png" alt="items" id="itemImg" />
        </div>
        <div id="back">
          <div class="text-center" id="itemText">
            <h3>Drinks</h3>
          </div>
          <div id="name_price">
            <div id="names">
              <h6>margerita</h6>
              <h6>Caprese</h6>
            </div>
            <div id="prices">
              <h6>11€</h6>
              <h6>13€</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Item 7 -->
    <div class="col-sm-4 col-md-4 col-lg-3 mt-5" id="itemCol">
      <div id="item">
        <div id="front">
          <img src="../assets/dessert.png" alt="items" id="itemImg" />
        </div>
        <div id="back">
          <div class="text-center" id="itemText">
            <h3>Dessert</h3>
          </div>
          <div id="name_price">
            <div id="names">
              <h6>margerita</h6>
              <h6>Caprese</h6>
            </div>
            <div id="prices">
              <h6>11€</h6>
              <h6>13€</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ******************************************************************************************** -->
</template>
<style scoped>
#menu {
  color: #f8b333;
  font-size: 1.625rem;
  font-family: 'BoucherieCursive', cursive;
  /* border-top: 2px dashed #f8b333;
  border-bottom: 2px dashed #f8b333; */
  text-shadow: 11px 7px 9px #5a5650;
}
#menu:hover {
  text-shadow: none;
}

/*****************************************************************************************************
-------------------------------------------------------------------------------------------------------
| .row------------------------------------------------------------------------------------------------|
|   #itemCol------------------------------------------------------------------------------------------|(each Column has unique Food item)
|         #item---------------------------------------------------------------------------------------|
|            #front-----------------------------------------------------------------------------------| 
|                #itemImg-----------------------------------------------------------------------------|
|            #back------------------------------------------------------------------------------------|
******************************************************************************************************/
#itemCol {
  text-align: -webkit-center;
}
#item {
  position: relative;
  width: 150px;
  height: 250px;
}
#item:hover #names {
  animation: 1.2s ease-out 0s 1 slideUp;
}
#item:hover #itemText {
  animation: 1.2s ease-out 0s 1 slideDown;
}
#item:hover #prices {
  animation: 1.2s ease-out 0s 1 slideUp;
}
#front {
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
#itemImg {
  border-radius: 20px;
  width: 100%;
  height: 100%;
}
#back {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  opacity: 1;
}
#itemText {
  color: #f8b333;
  opacity: 0.8;
}
#name_price {
  width: 100%;
  /* height: 100%; */
  height: auto;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  opacity: 0.5;
}
@keyframes slideDown {
  0% {
    transform: translateY(-10vh);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 0.9;
  }
}
@keyframes slideUp {
  0% {
    transform: translateY(20vh);
  }
  100% {
    transform: translateY(0);
  }
}

#item > #front {
  transform: perspective(600px) rotateY(0deg);
  backface-visibility: hidden; /* cant see the backside elements as theyre turning around */
  transition: transform 0.5s linear 0s;
}

/* style the item class with all child div's of id #back */
#item > #back {
  position: absolute;
  transform: perspective(600px) rotateY(180deg);
  background: #262626;
  color: #fff;
  box-shadow: rgba(248, 179, 51, 1) 0px 20px 30px -10px;
  /* box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px; */
  padding: 15px;
  backface-visibility: hidden; /* cant see the backside elements as theyre turning around */
  transition: transform 0.5s linear 0s;
}

/***************************************
both hovers takes place at a same time
***************************************/
/* disable's front */
#item:hover > #front {
  transform: perspective(600px) rotateY(-180deg);
  cursor: pointer;
}

/* enable's front */
#item:hover > #back {
  transform: perspective(600px) rotateY(0deg);
}

/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  #item {
    width: 150px;
    height: 250px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  #item {
    width: 200px;
    height: 300px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  #item {
    width: 210px;
    height: 310px;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  #item {
    width: 230px;
    height: 330px;
  }
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
  #item {
    width: 300px;
    height: 400px;
  }
}
</style>
