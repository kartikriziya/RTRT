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
            <router-link class="nav-link" id="links" :to="{ name: 'home' }">HOME</router-link>
          </li>
          <li class="nav-item me-4">
            <router-link class="nav-link" id="links" :to="{ name: 'about' }">ABOUT US</router-link>
          </li>
          <li class="nav-item me-4">
            <router-link class="nav-link" id="links" :to="{ name: 'contact' }">CONTACT</router-link>
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
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

let user = ref('')
setInterval(function () {
  user.value = sessionStorage.getItem('user-email')
}, 1000)

onMounted(() => {
  if (user.value) {
    document.getElementById('logout').style.display = 'block'
  } else {
    document.getElementById('logout').style.display = 'none'
  }
})
watch(user, async () => {
  if (user.value) {
    document.getElementById('logout').style.display = 'block'
  } else {
    document.getElementById('logout').style.display = 'none'
  }
})

function logout() {
  document.getElementById('logout').style.display = 'none'
  sessionStorage.removeItem('user-email')
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
