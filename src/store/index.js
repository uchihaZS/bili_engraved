import { createStore } from 'vuex'
import VueXAlong from 'vuex-along'
export default createStore({
  state: {
    vname: '',
    author: '',
    searchValue: '',
  },
  mutations: {
    setVname(state, vname) {
      state.vname = vname;
    },
    setAuthor(state, author) {
      state.author = author;
    },
    setSearchValue(state, searchValue) {
      state.searchValue = searchValue
    },

  },
  actions: {
    updateVname({ commit }, vname) {
      commit('setVname', vname);
    },
    updateAuthor({ commit }, author) {
      commit('setAuthor', author);
    },
    updateSearchValue({ commit }, searchValue) {
      commit('setSearchValue', searchValue)
      console.log(searchValue)
    },
  },
  plugins: [VueXAlong({
    name: 'store',     //存放在localStroage或者sessionStroage 中的名字
    local: { list: [''] },      //是否存放在local中  false 不存放 如果存放按照下面session的配置
    session: { list: ['searchValue'], isFilter: true } //如果值不为false 那么可以传递对象 其中 当isFilter设置为true时， list 数组中的值就会被过滤调,这些值不会存放在seesion或者local中
  })]
})
