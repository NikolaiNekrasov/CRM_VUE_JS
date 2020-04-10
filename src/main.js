import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyBfkTzBQ_n_Eq0M_vmoIcOYuWvdfI9JLWU",
  authDomain: "vue-crm-n.firebaseapp.com",
  databaseURL: "https://vue-crm-n.firebaseio.com",
  projectId: "vue-crm-n",
  storageBucket: "vue-crm-n.appspot.com",
  messagingSenderId: "428381780368",
  appId: "1:428381780368:web:98b749dfc6f912161f5b15",
  measurementId: "G-MFT2M404Q0"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
