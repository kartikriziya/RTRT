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
    .post(Base_Url + '/account.php', {
      action: 'verify_email',
      firstName: signUpFname.value,
      lastName: signUpLname.value,
      Email: signUpEmail.value
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
    .post(Base_Url + '/account.php', {
      action: 'verify_otp',
      signUpOTP: signUpOTP.value,
      Email: signUpEmail.value
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
    .post(Base_Url + '/account.php', {
      action: 'signup',
      firstName: signUpFname.value,
      lastName: signUpLname.value,
      Email: signUpEmail.value,
      Password1: signUpPassword1.value,
      Password2: signUpPassword2.value
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
