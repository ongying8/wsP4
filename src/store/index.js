import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = "https://jsonplaceholder.typicode.com/posts/"
const Header = { Accecpt: "application/json" }

export default new Vuex.Store({
  state: {
    currentUser: [],
    allUsers: [],
  },
  mutations: {
    setCurrentUser(state, payload) {
      if(state.currentUser.length > 0) {
        state.currentUser.pop();
      }
      state.currentUser.push(payload);
      state.allUsers.push(payload);
    }
  },
  actions: {

    async setCurrentUser(state,payload){
      const user = await fetch(url+payload, { Header });
      const data = await user.json();
      state.commit('setCurrentUser',data);
    }
    // setCurrentUser(state, payload){
    //   const user = fetch(url+payload, { Header });
    //   const data = user.json();
    //   state.commit('setCurrentUser', data);
    // }
  },
  getters: {
    getUser: state => state.currentUser,
    getAllUser: state => state.allUsers
  }
})
