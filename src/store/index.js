import { createStore } from 'vuex'

export default createStore({
  state: {
    vname: '',
    author: '',
    searchValue:'',
  },
  mutations: {
    setVname(state, vname) {
      state.vname = vname;
    },
    setAuthor(state, author) {
      state.author = author;
    },
    setSearchValue(state,searchValue){
      state.searchValue=searchValue
    }
  },
  actions: {
    updateVname({ commit }, vname) {
      commit('setVname', vname);
    },
    updateAuthor({ commit }, author) {
      commit('setAuthor', author);
    },
    updateSearchValue({commit},searchValue){
      commit('setSearchValue',searchValue)
    }
  },
})
