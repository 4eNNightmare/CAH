import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let _unsubscribeRooms

export default new Vuex.Store({
  state: {
    rooms: []
  },
  mutations: {
    updateRooms (state, rooms) {
      state.rooms = rooms
    }
  },
  actions: {
    subscribeRooms (context) {
      _unsubscribeRooms = Vue.prototype.$firebase.db.collection('rooms').orderBy('created', 'desc').onSnapshot(querySnapshot => {
        let rooms = []
        querySnapshot.forEach(doc => {
          rooms.push({ id: doc.id, data: doc.data() })
        })
        context.commit('updateRooms', rooms)
      })
    },
    unsubscribeRooms () {
      _unsubscribeRooms()
    }
  }
})
