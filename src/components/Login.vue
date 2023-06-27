<template>
  <!-- --------------------------------------------------------------------------------------------------- -->
  <!--                                            LogIn Form                                               -->
  <!-- --------------------------------------------------------------------------------------------------- -->
  <form
    action=""
    class="row gy-3 needs-validation pt-5 ps-3 pe-3 pb-5"
    autocomplete="off"
    id="loginForm"
  >
    <div class="col-12">
      <div class="form-floating">
        <input
          v-model="loginEmail"
          type="email"
          class="form-control"
          id="loginEmail"
          placeholder="name@example.com"
          required
        />
        <label for="loginEmail" id="loginLabels">Email address *</label>
      </div>
    </div>
    <div class="col-12">
      <div class="form-floating">
        <input
          v-model="loginPassword"
          type="Password"
          class="form-control"
          id="loginPassword"
          placeholder="********"
          required
        />
        <label for="loginPassword" id="loginLabels">Password *</label>
      </div>
    </div>
    <div class="col-12">
      <div class="R_Error Login_Error">{{ LogIn_Error_Message }}</div>
    </div>
    <div class="col-12 ms-2">
      <a id="loginForgot" @click.prevent="forgetPassword()">Forgot Password?</a>
    </div>
    <div class="col-sm-3"></div>
    <div class="col-sm-6 text-center d-grid pt-3">
      <button class="btn" id="loginBtn" @click.prevent="login()">Login</button>
    </div>
    <div class="col-sm-3"></div>
  </form>

  <!-- --------------------------------------------------------------------------------------------------- -->
  <!--                                            Forget Password                                          -->
  <!-- --------------------------------------------------------------------------------------------------- -->

  <!-- getOTPForm -->
  <form
    action=""
    class="row gy-3 needs-validation pt-5 ps-3 pe-3 pb-5"
    autocomplete="off"
    id="getOTPForm"
    novalidate
    style="display: none"
  >
    <div class="col-12">
      <div class="form-floating">
        <input
          v-model="forgetPasswordEmail"
          type="email"
          class="form-control"
          id="forgetPasswordEmail"
          placeholder="name@example.com"
          required
        />
        <label for="forgetPasswordEmail" id="loginLabels" @click.prevent="getOTP()"
          >Email address *</label
        >
      </div>
    </div>
    <div class="col-12">
      <div class="form-floating">
        <div class="R_Error Login_getOTPError">{{ LogIn_Error_Message }}</div>
      </div>
    </div>

    <div class="col-sm-3"></div>
    <div class="col-sm-6 text-center d-grid pt-3">
      <button class="btn" id="getOTPBtn" @click.prevent="getOTP()">Get OTP</button>
    </div>
    <div class="col-sm-3"></div>
  </form>

  <!-- verifyOTPForm -->
  <form
    action=""
    class="row gy-3 needs-validation pt-5 ps-3 pe-3 pb-5"
    autocomplete="off"
    id="verifyOTPForm"
    novalidate
    style="display: none"
  >
    <div class="col-12">
      <div class="form-floating">
        <input
          v-model="loginVerifyOTP"
          type="text"
          class="form-control"
          id="loginVerifyOTP"
          placeholder="12345678"
          required
        />
        <label for="loginVerifyOTP" id="loginLabels">OTP *</label>
      </div>
    </div>

    <div class="col-12 ms-2">
      <a id="logInResendOTP" @click.prevent="LogIn_resendOTP()">Resend OTP?</a>
    </div>
    <div class="col-12 ms-2" id="logInOTPexpire">
      OTP expire in : <span>{{ login_OTP_Time }}</span>
    </div>

    <div class="col-12">
      <div class="form-floating">
        <div class="R_Error Login_verifyOTPError">{{ LogIn_Error_Message }}</div>
      </div>
    </div>
    <div class="col-sm-3"></div>
    <div class="col-sm-6 text-center d-grid pt-3">
      <button class="btn LogIn_VerifyOTP_btn" id="resetPasswordBtn" @click.prevent="verifyOTP()">
        Reset Password
      </button>
    </div>
    <div class="col-sm-3"></div>
  </form>

  <!-- changePasswordFrom -->
  <form
    action=""
    class="row gy-3 pt-5 ps-3 pe-3 pb-5"
    autocomplete="off"
    id="changePasswordFrom"
    novalidate
    style="display: none"
  >
    <div class="col-12">
      <div class="form-floating">
        <input
          v-model="loginForgotPassword1"
          type="password"
          class="form-control"
          id="loginForgotPassword1"
          placeholder="password"
          required
        />
        <label for="loginForgotPassword1" id="loginLabels">Password *</label>
      </div>
    </div>
    <div class="col-12">
      <div class="form-floating">
        <input
          v-model="loginForgotPassword2"
          type="password"
          class="form-control"
          id="loginForgotPassword2"
          placeholder="password"
          required
        />
        <label for="loginForgotPassword2" id="loginLabels">Re-password *</label>
      </div>
    </div>
    <div class="col-12">
      <div class="form-floating">
        <div class="R_Error Login_createPasswordError">{{ LogIn_Error_Message }}</div>
      </div>
    </div>
    <div class="col-sm-3"></div>
    <div class="col-sm-6 text-center d-grid pt-3">
      <button class="btn" id="changePasswordBtn" @click.prevent="resetPassword()">
        Change Password
      </button>
    </div>
    <div class="col-sm-3"></div>
  </form>
</template>

<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const store = inject('store')
const router = useRouter()
const Base_Url = 'https://olivewood.elementfx.com'

const loginEmail = ref('')
const loginPassword = ref('')
const forgetPasswordEmail = ref('')
const login_OTP_Time = ref('')
const loginVerifyOTP = ref('')
const loginForgotPassword1 = ref('')
const loginForgotPassword2 = ref('')

const LogIn_Error_Message = ref('')

/* ______ login ______ */
async function login() {
  const Login_Error = document.querySelector('.Login_Error')
  console.log('login')
  if (loginEmail.value == '' || loginPassword.value == '') {
    Login_Error.style.display = 'block'
    LogIn_Error_Message.value = 'Please enter valid Credentials!'
  } else {
    //store.state.isLoading = true
    let result = await axios.post(Base_Url + '/account.php', {
      action: 'login_login',
      logEmail: loginEmail.value,
      logPassword: loginPassword.value
    })
    // Email validation
    const Login_emailRegex = /@gmail\.com$/i
    if (!Login_emailRegex.test(loginEmail.value)) {
      Login_Error.style.display = 'block'
      LogIn_Error_Message.value = 'Please use a Gmail account!'
      return
    }
    store.state.isLoading = false

    if (result.status == 200 || result.status == 201) {
      console.log(result.data)
      console.log(loginEmail.value + ', ' + loginPassword.value)
      if (result.data == 'No_Email_Found') {
        document.querySelector('#loginForm').style.display = 'none'
        document.querySelector('#loginForm').style.display = 'flex'
        Login_Error.style.display = 'block'
        LogIn_Error_Message.value =
          'Email not found. Please check your email address or sign up for a new account!'
      } else if (result.data == 'LOGIN_SUCCESSFULL') {
        document.querySelector('#loginForm').style.display = 'none'
        document.querySelector('#loginForm').style.display = 'flex'
        /* Email get saved in sessionStorage as named of 'user-email' */
        sessionStorage.setItem('user-email', JSON.stringify(loginEmail.value))
        store.methods.loginUser()
        router.push({ path: '/reservation' })
      } else {
        document.querySelector('#loginForm').style.display = 'none'
        document.querySelector('#loginForm').style.display = 'flex'
        LogIn_Error_Message.value =
          'Invalid email or password. Please check your credentials and try again!'
      }
    } else {
      console.log(result.data)
    }
  }
}
/* ______ forgetPassword ______ */
function forgetPassword() {
  document.querySelector('#loginForm').style.display = 'none'
  document.querySelector('#getOTPForm').style.display = 'flex'
}

/* ______ getOTP ______ */
async function getOTP() {
  const Login_getOTPError = document.querySelector('.Login_getOTPError')
  console.log('getOTP')
  if (forgetPasswordEmail.value == '') {
    Login_getOTPError.style.display = 'block'
    LogIn_Error_Message.value = 'Please enter your email address!'
  } else {
    let result = await axios.post(Base_Url + '/forgetPassword.php', {
      action: 'get_OTP',
      forgetPasswordEmail: forgetPasswordEmail.value
    })
    if (result.status == 200 || result.status == 201) {
      console.log(result.data)
      console.log(forgetPasswordEmail.value)
      if (result.data != 'No_Email_Found!') {
        document.querySelector('#getOTPForm').style.display = 'none'
        document.querySelector('#verifyOTPForm').style.display = 'flex'

        let timeleft = 10
        const logInOTPexpire = document.getElementById('logInOTPexpire')
        const otpTimer = setInterval(function () {
          if (timeleft <= 0) {
            clearInterval(otpTimer)
            login_OTP_Time.value = null
            logInOTPexpire.innerHTML = 'OTP expired'
            logInOTPexpire.style.color = '#dc3545'
            logInOTPexpire.classList.add('R_Error')
            logInOTPexpire.style.display = 'block'

            document.querySelector('.signUp_VerifyOTP_btn').disabled = true
          } else {
            login_OTP_Time.value = timeleft
          }
          timeleft -= 1
        }, 1000)
      } else {
        //alert(result.data)
        Login_getOTPError.style.display = 'block'
        LogIn_Error_Message.value =
          'Email not found. Please check your email address or sign up for a new account!'
      }
    } else {
      console.log(result.data)
    }
  }
}

/* ______ ResendOTP ______ */
async function LogIn_resendOTP() {
  console.log('LogIn_resendOTP')
  let result = await axios.post(Base_Url + '/forgetPassword.php', {
    action: 'LogIn_resendOTP',
    forgetPasswordEmail: forgetPasswordEmail.value
  })
  if (result.status == 200 || result.status == 201) {
    console.log(result.data)
    console.log(forgetPasswordEmail.value)
    document.querySelector('.LogIn_VerifyOTP_btn').disabled = true
  } else {
    console.log(result.data)
  }
}

/* ______ verifyOTP ______ */
async function verifyOTP() {
  const Login_verifyOTPError = document.querySelector('.Login_verifyOTPError')
  console.log('verifyOTP')
  if (loginVerifyOTP.value == '') {
    Login_verifyOTPError.style.display = 'block'
    LogIn_Error_Message.value = 'Please enter the One-Time Password (OTP)!'
  } else {
    let result = await axios.post(Base_Url + '/forgetPassword.php', {
      action: 'verify_OTP',
      forgetPasswordEmail: forgetPasswordEmail.value,
      loginVerifyOTP: loginVerifyOTP.value
    })
    if (result.status == 200 || result.status == 201) {
      console.log(result.data)
      console.log(forgetPasswordEmail.value + ',' + loginVerifyOTP.value)
      if (result.data != 'Incorrect_OTP') {
        document.querySelector('#verifyOTPForm').style.display = 'none'
        document.querySelector('#changePasswordFrom').style.display = 'flex'
      } else {
        //alert(result.data)
        Login_verifyOTPError.style.display = 'block'
        LogIn_Error_Message.value =
          'Incorrect OTP. Please check your One-Time Password and try again!'
      }
    } else {
      console.log(result.data)
    }
  }
}

/* ______ Reset Password ______ */
async function resetPassword() {
  const Login_createPasswordError = document.querySelector('.Login_createPasswordError')
  console.log('resetPassword')
  if (loginForgotPassword1.value == '' || loginForgotPassword2.value == '') {
    Login_createPasswordError.style.display = 'block'
    LogIn_Error_Message.value = 'Please enter your new password!'
  } else {
    let result = await axios.post(Base_Url + '/forgetPassword.php', {
      action: 'reset_Password',
      forgetPasswordEmail: forgetPasswordEmail.value,
      password1: loginForgotPassword1.value,
      password2: loginForgotPassword1.value
    })
    if (result.status == 200 || result.status == 201) {
      console.log(result.data)
      console.log(loginForgotPassword1.value + ',' + loginForgotPassword2.value)
      if (loginForgotPassword1.value == loginForgotPassword2.value) {
        document.querySelector('#changePasswordFrom').style.display = 'none'
        document.querySelector('#loginForm').style.display = 'flex'
      } else {
        //alert(result.data)
        Login_createPasswordError.style.display = 'block'
        LogIn_Error_Message.value = 'Please make sure your passwords match!'
      }
    } else {
      console.log(result.data)
    }
  }
}
</script>

<style scoped>
#loginForm,
#changePasswordFrom,
#verifyOTPForm,
#getOTPForm {
  margin-top: 5%;
  /* box-shadow: rgba(248, 179, 51, 0.1) 0px 20px 30px; */
}
#loginEmail,
#loginPassword,
#forgetPasswordEmail,
#loginVverifyOTP,
#password1,
#password2 {
  background-color: #f4ebd9;
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
#loginLabels,
#loginForgot {
  color: #b47501;
}
#loginForgot:hover {
  color: #f8b333;
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
/* Email */
#getOTPBtn:hover {
  color: #f8b333;
}
#getOTPBtn {
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

/* Verify OTP */
#verifyOTP {
  color: #b47501;
}
#resetPasswordBtn:hover {
  color: #f8b333;
}
#logInResendOTP {
  color: #b47501;
}
#logInResendOTP:hover {
  color: #f8b333;
}
#logInOTPexpire {
  color: burlywood;
}
#resetPasswordBtn {
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

/* Password */
#changePasswordBtn:hover {
  color: #f8b333;
}
#changePasswordBtn {
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
