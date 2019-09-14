<template>
  <div class="stack">
    <card :id="`card-${card.id}`" :key="card.id" v-for="card in cards">
      <slot :card="card"/>
    </card>
  </div>
</template>

<script>
import Card from './Card'
const Swing = require('swing')
export default {
  name: 'Stack',
  props: { cards: Array },
  components: { Card },
  data: () => ({
    stack: Swing.Stack(),
    config: {
      allowedDirections: [
        Swing.Direction.UP,
        Swing.Direction.DOWN,
        Swing.Direction.LEFT,
        Swing.Direction.RIGHT
      ],
      minThrowOutDistance: 500,
      maxThrowOutDistance: 800
    }
  }),
  methods: {
    throwout (id) {
      console.log(`card-${id}`, document.getElementById(`card-${id}`))
      const card = this.stack.getCard(document.getElementById(`card-${id}`))
      card.throwOut(Math.random() * 100 - 50, Math.random() * 100 - 50)
      return new Promise(resolve => {
        card.on('throwoutend', () => {
          card.destroy()
          resolve()
        })
      })
    }
  },
  watch: {
    cards: {
      immediate: true,
      handler (cards) {
        cards.map(card => {
          this.$nextTick(() => {
            const el = document.getElementById(`card-${card.id}`)
            if (this.stack.getCard(el) === null) {
              this.stack.createCard(el)
              this.stack.getCard(el).throwIn(
                Math.random() * 100 - 50,
                Math.random() * 100 - 50
              )
            }
          })
        })
      }
    }
  },
  beforeCreate () {
    this.stack = Swing.Stack(this.config)
    this.stack.on('throwout', eventObject => {
      console.log(eventObject)
    })
  }
}
</script>

<style scoped lang="scss">
  .stack {
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>
