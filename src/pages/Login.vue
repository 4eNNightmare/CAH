<template>
  <stack ref="loginCard" :cards="[{id: 'login'}]">
    <template>
      <button @click="login">
        Login as guest
      </button>
    </template>
  </stack>
</template>

<script>
import Stack from '../components/Stack'
export default {
  name: 'login',
  components: { Stack },
  methods: {
    login () {
      this.$firebase.auth.signInAnonymously().then(user => {
        this.$refs.loginCard.throwout('login').then(() => {
          this.$router.push('/rooms')
        })
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
