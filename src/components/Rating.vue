<script></script>
<template>
  <!-- <div class="col-sm-4"></div> -->
  <div class="col-sm-4 pe-4 gap-2" id="wrapperRating">
    <input type="radio" id="star5" name="rate" value="5" />
    <label id="stars" for="star5"><i class="fa fa-star"></i></label>

    <input type="radio" id="star4" name="rate" value="4" />
    <label id="stars" for="star4"><i class="fa fa-star"></i></label>

    <input type="radio" id="star3" name="rate" value="3" />
    <label id="stars" for="star3"><i class="fa fa-star"></i></label>

    <input type="radio" id="star2" name="rate" value="2" />
    <label id="stars" for="star2"><i class="fa fa-star"></i></label>

    <input type="radio" id="star1" name="rate" value="1" />
    <label id="stars" for="star1"><i class="fa fa-star"></i></label>
  </div>
</template>
<style scoped>
/**************************************/
/************ Star Rating *************/
/**************************************/
#wrapperRating {
  /* border-color: black; */
  /* background-color: darkolivegreen; */
  display: flex;
  flex-direction: row-reverse;
  justify-content : end;
  align-items: center;
}
#wrapperRating input {
  display: none;
}

/* Stars */
#stars {
  color: #f4ebd9;
  cursor: pointer;
  transition: color 0.2s, trasnform 0.2s;
  font-size: 26px;
}
#stars:hover {
  color: #f8b333;
  transform: scale(1.3);
}
#stars:hover ~ #stars {
  color: #f8b333;
}

/* Stars checked with their siblings */
#wrapperRating > input:checked ~ #stars {
  color: #b47501;
}
#wrapperRating #stars:active {
  transform: scale(0.8);
  transition: 0.3s ease;
}
#wrapperRating > input:checked + #stars:hover,
#wrapperRating > input:checked + #stars:hover ~ #stars,
#wrapperRating > input:checked ~ #stars:hover,
#wrapperRating > input:checked ~ #stars:hover ~ #stars,
#wrapperRating > #stars:hover ~ input:checked ~ #stars {
  color: #c59b08;
}
</style>
