import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null
  },
  getters: {
    loggedIn(state) {
      return state.token !== null
    }
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null
    }
  },
  actions: {
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('http://api.lineysoft2.com:8080/controllers/login/login.php', {
          username: credentials.username,
          password: credentials.password,
        })
            .then(response => {
              const token = response.data
              localStorage.setItem('access_token', token)
              context.commit('retrieveToken', token)
              resolve(response)
              // console.log(response);
            })
            .catch(error => {
              console.log(error)
              reject(error)
            })
      })
    },
    destroyToken(context) {
      if (context.getters.loggedIn) {
        localStorage.removeItem('access_token')
        context.commit('destroyToken')
      }
    }
  }
})
