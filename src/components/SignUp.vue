<template>
  <!-- --------------------------------------------------------------------------------------------------- -->
  <!--                                            signUpForm                                               -->
  <!-- --------------------------------------------------------------------------------------------------- -->
  <form
    action=""
    class="row gy-3 needs-validation pt-5 ps-3 pe-3"
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
          @input="verifyEmail_hideError()"
          required
        />
        <label for="signUpFname" id="signUpLabels">First name *</label>
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
          @input="verifyEmail_hideError()"
          required
        />
        <label for="signUpLname" id="signUpLabels">Last name *</label>
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
          @input="verifyEmail_hideError()"
          required
        />
        <label for="signUpEmail" id="signUpLabels">Email address *</label>
      </div>
    </div>
    <div class="col-12">
      <div class="form-floating">
        <div class="R_Error SignUp_Error">{{ signUp_Error_Message }}</div>
      </div>
    </div>
    <div class="col-sm-3"></div>
    <div class="col-sm-6 text-center d-grid pt-4">
      <button class="btn" id="signUp_emailBtn" @click.prevent="verifyEmail()">Verify Email</button>
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
    <div class="col-sm-6">
      <div class="form-floating">
        <input
          v-model="signUpOTP"
          type="text"
          class="form-control"
          name="signUpOTP"
          id="signUpOTP"
          placeholder="otp"
          @input="verifyOTP_hideError()"
          required
        />
        <label for="signUpOTP" id="signUpLabels">OTP *</label>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="row">
        <div class="col-12">
          <a id="signUpResendOTP" @click.prevent="SignUp_resendOTP()">Resend OTP?</a>
        </div>
        <div class="col-12" id="signUpOTPexpire">
          OTP expire in : <span>{{ signUP_OTP_Time }}</span>
        </div>
        <div class="col-12" id="signUpOTPexpire_error">
          <span>OTP expired</span>
        </div>
      </div>
    </div>
    <div class="col-12">
      <p class="pb-5" style="color: burlywood; font-size: xx-small">
        OTP has been sent successfully to : {{ signUpEmail }}
      </p>
      <div class="form-floating">
        <div class="R_Error SignUp_verifyOTPError">{{ signUp_Error_Message }}</div>
      </div>
    </div>
    <div class="col-sm-3"></div>
    <div class="col-sm-6 text-center d-grid">
      <button class="btn signUp_VerifyOTP_btn" id="signUp_verifyBtn" @click.prevent="verifyOTP()">
        Verify OTP
      </button>
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
          @input="SignUp_hideError()"
          required
        />
        <label for="signUpPassword1" id="signUpLabels">Password *</label>
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
          @input="SignUp_hideError()"
          required
        />
        <label for="signUpPassword2" id="signUpLabels">Re-password *</label>
      </div>
    </div>
    <div class="col-12">
      <div class="form-floating">
        <div class="R_Error SignUp_createPasswordError">{{ signUp_Error_Message }}</div>
      </div>
    </div>
    <div class="col-sm-3"></div>
    <div class="col-sm-6 text-center d-grid pt-3">
      <button class="btn" id="signUp_passwordBtn" @click.prevent="SignUp()">Signup</button>
    </div>
    <div class="col-sm-3"></div>
  </form>
</template>

<script setup>
import { ref, inject } from 'vue'
import axios from 'axios'

const store = inject('store')
const Base_Url = 'https://olivewood.elementfx.com'

const signUpFname = ref('')
const signUpLname = ref('')
const signUpEmail = ref('')
const otpTimer = ref('')
const signUP_OTP_Time = ref('')
const signUpOTP = ref('')
const signUpPassword1 = ref('')
const signUpPassword2 = ref('')
const signUp_Error_Message = ref('')

function signUpTimer() {
  let timeleft = 120
  otpTimer.value = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(otpTimer.value)
      signUP_OTP_Time.value = null
      document.getElementById('signUpOTPexpire').style.display = 'none'
      document.getElementById('signUpOTPexpire_error').style.display = 'block'
      document.querySelector('.signUp_VerifyOTP_btn').disabled = true
    } else {
      signUP_OTP_Time.value = timeleft
    }
    timeleft -= 1
  }, 1000)
}

/* ______ verifyEmail ______ */
async function verifyEmail() {
  const SignUp_Error = document.querySelector('.SignUp_Error')
  console.log('verifyEmail')
  if (signUpFname.value == '' || signUpLname.value == '' || signUpEmail.value == '') {
    SignUp_Error.style.display = 'block'
    signUp_Error_Message.value = 'Please fill in all the required fields!'
  } else {
    const SignUp_emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+[^ \t\r\n]*/
    if (!SignUp_emailRegex.test(signUpEmail.value)) {
      SignUp_Error.style.display = 'block'
      signUp_Error_Message.value = 'Please use a valid E-Mail format!'
      return
    }
    store.state.isLoading = true
    let result = await axios.post(Base_Url + '/RTRT/account.php', {
      action: 'verify_email',
      firstName: signUpFname.value,
      lastName: signUpLname.value,
      Email: signUpEmail.value
    })
    store.state.isLoading = false

    if (result.status == 200 || result.status == 201) {
      console.log(result.data)
      console.log(signUpFname.value + ', ' + signUpLname.value + ', ' + signUpEmail.value)
      if (result.data != 'Account with this Email already exists!') {
        document.querySelector('#signUpForm').style.display = 'none'
        document.querySelector('#signUpOTPForm').style.display = 'flex'
        clearInterval(otpTimer.value)
        signUpTimer()
      } else {
        SignUp_Error.style.display = 'block'
        signUp_Error_Message.value = 'Account with this Email already exists. Try another Email!'
      }
    } else {
      console.log(result.data)
    }
  }
}
function verifyEmail_hideError() {
  document.querySelector('.SignUp_Error').style.display = 'none'
}

/* ______ ResendOTP ______ */
async function SignUp_resendOTP() {
  verifyOTP_hideError()
  console.log('SignUp_resendOTP')
  store.state.isLoading = true
  await axios
    .post(Base_Url + '/RTRT/account.php', {
      action: 'SignUp_resendOTP',
      Email: signUpEmail.value
    })
    .then((result) => {
      console.log(result.data)
      document.getElementById('signUpOTPexpire').style.display = 'block'
      document.getElementById('signUpOTPexpire_error').style.display = 'none'
      document.querySelector('.signUp_VerifyOTP_btn').disabled = false
      clearInterval(otpTimer.value)
      signUpTimer()
    })
    .catch(function (error) {
      console.log(error)
    })
  store.state.isLoading = false
}

/* ______ verifyOTP ______ */
async function verifyOTP() {
  const SignUp_verifyOTPError = document.querySelector('.SignUp_verifyOTPError')
  console.log('verifyOTP')
  if (signUpOTP.value == '') {
    SignUp_verifyOTPError.style.display = 'block'
    signUp_Error_Message.value = 'Please enter the One-Time Password (OTP)!'
  } else {
    store.state.isLoading = true
    let result = await axios.post(Base_Url + '/RTRT/account.php', {
      action: 'verify_otp',
      signUpOTP: signUpOTP.value,
      Email: signUpEmail.value
    })
    store.state.isLoading = false
    if (result.status == 200 || result.status == 201) {
      console.log(result.data)
      console.log(signUpEmail.value + ',' + signUpOTP.value)
      if (result.data != 'Incorrect_OTP') {
        document.querySelector('#signUpOTPForm').style.display = 'none'
        document.querySelector('#signUpPasswordForm').style.display = 'flex'
      } else {
        SignUp_verifyOTPError.style.display = 'block'
        signUp_Error_Message.value = 'OTP Incorrect.Try Again!'
      }
    } else {
      console.log(result.data)
    }
  }
}
function verifyOTP_hideError() {
  document.querySelector('.SignUp_verifyOTPError').style.display = 'none'
}

/* ________ SignUp _______ */
async function SignUp() {
  console.log('SignUp')
  console.log(
    signUpFname.value +
      ', ' +
      signUpLname.value +
      ', ' +
      signUpPassword1.value +
      ', ' +
      signUpPassword2.value
  )
  const SignUp_createPasswordError = document.querySelector('.SignUp_createPasswordError')
  if (signUpPassword1.value == '' || signUpPassword2.value == '') {
    SignUp_createPasswordError.style.display = 'block'
    signUp_Error_Message.value = 'Please enter password in both fields!'
  } else {
    if (signUpPassword1.value.length >= 8 && signUpPassword2.value.length >= 8) {
      store.state.isLoading = true
      let result = await axios.post(Base_Url + '/RTRT/account.php', {
        action: 'signup',
        firstName: signUpFname.value,
        lastName: signUpLname.value,
        Email: signUpEmail.value,
        Password1: signUpPassword1.value,
        Password2: signUpPassword2.value
      })
      store.state.isLoading = false
      if (result.status == 200 || result.status == 201) {
        console.log(result.data)
        console.log(signUpPassword1.value + ', ' + signUpPassword2.value)
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
          SignUp_createPasswordError.style.display = 'block'
          signUp_Error_Message.value = 'Please make sure your passwords match!'
        }
      } else {
        console.log(result.data)
      }
    } else {
      SignUp_createPasswordError.style.display = 'block'
      signUp_Error_Message.value = 'Password length must be minimum 8 bytes long!'
    }
  }
}
function SignUp_hideError() {
  document.querySelector('.SignUp_createPasswordError').style.display = 'none'
}
</script>

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
  cursor: pointer;
}
#signUpResendOTP:hover {
  color: #f8b333;
}
#signUpOTPexpire {
  color: burlywood;
  font-size: small;
}
#signUpOTPexpire_error {
  display: none;
  color: #dc3545;
  animation: erroBlinker 1.5s linear infinite;
}
#signUp_emailBtn,
#signUp_verifyBtn,
#signUp_passwordBtn {
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

.R_Error {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
  animation: erroBlinker 1.5s linear infinite;
}
@keyframes erroBlinker {
  50% {
    opacity: 0;
  }
}
</style>
