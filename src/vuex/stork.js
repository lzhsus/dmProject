import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
       userInfo:false,
       count:0,
       userName:''
    },
    mutations: {
      userDl(){
        console.log('0000')
        this.state.userInfo=true
      }
    }
})

export default store
