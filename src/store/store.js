import { reactive } from 'vue'

const state = reactive({ isLoading: true, isUser: false, user: '' })

const methods = {
  loginUser() {
    state.user = sessionStorage.getItem('user-email')
    state.isUser = true
  }
}

export default {
  state,
  methods
}
