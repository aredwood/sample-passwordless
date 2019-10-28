import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authState:false,
    auth:{
      uid:"",
      email:"",
      displayName:""
    }

  },
  mutations: {
    setAuthStatus(state,status){
      state.authState = status
    },
    setAuth(state,currentUser){
      state.auth =currentUser;
    }
  },
  actions: {
  },
  modules: {
  },
});
