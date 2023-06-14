<script setup></script>

<template>

  <div class="container" id="contentAbout">

    <header class="main-header with-fade-in no-move">
      <h1>
        OliveWood Grande Amore
      </h1>

      <div class="subheader" id="subheaderID">
        The best, best pizza and pasta d’amore, paired with a unique atmosphere creates an unbeatable recipe.
      </div>
    </header>

    <p>
        Once the doors open at OliveWood, you'll feel like you're in a typical Italian osteria, where people get together to eat really well and enjoy the company of families, friends, couples, old and young. It is a lively atmosphere, and the delicious smell of authentic Italian cuisine lingers in the air. This is an open, welcoming place, where everyone can be themselves and feel at home.
    </p>

    <p>
        OliveWood is famous for the best, best pizza and pasta damore. The sizeable pizza is larger than the plate. It is frequently ordered by two persons with different toppings on each half. And wait until you see the pasta!"
    </p>

    <div class="scroll-container" >
        
        <img src="../assets/a1.jpg" alt="Cinque Terre" id="a_images">
        <img src="../assets/a2.jpg" alt="Forest" id="a_images">
        <img src="../assets/a3.jpg" alt="Northern Lights" id="a_images">
        
    </div>

    <br>

    <header class="outline-header with-fade-in no-move" id="nextToPhotos">

      <h2>Established 2023</h2>
      
      <div class="subheader">
          We've put on quite a bit of weight. No wonder: Since 2023, we have focused on food.
      </div>
    </header>

    <p>
        Welcome to <strong>OliveWood</strong> Italian Restaurant, where we invite you to experience the finest Italian cuisine in a warm and inviting atmosphere. Located in the heart of the city, Olivewood is renowned for its authentic flavors, exceptional service, and elegant ambiance. Our dedicated team of chefs and staff are passionate about delivering a memorable dining experience to our guests.
    </p>

    <p>
        At Olivewood, we offer a diverse menu inspired by the rich culinary traditions of Italy. From classic pasta dishes to delectable seafood specialties, our menu features a wide range of options to satisfy every palate. Our skilled chefs use only the freshest and highest quality ingredients, ensuring that each dish is a true culinary delight. Complement your meal with a selection from our extensive wine list, featuring both local and international labels.
    </p>

    <p>
        To make your dining experience even more convenient, we have developed a user-friendly table reservation website. Our website allows you to effortlessly reserve a table at Olivewood, ensuring that you have a guaranteed spot at your preferred date and time. Simply visit our website, enter the required details including the number of guests and desired reservation time, and our system will check availability in real-time.
    </p>
</div>

</template>

<style scoped>

h1{
  text-align: center;
  text-transform: uppercase;
  font-family: league_gothicregular;
  color: #DB250C;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 70px;
  text-rendering: optimizeLegibility;
}

#subheaderID{
  text-align: center;
  font-family: BoucherieCursive, cursive;
  font-weight: 400;
  font-size: 1.5rem;
  /* color:rgba(58, 67, 84, 0.9); */
  color: #000;
  margin-bottom: 2rem;
  margin-left: 221px;
  margin-right: 221px;
}

/* p{
  color:rgba(58, 67, 84, 0.9);
  font-family: Rockwell;
  font-size: 1rem;
  text-align: justify;
} */

#contentAbout > p{
  display: block;
  margin-left: 221px;
  margin-right: 221px;
  margin-bottom: 25px;
  text-align: center;
  color:rgba(58, 67, 84, 0.9);
  font-family: Rockwell;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;
}

#image{
  text-align: center;
}

.scroll-container {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap; 
  overflow-x: scroll; /* Allows horizontal scrolling if necessary */
  margin-top: 2rem;
  margin-bottom: 2rem;
  
  /* scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: gray gray; */

  scroll-snap-type: mandatory;
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: x mandatory;
}

#a_images{
  height: 344.023px;
  width: 613px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  padding-left: 5px;
  padding-right: 5px
}
/* .scroll-container::-webkit-scrollbar {
  height: 5px;
}

.scroll-container::-webkit-scrollbar-track {
  background: transparent;
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: gray;
  /* background-color: #f8b333; */
  /* border-radius: 10px;
  border: 1px solid transparent; */
/* } */

/* .scroll-container::-webkit-scrollbar-thumb:hover { */
  /* background-color: darkgray; */
  /*background-color: #f8b333; */
/* } */

#nextToPhotos{
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-family: BoucherieCursive, cursive;
  font-weight: 400;
  font-size: 1.5rem;
  /* color:rgba(58, 67, 84, 0.9); */
  color: #000;
  margin-bottom: 2rem;
  margin-left: 221px;
  margin-right: 221px;
}


</style>
