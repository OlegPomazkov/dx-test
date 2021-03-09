import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	charts: [
  		{name: 'pie'},
  		{name: 'line'},
  		{name: 'pie'}
  	]
  },
  getters: {
  	currCharts: state => state.charts.map(item => ({...item}))
  },
  mutations: {
  	SET_CHART(state, dataObj) {
  		state.charts.push(dataObj)
  	}
  },
  actions: {
  	setChart({commit}, dataObj) {
  		commit('SET_CHART', dataObj)
  	}
  }
})
