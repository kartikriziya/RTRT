<script setup></script>
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
          <router-link class="nav-link mb-2" id="links" :to="{ name: 'account' }"
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
          <!-- <router-link class="nav-link mb-2" id="links" :to="{ name: 'contact' }"
            >Kontaktdatenerhebung Covid-19</router-link
          > -->
        </div>
      </div>
      <div class="row">
        <div
          class="col-12 text-center p-3"
          style="display: flex; flex-direction: row; justify-content: center"
        >
          <div class="ms-5" id="social_icons">
            <i class="fa-brands fa-instagram fa-2xl"></i>
          </div>
          <div class="ms-5" id="social_icons">
            <i class="fa-brands fa-snapchat fa-2xl"></i>
          </div>
          <div class="ms-5" id="social_icons">
            <i class="fa-brands fa-square-twitter fa-2xl"></i>
          </div>
          <div class="ms-5" id="social_icons">
            <i class="fa-brands fa-square-facebook fa-2xl"></i>
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
