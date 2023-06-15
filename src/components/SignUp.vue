<script setup>
import axios from 'axios'

async function verifyEmail() {
  console.log('verify clicked')
  await axios
    .post('https://olivewood.elementfx.com/connection.php', {
      action: 'check'
    })
    .then((result) => {
      console.log(result.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}
</script>
<template>
  <form
    action=""
    class="row gy-3 needs-validation pt-2 ps-3 pe-3 pb-2"
    autocomplete="off"
    id="signUpForm"
    novalidate
  >

  <div class="col-sm-3"></div>
    <div class="col-sm-6 text-center vertical-up d-grid pt-1">
      <div id="signup">Create Account</div>
    </div>


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
  </form>
  <form
    action=""
    class="row gy-3 needs-validation pt-5 ps-3 pe-3 pb-2"
    autocomplete="off"
    id="signUpOTPForm"
    novalidate
    style="display: none"
  >
    <div class="col-sm-6">
      <div class="form-floating">
        <input
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
    <div class="col-sm-6">
      <div class="row">
        <div class="col-12">
          <a href="#" id="signUpResendOTP">Resend OTP?</a>
        </div>
        <div class="col-12" id="signUpOTPexpire">OTP expire in : <span>123</span></div>
      </div>
    </div>
    <div class="col-sm-3"></div>
    <div class="col-sm-6 text-center d-grid pt-3">
      <button class="btn" id="signUpBtn">Verify OTP</button>
    </div>
    <div class="col-sm-3"></div>
  </form>
  <form
    action=""
    class="row gy-3 needs-validation pt-5 ps-3 pe-3 pb-2"
    autocomplete="off"
    id="signUpPasswordForm"
    novalidate
    style="display: none"
  >
    <div class="col-sm-6">
      <div class="form-floating">
        <input
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
    <div class="col-sm-6">
      <div class="form-floating">
        <input
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
      <button class="btn" id="signUpBtn">Signup</button>
    </div>
    <div class="col-sm-3"></div>
  </form>
</template>
<style scoped>
#signUpForm,
#signUpOTPForm,
#signUpPasswordForm {
  margin-top: 5%;
  /* box-shadow: rgba(248, 179, 51, 0.1) 0px 20px 30px; */
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

#signUpBtn:hover{
  background-color: #f7bb08;

}

#signup{
  font-size: 23px;
  font-weight: bold;
}
</style>
