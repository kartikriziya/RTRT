<template>
  <footer>
    <div class="container-fluid pt-5" id="footer">
      <div class="row">
        <div class="col-sm-4 p-3" id="footer_start">
          <router-link class="nav-link mb-2" id="links" :to="{ name: 'home' }">Home</router-link>
          <router-link class="nav-link mb-2" id="links" :to="{ name: 'about' }"
            >About Us</router-link
          >
          <router-link class="nav-link mb-2" id="links" :to="{ name: 'contact' }"
            >Contact</router-link
          >
        </div>
        <div class="col-sm-4 p-3" id="footer_center">
          <router-link class="nav-link mb-2" id="links" :to="{ name: 'account' }"
            >SignUp</router-link
          >
          <router-link class="nav-link mb-2" id="links" :to="{ name: 'cancel' }"
            >Cancel Reservation</router-link
          >
        </div>
        <div class="col-sm-4 p-3" id="footer_end">
          <router-link class="nav-link mb-2" id="links" :to="{ name: 'imprint' }"
            >Imprint</router-link
          >
          <router-link class="nav-link mb-2" id="links" :to="{ name: 'terms' }"
            >Terms & Conditions</router-link
          >
          <div class="row">
            <div v-show="stars == 1" class="col-12" id="wrapperRating">
              <i id="stars" class="fa fa-star" style="color: #b47501"></i>
              <i id="stars" class="fa fa-star"></i>
              <i id="stars" class="fa fa-star"></i>
              <i id="stars" class="fa fa-star"></i>
              <i id="stars" class="fa fa-star"></i>
            </div>
            <div v-show="stars == 2" class="col-12" id="wrapperRating">
              <i id="stars" class="fa fa-star" style="color: #b47501"></i>
              <i id="stars" class="fa fa-star" style="color: #b47501"></i>
              <i id="stars" class="fa fa-star"></i>
              <i id="stars" class="fa fa-star"></i>
              <i id="stars" class="fa fa-star"></i>
            </div>
            <div v-show="stars == 3" class="col-12" id="wrapperRating">
              <i id="stars" class="fa fa-star" style="color: #b47501"></i>
              <i id="stars" class="fa fa-star" style="color: #b47501"></i>
              <i id="stars" class="fa fa-star" style="color: #b47501"></i>
              <i id="stars" class="fa fa-star"></i>
              <i id="stars" class="fa fa-star"></i>
            </div>
            <div v-show="stars == 4" class="col-12" id="wrapperRating">
              <i id="stars" class="fa fa-star" style="color: #b47501"></i>
              <i id="stars" class="fa fa-star" style="color: #b47501"></i>
              <i id="stars" class="fa fa-star" style="color: #b47501"></i>
              <i id="stars" class="fa fa-star" style="color: #b47501"></i>
              <i id="stars" class="fa fa-star"></i>
            </div>
            <div v-show="stars == 5" class="col-12" id="wrapperRating">
              <i id="stars" class="fa fa-star" style="color: #b47501"></i>
              <i id="stars" class="fa fa-star" style="color: #b47501"></i>
              <i id="stars" class="fa fa-star" style="color: #b47501"></i>
              <i id="stars" class="fa fa-star" style="color: #b47501"></i>
              <i id="stars" class="fa fa-star" style="color: #b47501"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-12 text-center p-3"
          style="display: flex; flex-direction: row; justify-content: center"
        >
          <div class="ms-5">
            <a href="https://www.instagram.com/" id="social_icons"
              ><i class="fa-brands fa-instagram fa-2xl"></i
            ></a>
          </div>
          <div class="ms-5">
            <a href="https://www.snapchat.com/" id="social_icons">
              <i class="fa-brands fa-snapchat fa-2xl"></i
            ></a>
          </div>
          <div class="ms-5">
            <a href="https://twitter.com/" id="social_icons">
              <i class="fa-brands fa-square-twitter fa-2xl"></i
            ></a>
          </div>
          <div class="ms-5">
            <a href="https://www.facebook.com/" id="social_icons">
              <i class="fa-brands fa-square-facebook fa-2xl"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center" id="copyright">
          <h6><span style="color: #f8b333">©</span>2023 OliveWood</h6>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { ref, onMounted, inject } from 'vue'
import axios from 'axios'

const store = inject('store')
const Base_Url = 'https://olivewood.elementfx.com'

const stars = ref('')

onMounted(() => {
  store.state.isLoading = false
  showRating()
})

async function showRating() {
  let result = await axios.post(Base_Url + '/RTRT/rating.php', {
    action: 'rating'
  })
  if (result.status == 200 || result.status == 201) {
    stars.value = result.data
  }
}
</script>

<style scoped>
#footer {
  min-height: 25vh;
  justify-content: space-between;
}
#footer_start,
#footer_center,
#footer_end {
  text-align: center !important;
  margin-bottom: 20px;
}
#wrapperRating {
  display: flex;
  justify-content: start;
  align-items: center;
}
/* Stars */
#stars {
  color: #a28a5a;
  transition: color 0.2s, trasnform 0.2s;
}

#links {
  color: #f4ebd9;
  font-size: 15px;
  font-weight: 500;
}
#links:hover {
  color: #b47501;
}
#social_icons {
  color: #f4ebd9;
  text-decoration: none;
  cursor: pointer;
}
#social_icons:hover {
  color: #b47501;
}
#copyright {
  color: #b47501;
  width: 100%;
}

@media (min-width: 576px) {
  #footer_start {
    text-align: right !important;
    margin-bottom: 20px;
  }
  #footer_center {
    text-align: center !important;
    margin-bottom: 20px;
  }
  #footer_end {
    text-align: left !important;
    margin-bottom: 20px;
  }
}
</style>
