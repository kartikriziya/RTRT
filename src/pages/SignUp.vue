<script setup></script>
<template>
  <div class="container" id="signUp">
    <div class="row">
      <div class="col-12 text-center" id="signUpTxt">
        <h1>SignUp Form</h1>
      </div>
    </div>
    <div class="row pt-2">
      <div class="col-sm-2 col-md-3 col-lg-3 col-xl-4"></div>
      <div class="col-sm-8 col-md-6 col-lg-6 col-xl-4">
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
          <div class="col-12 text-center mt-5" id="signUpLogin">
            <h6>Already have an account? <a href="" id="signUpLoginLink">Login</a></h6>
          </div>
        </form>
        <form
          action=""
          class="row gy-3 needs-validation pt-5 ps-3 pe-3 pb-2"
          autocomplete="off"
          id="signUpOTPForm"
          novalidate
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
          <div class="col-12 text-center mt-5" id="signUpLogin">
            <h6>Already have an account? <a href="" id="signUpLoginLink">Login</a></h6>
          </div>
        </form>
      </div>
      <div class="col-sm-2 col-md-3 col-lg-3 col-xl-4"></div>
    </div>
  </div>
</template>
<style scoped>
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
