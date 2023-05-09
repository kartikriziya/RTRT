<script setup></script>
<template>
  <div class="container-fluid pt-5" id="login">
    <div class="row">
      <div class="col-12 text-center" id="loginTxt">
        <h1>Login Form</h1>
      </div>
    </div>
    <div class="row pt-2">
      <div class="col-sm-1 col-md-1 col-lg-2 col-xl-2" style="background-color: aqua;"></div>
      <div class="col-sm-5 col-md-4 col-lg-3 col-xl-3" style="background-color: blueviolet;">
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
          <div class="col-12 text-center mt-5" id="loginSignup">
            <h6>Don't have an account? <a href="" id="loginSignupLink">SignUp</a></h6>
          </div>
        </form>
      </div>
      <div class="col-sm-5 col-md-6 col-lg-5 col-xl-5" style="background-color: chartreuse;"></div>
      <div class="col-sm-1 col-md-1 col-lg-2 col-xl-2" style="background-color: burlywood;"></div>
    </div>
  </div>
</template>
<style scoped>
#login {
  margin-top: 5%;
}
#loginTxt {
  color: #b47501;
}
#loginForm {
  margin-top: 5%;
  box-shadow: rgba(248, 179, 51, 0.1) 0px 20px 30px;
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
#loginSignup {
  color: burlywood;
}
#loginSignupLink {
  text-decoration: none;
  color: burlywood;
}
#loginSignupLink:hover {
  color: b47501;
  text-decoration: underline;
}
</style>
