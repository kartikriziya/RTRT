<template>
  <div class="container-fluid pt-5 pb-3" id="Account">
    <div class="row pt-5">
      <div class="col-md-1 col-lg-2 col-xl-3"></div>
      <div class="col-md-10 col-lg-8 col-xl-6" id="Account_box">
        <div class="row">
          <!-- Login -->
          <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6" id="" style="background-color: #262626">
            <Login />
          </div>
          <!-- SignUp -->
          <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6" id="" style="background-color: #262626">
            <SignUp />
          </div>
          <!-- Slider----------------------------------------------------------------------------------------------------------------- -->
          <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6" id="slider">
            <div class="row">
              <div class="col-12 text-center mt-5" id="signUpLink">
                <br />
                <h3>Hello, Friend!</h3>
                <br />
                <h4>Enter your personal details and start your journey with us</h4>
                <br />
                <h6>
                  Don't have an account?<span id="showSignUp" @click="showSignUp()"> SignUp</span>
                </h6>
              </div>
              <div class="col-12 text-center mt-5" id="loginLink">
                <br />
                <h3>Welcome Back!</h3>
                <br />
                <h4>To keep connected with us please login with your personal info</h4>
                <br />
                <h6>Already an account?<span id="showLogin" @click="showLogin()"> Login</span></h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-1 col-lg-2 col-xl-3"></div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, inject } from 'vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'

const store = inject('store')
onMounted(() => {
  store.state.isLoading = false
})

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

  emptySignUp()
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

  emptyLogin()
}

function emptyLogin() {
  document.getElementById('loginEmail').value = ''
  document.getElementById('loginPassword').value = ''
  document.getElementById('forgetPasswordEmail').value = ''
  document.getElementById('loginVerifyOTP').value = ''
  document.getElementById('loginForgotPassword1').value = ''
  document.getElementById('loginForgotPassword2').value = ''
}
function emptySignUp() {
  document.getElementById('signUpFname').value = ''
  document.getElementById('signUpLname').value = ''
  document.getElementById('signUpEmail').value = ''
  document.getElementById('signUpOTP').value = ''
  document.getElementById('signUpPassword1').value = ''
  document.getElementById('signUpPassword2').value = ''
}
</script>
<style scoped>
#Account {
  background-color: #f4ebd9;
  min-height: calc(100vh - 151px);
}
#Account_box {
  /* box-shadow: rgba(248, 179, 51, 0.1) 0px 20px 30px; */
  position: relative;
}
#signUpLink {
  display: none;
  color: #b47501;
}
#loginLink {
  color: #b47501;
}
#showLogin,
#showSignUp {
  text-decoration: none;
  color: #b47501;
}
#showLogin:hover,
#showSignUp:hover {
  font-weight: 700;
  cursor: pointer;
}
#slider {
  background-color: #f4ebd9;
  position: absolute;
  height: 100%;
}

/* Slider-Animation */
.showLogin {
  transform: translateX(100.1%);
  transition: all 0.75s ease;
}
.showSignUp {
  transform: translateX(0);
  transition: all 0.75s ease;
}
</style>
