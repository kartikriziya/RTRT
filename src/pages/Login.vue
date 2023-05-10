<script setup>
function hideLogin() {
  const signUpBox = document.querySelector('#signUpBox')
  signUpBox.classList.add('signUpLeft') /*<------- */
  signUpBox.classList.remove('signUpRight')
  const signUpForm = document.querySelector('#signUpForm')
  signUpForm.style.display = 'block'
  const signUpLogin = document.querySelector('#signUpLogin')
  signUpLogin.style.display = 'block'

  const loginBox = document.querySelector('#loginBox')
  loginBox.classList.add('loginRight') /*-------> */
  loginBox.classList.remove('loginLeft')
  const loginForm = document.querySelector('#loginForm')
  loginForm.style.display = 'none'
  const loginSignup = document.querySelector('#loginSignup')
  loginSignup.style.display = 'none'
}
function hideSignUp() {
  const signUpBox = document.querySelector('#signUpBox')
  signUpBox.classList.add('signUpRight') /*-------> */
  signUpBox.classList.remove('signUpLeft')
  const signUpForm = document.querySelector('#signUpForm')
  signUpForm.style.display = 'none'
  const signUpLogin = document.querySelector('#signUpLogin')
  signUpLogin.style.display = 'none'

  const loginBox = document.querySelector('#loginBox')
  loginBox.classList.add('loginLeft') /*<------- */
  loginBox.classList.remove('loginRight')
  const loginForm = document.querySelector('#loginForm')
  loginForm.style.display = 'block'
  const loginSignup = document.querySelector('#loginSignup')
  loginSignup.style.display = 'block'
}
</script>
<template>
  <div class="container-fluid pt-5" id="login">
    <div class="row">
      <div class="col-12 text-center" id="loginTxt">
        <h1>Login Form</h1>
      </div>
    </div>
    <div class="row pt-2">
      <div class="col-sm-1 col-md-1 col-lg-2 col-xl-2" style="background-color: aqua"></div>
      <div
        class="col-sm-5 col-md-4 col-lg-4 col-xl-4"
        id="loginBox"
        style="background-color: blueviolet"
      >
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
          <!-- <div class="col-12 text-center mt-5" id="loginSignup">
            <h6>
              Don't have an account?
              <span id="loginSignupLink" @click="hideLogin()">SignUp</span>
            </h6>
          </div> -->
        </form>
        <form
          action=""
          class="row gy-3 needs-validation pt-5 ps-3 pe-3 pb-2"
          autocomplete="off"
          id="signUpForm"
          novalidate
        >
          <div class="col-sm-6">
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                name="signUpFname"
                id="signUpFname"
                placeholder="first name"
                required
              />
              <label for="signUpFname" id="signUpLabels">First name</label>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                name="signUpLname"
                id="signUpLname"
                placeholder="last name"
                required
              />
              <label for="signUpLname" id="signUpLabels">Last name</label>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                name="signUpEmail"
                id="signUpEmail"
                placeholder="name@example.com"
                required
              />
              <label for="signUpEmail" id="signUpLabels">Email address</label>
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please enter valid Email</div>
            </div>
          </div>
          <div class="col-sm-3"></div>
          <div class="col-sm-6 text-center d-grid pt-3">
            <button class="btn" id="signUpBtn">Verify Email</button>
          </div>
          <div class="col-sm-3"></div>
          <!-- <div class="col-12 text-center mt-5" id="signUpLogin">
            <h6>Already have an account? <a href="" id="signUpLoginLink">Login</a></h6>
          </div> -->
        </form>
      </div>
      <div
        class="col-sm-5 col-md-6 col-lg-4 col-xl-4"
        id="signUpBox"
        style="background-color: coral"
      >
        <div class="row">
          <div class="col-12 text-center mt-5" id="loginSignup">
            <h6>
              Don't have an account?
              <span id="loginSignupLink" @click="hideLogin()">SignUp</span>
            </h6>
          </div>
          <div class="col-12 text-center mt-5" id="signUpLogin">
            <h6>
              Don't have an account?
              <span id="signupLoginLink" @click="hideSignUp()">Login</span>
            </h6>
          </div>
        </div>
      </div>
      <div class="col-sm-1 col-md-1 col-lg-2 col-xl-2" style="background-color: burlywood"></div>
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

/* #loginBox {
  transition: all 0.75s ease;
  transform: translateX(100%);
}
#signUpBox {
  transition: all 0.75s ease;
  transform: translateX(-100%);
} */
.signUpLeft {
  transform: translateX(-100%);
  transition: all 0.75s ease;
}
.loginRight {
  transform: translateX(100%);
  transition: all 0.75s ease;
}
.signUpRight {
  transform: translateX(0);
  transition: all 0.75s ease;
}
.loginLeft {
  transform: translateX(0);
  transition: all 0.75s ease;
}

/*********************************************************************/

#signUp {
  margin-top: 5%;
}
#signUpTxt {
  color: #b47501;
}
#signUpForm,
#signUpOTPForm,
#signUpPasswordForm {
  margin-top: 5%;
  box-shadow: rgba(248, 179, 51, 0.1) 0px 20px 30px;
  display: none;
}
#signUpLabels {
  color: #b47501;
}
#signUpResendOTP {
  color: #b47501;
}
#signUpResendOTP:hover {
  color: #f8b333;
}
#signUpOTPexpire {
  color: burlywood;
}
#signUpBtn {
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
#signUpLogin {
  color: burlywood;
  display: none;
}
#signUpLoginLink {
  text-decoration: none;
  color: burlywood;
}
#signUpLoginLink:hover {
  color: b47501;
  text-decoration: underline;
}
</style>
