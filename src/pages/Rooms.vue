<template>
  <div class="rooms">
    <button @click="logout">
      Exit
    </button>
    <button @click="createRoom">
      Create room
    </button>
    <List :rooms="this.$store.state.rooms"/>
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
        content: 'Name: <input data-name="name"/>',
        persistent: true,
        cancel: true,
        validations: [
          { target: 'name', rule: v => !!v, error: new Error('"Name" cannot be empty.') }
        ]
      }).onOk(data => {
        this.$firebase.db.collection('rooms').doc().set({
          name: data.name,
          rules: ['default'],
          owner: this.$firebase.auth.currentUser.uid,
          created: +new Date(),
          players: [this.$firebase.auth.currentUser.uid]
        }).catch(error => {
          this.$dialog({
            title: 'Error',
            content: error.message
          })
        })
      }).onCancel(() => console.log('aff')).onError(errors => {
        this.$dialog({
          title: 'Error',
          content: errors.toString()
        })
      })
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
