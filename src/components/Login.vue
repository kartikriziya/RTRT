<script setup>
import { ref } from 'vue'
import axios from 'axios'

const Base_Url = 'https://olivewood.elementfx.com'

const loginEmail = ref('')
const loginPassword = ref('')

const forgetPasswordEmail = ref('')

const loginVverifyOTP = ref('')

const password1 = ref('')
const password2 = ref('')

/* ______ login ______ */
async function login() {
  console.log('login')
  await axios
    .post(Base_Url + '/account.php', {
      action: 'login_login',
      logEmail: loginEmail.value,
      logPassword: loginPassword.value
    })
    .then((result) => {
      console.log(result.data)
      console.log(loginEmail.value + ', ' + loginPassword.value)
      document.querySelector('#loginForm').style.display = 'none'
      document.querySelector('#loginForm').style.display = 'flex'
    })
    .catch(function (error) {
      console.log(error)
    })
}
/* ______ forgetPassword ______ */
function forgetPassword() {
    document.querySelector('#loginForm').style.display = 'none'
    document.querySelector('#getOTPForm').style.display = 'flex' 
}

/* ______ getOTP ______ */
async function getOTP() {
  console.log('getOTP')
  await axios
    .post(Base_Url + '/forgetPassword.php', {
      action: 'get_OTP',
      forgetPasswordEmail: forgetPasswordEmail.value
    })
    .then((result) => {
      console.log(result.data)
      console.log(forgetPasswordEmail.value)
      if(result.data != "No_Email_Found!") {
        document.querySelector('#getOTPForm').style.display = 'none'
        document.querySelector('#verifyOTPForm').style.display = 'flex'
      }
      else{
        alert(result.data)
      }

    })
    .catch(function (error) {
      console.log(error)
    })
}

/* ______ verifyOTP ______ */
async function verifyOTP() {
  console.log('verifyOTP')
  await axios
    .post(Base_Url + '/forgetPassword.php', {
      action: 'verify_OTP',
      forgetPasswordEmail: forgetPasswordEmail.value,
      loginVverifyOTP: loginVverifyOTP.value
    })
    .then((result) => {
      console.log(result.data)
      console.log(forgetPasswordEmail.value + ',' + loginVverifyOTP.value)
      if(result.data != "Incorrect_OTP")
      {
        document.querySelector('#verifyOTPForm').style.display = 'none'
        document.querySelector('#changePasswordFrom').style.display = 'flex'
      }
      else{
        alert(result.data)
      }     
    })
    .catch(function (error) {
      console.log(error)
    })
}

/* ______ Reset Password ______ */
async function resetPassword() {
  console.log('resetPassword')
  await axios
    .post(Base_Url + '/forgetPassword.php', {
      action: 'reset_Password',
      forgetPasswordEmail: forgetPasswordEmail.value,
      password1: password1.value,
      password2: password2.value
    })
    .then((result) => {
      console.log(result.data)
      console.log(password1.value + ',' + password2.value)
      if(password1.value == password2.value){
        document.querySelector('#changePasswordFrom').style.display = 'none'
        document.querySelector('#loginForm').style.display = 'flex'
      }
      else {
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
  <!--                                            LogIn Form                                               -->
  <!-- --------------------------------------------------------------------------------------------------- -->
  <form
    action=""
    class="row gy-3 needs-validation pt-5 ps-3 pe-3 pb-5"
    autocomplete="off"
    id="loginForm"
  >

  <div class="col-sm-3"></div>
    <div class="col-sm-6 text-center vertical-top d-grid pt-1" id = "signin1">
      <div id = "signin">Sign in</div>
    </div>
  <div class="col-sm-3"></div>

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
        <label for="loginEmail" id="loginLabels">Email address</label>
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
        <label for="loginPassword" id="loginLabels">Password</label>
      </div>
    </div>
    <div class="col-12 ms-2">
      <a id="loginForgot" @click.prevent="forgetPassword()">Forgot Password?</a>
    </div>
    <div class="col-sm-3"></div>
    <div class="col-sm-6 text-center d-grid pt-3">
      <button class="btn" id="loginBtn" @click.prevent="login()">Login</button>
    </div>
    <div class="col-sm-3" ></div>
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
    style="display: none;"
> 

  <div class="col-sm-3"></div>
    <div class="col-sm-6 text-center vertical-top d-grid pt-1" id = "signin1">
      <div id = "get_OTP">Get OTP</div>
  </div>
    <div class="col-sm-3"></div>
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
        <label for="forgetPasswordEmail" id="loginLabels" @click.prevent="getOTP()">Email address</label>
      </div>
    </div>
    <div class="col-sm-3"></div>
    <div class="col-sm-6 text-center d-grid pt-3">
      <button class="btn" id="getOTPBtn" @click.prevent="getOTP()">Get OTP</button>
    </div>
    <div class="col-sm-3"></div>
</form>

<!-- --------------------------------------------------------------------------------------------------- -->
<!--                                            Verify OTP                                               -->
<!-- --------------------------------------------------------------------------------------------------- -->

<!-- verifyOTPForm -->
<form
    action=""
    class="row gy-3 needs-validation pt-5 ps-3 pe-3 pb-5"
    autocomplete="off"
    id="verifyOTPForm"
    novalidate
    style="display: none;"
>
  <div class="col-sm-3"></div>
    <div class="col-sm-6 text-center vertical-top d-grid pt-1" id = "signin1">
      <div id = "verify_OTP">Verify OTP</div>
  </div>  
  <div class="col-12">
      <div class="form-floating">
        <input
          v-model="loginVverifyOTP"
          type="text"
          class="form-control"
          id="loginVverifyOTP"
          placeholder="12345678"
          required
        />
        <label for="loginVverifyOTP"  id="loginLabels">OTP</label>
      </div>
    </div>
    <div class="col-sm-3"></div>
    <div class="col-sm-6 text-center d-grid pt-3">
      <button class="btn" id="resetPasswordBtn" @click.prevent="verifyOTP()">Reset Password</button>
    </div>
    <div class="col-sm-3"></div>
</form>

<!-- --------------------------------------------------------------------------------------------------- -->
<!--                                            Change Password                                          -->
<!-- --------------------------------------------------------------------------------------------------- -->

<!-- changePasswordFrom -->
<form
    action=""
    class="row gy-3 needs-validation pt-5 ps-3 pe-3 pb-5"
    autocomplete="off"
    id="changePasswordFrom"
    novalidate
    style="display: none;"
  >
  <div class="col-sm-3"></div>
    <div class="col-sm-6 text-center vertical-top d-grid pt-1" id = "signin1">
      <div id = "change_password">Change Password</div>
  </div>  
    <div class="col-12">
      <div class="form-floating">
        <input
          v-model="password1"
          type="password"
          class="form-control"
          id="password1"
          placeholder="password"
          required
        />
        <label for="password1"  id="loginLabels">Password</label>
      </div>
    </div>
    <div class="col-12">
      <div class="form-floating">
        <input
          v-model="password2"
          type="password"
          class="form-control"
          id="password2"
          placeholder="password"
          required
        />
        <label for="password2"  id="loginLabels">Re-password</label>
      </div>
    </div>
    <div class="col-sm-3"></div>
    <div class="col-sm-6 text-center d-grid pt-3">
      <button class="btn" id="changePasswordBtn" @click.prevent="resetPassword()">Change Password</button>
    </div>
    <div class="col-sm-3"></div>
</form>
</template>
<style scoped>
#loginForm,
#changePasswordFrom,
#verifyOTPForm,
#getOTPForm {
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
  /* color: #f8b333; */
}
#loginForgot {
  color: #b47501;
  /* color: #f8b333; */
}
#loginForgot:hover {
  color: #f7bb08;
}
#loginBtn {
  /* border-radius: 15px;
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
  --bs-gradient: none; */
  font-family: Rockwell;
  display: inline-block;
  padding: 10px 20px;
  background-color: #f8b333;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

#loginBtn:hover{
  background-color: #f7bb08;
}

#signin{
  font-size: 23px;
  font-weight: bold;
}


/* Email */
#getOTPBtn {
  font-family: Rockwell;
  display: inline-block;
  padding: 10px 20px;
  background-color: #f8b333;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

#getOTPBtn:hover{
  background-color: #f7bb08;
}

#get_OTP{
  font-size: 23px;
  font-weight: bold;
}


/* Verify OTP*/ 
#resetPasswordBtn {
  font-family: Rockwell;
  display: inline-block;
  padding: 10px 20px;
  background-color: #f8b333;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

#resetPasswordBtn:hover{
  background-color: #f7bb08;
}

#verify_OTP{
  font-size: 23px;
  font-weight: bold;
}


/* Password */
#changePasswordBtn {
  font-family: Rockwell;
  display: inline-block;
  padding: 10px 20px;
  background-color: #f8b333;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

#changePasswordBtn:hover{
  background-color: #f7bb08;
}

#change_password{
  font-size: 23px;
  font-weight: bold;
}

</style>
