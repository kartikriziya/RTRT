import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './main.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(far)
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()

const app = createApp(App)
app.use(router)
app.use(bootstrap)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
