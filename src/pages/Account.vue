<script setup>
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
function showLogin() {
  const slider = document.querySelector('#slider')
  slider.classList.remove('showSignUp')
  slider.classList.add('showLogin') /* -------> */
  document.querySelector('#loginLink').style.display = 'none'
  document.querySelector('#signUpLink').style.display = 'block'

  const loginForm = document.querySelector('#loginForm')
  loginForm.classList.add('loginForm_animation')
  const signUpForm = document.querySelector('#signUpForm')
  signUpForm.classList.remove('signUpForm_animation')
}
function showSignUp() {
  const slider = document.querySelector('#slider')
  slider.classList.remove('showLogin')
  slider.classList.add('showSignUp') /* <------- */
  document.querySelector('#signUpLink').style.display = 'none'
  document.querySelector('#loginLink').style.display = 'block'

  const signUpForm = document.querySelector('#signUpForm')
  signUpForm.classList.add('signUpForm_animation')
  const loginForm = document.querySelector('#loginForm')
  loginForm.classList.remove('loginForm_animation')
}
</script>
<template>
  <div class="container-fluid pt-5" id="">
    <div class="row pt-2">
      <div class="col-sm-1 col-md-1 col-lg-2 col-xl-2"></div>
      <div
        class="col-sm-10 col-md-8 col-lg-8 col-xl-8"
        id="Account"
        style="background-color: rgb(226, 43, 43)"
      >
        <div class="row">
          <!-- Login -->
          <div
            class="col-sm-6 col-md-6 col-lg-6 col-xl-6"
            id=""
            style="background-color: #fff"
          >
            <Login />
          </div>
          <!-- SignUp -->
          <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6" id="" style="background-color: #fff">
            <SignUp />
          </div>
          <!-- Slider----------------------------------------------------------------------------------------------------------------- -->
          <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6" id="slider">
            <div class="row">
              <div class="col-12 text-center mt-5" id="signUpLink">
                <br>
                <h3>Hello, Friend!</h3>
                <br>
                <h4>Enter your personal details and start your journey with us</h4>
                <br>
                <h6>Don't have an account?<span id="showSignUp" @click="showSignUp()">SignUp</span></h6>
              </div>
              <div class="col-12 text-center mt-5" id="loginLink">
                <br><h3>Welcome Back!</h3>
                <br>
                <h4>To keep connected with us please login with your personal info</h4>
                <br>
                <h6>Already an account?<span id="showLogin" @click="showLogin()">Login</span></h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-1 col-md-1 col-lg-2 col-xl-2"></div>
    </div>
  </div>
</template>
<style scoped>
#Account {
  position: relative;
}
#signUpLink {
  display: none;
  color : #fff;
}
#loginLink {
  color : #fff;
}
#showLogin,
#showSignUp {
  text-decoration: none;
  color: burlywood;
}
#showLogin:hover,
#showSignUp:hover {
  color: b47501;
  text-decoration: underline;
  cursor: pointer;
}
#slider {
  background-color: #EA3C53;
  position: absolute;
  height: 100%;
}

/* Slider-Animation */
.showLogin {
  transform: translateX(100%);
  transition: all 0.75s ease;
}
.showSignUp {
  transform: translateX(0);
  transition: all 0.75s ease;
}
#login_box{
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);
}
#signup_box{
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);

}
</style>
