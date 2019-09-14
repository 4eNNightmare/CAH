<template>
  <stack :cards="rooms">
    <template slot-scope="card">
      <button @click="enter(card.card.id)">
        {{ card.card.data.name }}
      </button>
    </template>
  </stack>
</template>

<script>
import Stack from './Stack'
export default {
  name: 'List',
  components: { Stack },
  props: {
    rooms: Array
  },
  methods: {
    enter (id) {
      this.$router.push(`/game/${id}`)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
