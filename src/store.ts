import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import dayjs from 'dayjs'
import axios from 'axios'

Vue.use(Vuex)

interface State {
  today: Date
  toDate: Date
  info: []
  loading: boolean
}

const API_URL =
  'https://script.google.com/macros/s/AKfycbz-Dn3YLNsx4wWJ3zTcgukvEY7LmrZaxSIGgwy_L6M_5b5hLsw/exec'

export default new Vuex.Store({
  state: {
    today: dayjs(new Date()).format('YYYY-MM-DD'),
    toDate: dayjs(new Date()).format('YYYY-MM-DD'),
    info: [],
    loading: false
  },

  actions: {
    async getJSON() {
      if (!this.state.loading) {
        await axios
          .get(API_URL)
          .then(response => (this.state.info = response.data))
          .finally(
            () => (
              (this.state.loading = true),
              this.commit('setInfo', this.state.info),
              this.commit('setLoading', this.state.loading)
            )
          )
      }
    }
  },

  mutations: {
    setInfo(state, info) {
      state.info = info
      console.log('setInfo:' + state.info.length)
    },
    setLoading(state, loading) {
      state.loading = loading
      console.log('setLoading:' + state.loading)
    },
    setToDate(state, toDate) {
      state.toDate = toDate
      console.log('setToDate:' + state.toDate)
    }
  }
})
