<script setup></script>
<template>
  <footer>
    <div class="container-fluid mt-5 pt-5">
      <!-- <h1>Footer</h1> -->
      <div class="d-flex flex-column" id="footer">
        <div class="d-flex flex-column" id="footer_links">
          <div class="d-flex flex-row" id="footer_navbar">
            <div class="d-flex flex-column gap-3" id="footer_navbar_links">
              <router-link class="nav-link" id="links" :to="{ name: 'home' }">HOME</router-link>
              <router-link class="nav-link" id="links" :to="{ name: 'ueber-uns' }"
                >ÜBER UNS</router-link
              >
              <router-link class="nav-link" id="links" :to="{ name: 'kontakt' }"
                >KONTAKT</router-link
              >
            </div>
            <div class="d-flex flex-column gap-4" id="footer_terms">
              <router-link class="nav-link" id="links" :to="{ name: 'home' }"
                >Impressum</router-link
              >
              <router-link class="nav-link" id="links" :to="{ name: 'ueber-uns' }"
                >Datenschutz</router-link
              >
              <router-link class="nav-link" id="links" :to="{ name: 'kontakt' }"
                >Kontaktdatenerhebung Covid-19</router-link
              >
            </div>
          </div>
          <div class="d-flex flex-row gap-3" id="footer_social">
            <img src="../assets/insta.png" alt="" id="social" />
            <img src="../assets/snapchat.png" alt="" id="social" />
            <img src="../assets/twitter.png" alt="" id="social" />
            <img src="../assets/fb.png" alt="" id="social" />
          </div>
        </div>
        <div class="text-center" id="copyright">
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
#footer_links {
  width: 100%;
  height: auto;
  justify-content: space-between;
}
#footer_navbar {
  width: 100%;
  height: auto;
  padding: 20px;
  justify-content: space-around;
}
#links {
  color: #b47501;
  font-size: 15px;
  font-weight: 500;
}
#links:hover {
  color: #f8b333;
}
#footer_social {
  width: 100%;
  height: auto;
  padding: 20px;
  justify-content: center;
}
#social {
  height: 30px;
  width: 30px;
  cursor: pointer;
}
#copyright {
  color: #b47501;
  width: 100%;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  #footer_social {
    justify-content: flex-end;
  }
}
</style>
