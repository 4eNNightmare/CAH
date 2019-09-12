<template>
  <div class="rooms">
    <button @click="logout">
      Exit
    </button>
    <button @click="createRoom">
      Create room
    </button>
    <List :items="this.$store.state.rooms"/>
  </div>
</template>

<script>
import List from '../components/List'

export default {
  name: 'rooms',
  components: { List },
  computed: {
    rooms () {
      return this.$store.state.rooms
    }
  },
  methods: {
    logout () {
      this.$firebase.auth.signOut().then(() => {
        this.$router.push('/')
      })
    },
    createRoom () {
      this.$dialog({
        title: 'Create room',
        text: 'Create room'
      }).onOk(() => {
        this.$firebase.db.collection('rooms').doc().set({
          owner: this.$firebase.auth.currentUser.uid,
          created: +new Date(),
          players: []
        }).then(() => {
          console.log('Deu certo')
        }).catch(error => {
          console.error('algo de errado nao está certo', error)
        })
      })
        .onCancel(() => console.log('aff'))
    }
  },
  mounted () {
    this.$store.dispatch('subscribeRooms')
  },
  beforeDestroy () {
    this.$store.dispatch('unsubscribeRooms')
  }
}
</script>
