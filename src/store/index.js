import { createStore } from 'vuex'

export default createStore({
  state: {
    vname: '',
    author: ''
  },
  mutations: {
    setVname(state, vname) {
      state.vname = vname;
    },
    setAuthor(state, author) {
      state.author = author;
    },
  },
  actions: {
    updateVname({ commit }, vname) {
      commit('setVname', vname);
    },
    updateAuthor({ commit }, author) {
      commit('setAuthor', author);
    },
  },
})
