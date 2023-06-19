<template>
  <div class="col-sm-8 col-md-12 pe-4 gap-2" id="wrapperRating">
    <input v-model="collectStars" type="radio" id="star5" value="5" @change="sendRatings()" />
    <label id="stars" for="star5"><i class="fa fa-star"></i></label>

    <input v-model="collectStars" type="radio" id="star4" value="4" @change="sendRatings()" />
    <label id="stars" for="star4"><i class="fa fa-star"></i></label>

    <input v-model="collectStars" type="radio" id="star3" value="3" @change="sendRatings()" />
    <label id="stars" for="star3"><i class="fa fa-star"></i></label>

    <input v-model="collectStars" type="radio" id="star2" value="2" @change="sendRatings()" />
    <label id="stars" for="star2"><i class="fa fa-star"></i></label>

    <input v-model="collectStars" type="radio" id="star1" value="1" @change="sendRatings()" />
    <label id="stars" for="star1"><i class="fa fa-star"></i></label>
  </div>
  <div class="col-sm-4 col-md-12"></div>
</template>

<script setup>
import { ref, inject } from 'vue'

const store = inject('store')

const collectStars = ref('') // stars will be updated in collectStars variable as const
const emitRatings = defineEmits(['getStars']) // emits defined in emitRatings variable as const

/*******************************************************************************************************************/
/* Start of sendRatings() 
/* -> collected Stars will be emited to Reservation.vue(Parent) => as function name 'sendRatings()'
/* -> emitRatings variable emits the collected Stars to Reservation.vue(Parent) => as emit name 'getStars'
/* -> emit name 'getStars' will be used in Reservation.vue(Parent) where Rating.vue(Child) is called => as @getStars="..."
/******************************************************************************************************************/
function sendRatings() {
  emitRatings('getStars', collectStars.value) // emits the collected stars to Reservation.vue(Parent)
}
/* End of sendRatings() */

/**********************************************************************************/
/*                              Start Learning                                    */
/**********************************************************************************/
/* To update accurate Value of const name = ref('') **
/* -> in HTML use @change="" insted of @click=""
/*
/* To get accurate Value of const name = ref('')  in Console.log **
/* -> in HTML @change="FunctionName()"
/* -> in Script function FuncitonName($event){ console.log(event.target.value) }

/******************************* End Learning *************************************/
</script>

<style scoped>
#wrapperRating {
  background-color: darkolivegreen;
  display: flex;
  flex-direction: row-reverse;
  justify-content: end;
}
#wrapperRating input {
  display: none;
}

/* Stars */
#stars {
  color: #f4ebd9;
  cursor: pointer;
  transition: color 0.2s, trasnform 0.2s;
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
