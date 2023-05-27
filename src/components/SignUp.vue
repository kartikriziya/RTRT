<script setup>
import { ref } from 'vue'
import axios from 'axios'

const Base_Url = 'https://olivewood.elementfx.com'

const signUpFname = ref('')
const signUpLname = ref('')
const signUpEmail = ref('')

const signUpOTP = ref('')

const signUpPassword1 = ref('')
const signUpPassword2 = ref('')

/* ______ verifyEmail ______ */
async function verifyEmail() {
  console.log('verifyEmail')
  await axios
    .post(Base_Url + '/connection.php', {
      action: 'check'
    })
    .then((result) => {
      console.log(result.data)
      console.log(signUpFname.value + ', ' + signUpLname.value + ', ' + signUpEmail.value)
      document.querySelector('#signUpForm').style.display = 'none'
      document.querySelector('#signUpOTPForm').style.display = 'flex'
    })
    .catch(function (error) {
      console.log(error)
    })
}
/* ______ verifyOTP ______ */
async function verifyOTP() {
  console.log('verifyOTP')
  await axios
    .post(Base_Url + '/connection.php', {
      action: 'check'
    })
    .then((result) => {
      console.log(result.data)
      console.log(signUpOTP.value)
      document.querySelector('#signUpOTPForm').style.display = 'none'
      document.querySelector('#signUpPasswordForm').style.display = 'flex'
    })
    .catch(function (error) {
      console.log(error)
    })
}
/* ________ SignUp _______ */
async function SignUp() {
  console.log('SignUp')
  await axios
    .post(Base_Url + '/connection.php', {
      action: 'check'
    })
    .then((result) => {
      console.log(result.data)
      console.log(signUpPassword1.value + ', ' + signUpPassword2.value)
      document.querySelector('#signUpPasswordForm').style.display = 'none'
      document.querySelector('#signUpForm').style.display = 'flex'

      if (result.data === 'successfully signup') {
        const slider = document.querySelector('#slider')
        slider.classList.remove('showSignUp')
        slider.classList.add('showLogin') /* -------> */
        document.querySelector('#loginLink').style.display = 'none'
        document.querySelector('#signUpLink').style.display = 'block'

        const loginForm = document.querySelector('#loginForm')
        loginForm.classList.add('loginForm_animation')
        const signUpForm = document.querySelector('#signUpForm')
        signUpForm.classList.remove('signUpForm_animation')
      } else {
        alert(result.data)
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}
</script>
<template>
  <!-- --------------------------------------------------------------------------------------------------- -->
  <!--                                            signUpForm                                               -->
  <!-- --------------------------------------------------------------------------------------------------- -->
  <form
    action=""
    class="row gy-3 needs-validation pt-5 ps-3 pe-3 pb-5"
    autocomplete="off"
    id="signUpForm"
    novalidate
  >
    <div class="col-sm-6">
      <div class="form-floating">
        <input
          v-model="signUpFname"
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
          v-model="signUpLname"
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
          v-model="signUpEmail"
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
    <div class="col-sm-6 text-center d-grid pt-4">
      <button class="btn" id="signUpBtn" @click.prevent="verifyEmail()">Verify Email</button>
    </div>
  </form>
  <!-- --------------------------------------------------------------------------------------------------- -->
  <!--                                          signUpOTPForm                                              -->
  <!-- --------------------------------------------------------------------------------------------------- -->
  <form
    action=""
    class="row gy-3 needs-validation pt-5 ps-3 pe-3 pb-5"
    autocomplete="off"
    id="signUpOTPForm"
    novalidate
    style="display: none"
  >
    <div class="col-sm-6 pb-5">
      <div class="form-floating">
        <input
          v-model="signUpOTP"
          type="text"
          class="form-control"
          name="signUpOTP"
          id="signUpOTP"
          placeholder="otp"
          required
        />
        <label for="signUpOTP" id="signUpLabels">OTP</label>
      </div>
    </div>
    <div class="col-sm-6 pb-5">
      <div class="row">
        <div class="col-12">
          <a href="#" id="signUpResendOTP">Resend OTP?</a>
        </div>
        <div class="col-12" id="signUpOTPexpire">OTP expire in : <span>123</span></div>
      </div>
    </div>
    <div class="col-sm-3"></div>
    <div class="col-sm-6 text-center d-grid">
      <button class="btn" id="signUpBtn" @click.prevent="verifyOTP()">Verify OTP</button>
    </div>
    <div class="col-sm-3"></div>
  </form>
  <!-- --------------------------------------------------------------------------------------------------- -->
  <!--                                         signUpPasswordForm                                          -->
  <!-- --------------------------------------------------------------------------------------------------- -->
  <form
    action=""
    class="row gy-3 needs-validation pt-5 ps-3 pe-3 pb-5"
    autocomplete="off"
    id="signUpPasswordForm"
    novalidate
    style="display: none"
  >
    <div class="col-sm-12">
      <div class="form-floating">
        <input
          v-model="signUpPassword1"
          type="password"
          class="form-control"
          name="signUpPassword"
          id="signUpPassword1"
          placeholder="********"
          required
        />
        <label for="signUpPassword1" id="signUpLabels">Password</label>
      </div>
    </div>
    <div class="col-sm-12">
      <div class="form-floating">
        <input
          v-model="signUpPassword2"
          type="password"
          class="form-control"
          name="signUpPassword"
          id="signUpPassword2"
          placeholder="********"
          required
        />
        <label for="signUpPassword2" id="signUpLabels">Re-password</label>
      </div>
    </div>
    <div class="col-sm-3"></div>
    <div class="col-sm-6 text-center d-grid pt-3">
      <button class="btn" id="signUpBtn" @click.prevent="SignUp()">Signup</button>
    </div>
    <div class="col-sm-3"></div>
  </form>
</template>
<style scoped>
#signUpForm,
#signUpOTPForm,
#signUpPasswordForm {
  margin-top: 5%;
  /*box-shadow: rgba(248, 179, 51, 0.1) 0px 20px 30px;*/
}
#signUpFname,
#signUpLname,
#signUpEmail {
  background-color: #f4ebd9;
}
#signUpPassword1,
#signUpPassword2 {
  background-color: #f4ebd9;
}
#signUpOTP {
  background-color: #f4ebd9;
}
.signUpForm_animation {
  animation: 0.7s ease-out 0s 1 slideFromRight;
}
@keyframes slideFromRight {
  0% {
    transform: translateX(-20vh);
  }
  100% {
    transform: translateX(0);
  }
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
</style>
