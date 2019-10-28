import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import firebase from "firebase";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyD3_wCrhxxK26XROMxcFuOo0QWE5UV2Lfs",
  authDomain: "aredwood-sample-passwordless.firebaseapp.com",
  databaseURL: "https://aredwood-sample-passwordless.firebaseio.com",
  projectId: "aredwood-sample-passwordless",
  storageBucket: "aredwood-sample-passwordless.appspot.com",
  messagingSenderId: "479103669513",
  appId: "1:479103669513:web:7611d6dedaac47210dafd8"
};

firebase.initializeApp(firebaseConfig);

Vue.prototype.$firebase = firebase;



const vm = new Vue({
  router,
  store,
  //@ts-ignore
  vuetify,
  render: (h) => h(App),
}).$mount('#app');

firebase.auth().onAuthStateChanged(user => {
  if(!user){
    // not logged in
    vm.$store.commit("setAuthStatus",false);
    vm.$store.commit("setAuth",{})
  }
  else{
    vm.$store.commit("setAuthStatus",true);
    vm.$store.commit("setAuth",user)
  }
})