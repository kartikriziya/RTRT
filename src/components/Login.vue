<script setup></script>
<template>
  <form
    action=""
    class="row gy-3 needs-validation pt-5 ps-3 pe-3 pb-2"
    autocomplete="off"
    id="loginForm"
  >
    <div class="col-12">
      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="loginEmail"
          placeholder="name@example.com"
          required
        />
        <label for="loginEmail" id="loginLabels">Email address</label>
      </div>
    </div>
    <div class="col-12">
      <div class="form-floating">
        <input
          type="Password"
          class="form-control"
          id="loginPassword"
          placeholder="********"
          required
        />
        <label for="loginPassword" id="loginLabels">Password</label>
      </div>
    </div>
    <div class="col-12 ms-2">
      <a href="#" id="loginForgot">Forgot Password?</a>
    </div>
    <div class="col-sm-3"></div>
    <div class="col-sm-6 text-center d-grid pt-3">
      <button class="btn" id="loginBtn">Login</button>
    </div>
    <div class="col-sm-3"></div>
  </form>
</template>
<style scoped>
#loginForm {
  margin-top: 5%;
  /* box-shadow: rgba(248, 179, 51, 0.1) 0px 20px 30px; */
}
.loginForm_animation {
  animation: 0.7s ease-out 0s 1 slideFromLeft;
}
@keyframes slideFromLeft {
  0% {
    transform: translateX(20vh);
  }
  100% {
    transform: translateX(0);
  }
}
#loginLabels {
  color: #b47501;
}
#loginForgot {
  color: #b47501;
}
#loginForgot:hover {
  color: #f8b333;
}
#loginBtn {
  --bs-btn-color: #b47501;
  --bs-btn-border-color: #b47501;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #b47501;
  --bs-btn-hover-border-color: #b47501;
  --bs-btn-focus-shadow-rgb: 25, 135, 84;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #b47501;
  --bs-btn-active-border-color: #b47501;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #b47501;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #b47501;
  --bs-gradient: none;
}
</style>
