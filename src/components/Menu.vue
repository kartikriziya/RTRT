<script setup></script>
<template>
  <div class="row pb-5" style="background-color: aquamarine">
    <div class="col-lg-12 text-center">
      <h1>Menu</h1>
    </div>
  </div>
  <!-- <div class="d-flex flex-row">
    Food Items
    <div class="mt-5" id="item" style="background-color: aqua">
      <div id="front">
        <img src="../assets/spoon.jpg" alt="items" id="itemImg" />
      </div>
      <div id="back">
        <div class="text-center" id="itemText">
          <h3>testing...</h3>
        </div>
      </div>
    </div>
  </div> -->
  <div class="row mt-5" style="/*justify-content: center !important*/">
    <!-- Food Items -->
    <div class="col-sm-2 col-md-4 col-lg-3 mt-5" id="item">
      <div id="front">
        <img src="../assets/spoon.jpg" alt="items" id="itemImg" />
      </div>
      <div id="back">
        <div class="text-center" id="itemText">
          <h3>Pizza</h3>
        </div>
      </div>
    </div>
    <div class="col-sm-2 col-md-4 col-lg-3 mt-5" id="item">
      <div id="front">
        <img src="../assets/spoon.jpg" alt="items" id="itemImg" />
      </div>
      <div id="back">
        <div class="text-center" id="itemText">
          <h3>Pasta</h3>
        </div>
      </div>
    </div>
    <div class="col-sm-2 col-md-4 col-lg-3 mt-5" id="item">
      <div id="front">
        <img src="../assets/spoon.jpg" alt="items" id="itemImg" />
      </div>
      <div id="back">
        <div class="text-center" id="itemText">
          <h3>Risotto</h3>
        </div>
      </div>
    </div>
    <div class="col-sm-2 col-md-4 col-lg-3 mt-5" id="item">
      <div id="front">
        <img src="../assets/spoon.jpg" alt="items" id="itemImg" />
      </div>
      <div id="back">
        <div class="text-center" id="itemText">
          <h3>Antipasti</h3>
        </div>
      </div>
    </div>
    <div class="col-sm-2 col-md-4 col-lg-3 mt-5" id="item">
      <div id="front">
        <img src="../assets/spoon.jpg" alt="items" id="itemImg" />
      </div>
      <div id="back">
        <div class="text-center" id="itemText">
          <h3>Salat</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#item {
  position: relative;
  width: 320px;
  height: 200px;
}
#front {
  position: relative;
  top: 0;
  left: 0;
}
#itemImg {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
#back {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  opacity: 0.5;
}

#item > #front {
  position: absolute;
  transform: perspective(600px) rotateY(0deg);

  width: 300px;
  height: 200px;

  backface-visibility: hidden; /* cant see the backside elements as theyre turning around */
  transition: transform 0.5s linear 0s;
}

/* style the item class with all child div's of id #back */
#item > #back {
  position: absolute;
  transform: perspective(600px) rotateY(180deg);
  background: #262626;
  color: #fff;
  width: 300px;
  height: 200px;
  padding: 5px;
  backface-visibility: hidden; /* cant see the backside elements as theyre turning around */
  transition: transform 0.5s linear 0s;
}

/*
    both hovers takes place at a same time
 */
/* disable's front */
#item:hover > #front {
  transform: perspective(600px) rotateY(-180deg);
}

/* enable's front */
#item:hover > #back {
  transform: perspective(600px) rotateY(0deg);
}
</style>
