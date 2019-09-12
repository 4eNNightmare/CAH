<template>
  <button @click="login">
    Login as guest
  </button>
</template>

<script>

export default {
  name: 'login',
  methods: {
    login () {
      this.$firebase.auth.signInAnonymously().then(user => {
        this.$router.push('/rooms')
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
