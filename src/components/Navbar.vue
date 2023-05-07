<script setup></script>
<template>
  <nav class="navbar sticky-top navbar-expand-md navbar-light">
    <div class="container">
      <a class="navbar-brand me-5" href="#"
        ><img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125"
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
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
#links {
  color: #f8b333;
  font-size: 25px;
  font-weight: 500;
}
#links:hover {
  color: #b47501;
  font-weight: 700;
}
</style>
