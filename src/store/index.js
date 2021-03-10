import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	charts: []
  },
  getters: {
  	currCharts: state => state.charts.map(item => ({...item}))
  },
  mutations: {
  	SET_CHART(state, dataObj) {
  		state.charts.unshift(dataObj)
  	}
  },
  actions: {
  	async getChartData({commit}, {type, url}) {
		const res = await axios(url.trim())

  		commit('SET_CHART', {
  			name: type.trim(),
  			data: res.data,
  		})
  	}
  }
})
