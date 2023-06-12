<template>
  <nav class="navbar sticky-top navbar-expand-md navbar-light">
    <div class="container">
      <a class="navbar-brand me-5" href="#"
        ><img alt="Vue logo" class="logo" src="../assets/olivewood.png" width="125" height="125"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse ms-5" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto my-2 my-lg-0" style="background-color: ; text-align: center">
          <li class="nav-item me-4">
            <router-link class="nav-link" id="links" :to="{ name: 'home' }">HOME</router-link>
          </li>
          <li class="nav-item me-4">
            <router-link class="nav-link" id="links" :to="{ name: 'ueber-uns' }"
              >ÜBER UNS</router-link
            >
          </li>
          <li class="nav-item me-4">
            <router-link class="nav-link" id="links" :to="{ name: 'kontakt' }">KONTAKT</router-link>
          </li>
          <li class="nav-item me-4" id="logout">
            <a class="nav-link" id="links" @click.prevent="logout()"><u>Logout</u></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

let user = sessionStorage.getItem('user-email')
onMounted(() => {
  if (user) {
    document.getElementById('logout').style.display = 'block'
    console.log('yes')
  } else {
    document.getElementById('logout').style.display = 'none'
    console.log('no')
  }
})

function logout() {
  sessionStorage.removeItem('user-email')
  document.getElementById('logout').style.display = 'none'
  router.push({ path: '/' })
}
</script>
<style scoped>
#links {
  color: #f4ebd9;
  font-size: 25px;
  font-weight: 500;
  cursor: pointer;
}
#links:hover {
  color: #b47501;
  font-weight: 700;
}
#logout {
  display: none;
}
</style>
