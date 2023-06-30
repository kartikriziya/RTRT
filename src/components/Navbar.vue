<template>
  <nav class="navbar sticky-top navbar-expand-md navbar-light">
    <div class="container">
      <router-link class="navbar-brand me-5" id="links" :to="{ name: 'home' }"
        ><img alt="Vue logo" class="logo" src="../assets/olivewood.png" width="125" height="125"
      /></router-link>
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
            <router-link class="nav-link" id="links" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li class="nav-item me-4">
            <router-link class="nav-link" id="links" :to="{ name: 'about' }">About Us</router-link>
          </li>
          <li class="nav-item me-4">
            <router-link class="nav-link" id="links" :to="{ name: 'contact' }">Contact</router-link>
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
import { ref, onMounted, watchEffect, inject } from 'vue'
import { useRouter } from 'vue-router'

const store = inject('store')
const router = useRouter()

onMounted(() => {
  if (sessionStorage.getItem('user-email')) {
    store.state.isUser = true
    document.getElementById('logout').style.display = 'block'
  } else {
    document.getElementById('logout').style.display = 'none'
  }
})
watchEffect(() => {
  if (store.state.isUser) {
    document.getElementById('logout').style.display = 'block'
  }
})

function logout() {
  document.getElementById('logout').style.display = 'none'
  sessionStorage.removeItem('user-email')
  store.state.isUser = false
  router.push({ path: '/' })
}
</script>

<style scoped>
#links {
  color: #f8b333;
  font-size: 25px;
  font-weight: 500;
  font-family: Rockwell;
}
#links:hover {
  color: #b47501;
  font-weight: 700;
}
#logout {
  color: #b47501;
  display: none;
  cursor: pointer;
}
</style>
