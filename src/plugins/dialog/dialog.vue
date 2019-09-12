<template>
  <div ref="dialog" class="dialog">
    <div class="dialog-container">
      <div class="dialog-surface">
        <h2 v-if="title" class="dialog-title">
          {{ title }}
        </h2>
        <div v-if="text" class="dialog-content">
          {{ text }}
        </div>
        <footer class="dialog-actions">
          <button @click="cancel">CANCEL</button>
          <button @click="ok">OK</button>
        </footer>
      </div>
    </div>
    <div class="dialog-scrim" @click="dismiss"></div>
  </div>
</template>

<script>
export default {
  props: { title: String, text: String },
  methods: {
    ok () {
      this.$emit('ok')
      this.dismiss()
    },
    cancel () {
      this.$emit('cancel')
      this.dismiss()
    },
    dismiss () {
      this.$refs.dialog.classList.remove('open')
      setTimeout(() => this.$destroy(), 250)
    },
    open () {
      this.$refs.dialog.classList.add('open')
    }
  },
  beforeDestroy () {
    this.$root.$el.parentNode.removeChild(this.$root.$el)
  }
}
</script>

<style scoped lang="scss">
.dialog {
  position: absolute;
  display: flex;
  z-index: 7;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  pointer-events: none;
  .dialog-scrim, .dialog-container {
    transition: all 75ms cubic-bezier(0.4, 0.0, 1, 1);
    pointer-events: none;
  }
  &.open {
    .dialog-scrim, .dialog-surface {
      pointer-events: all;
    }
    .dialog-scrim, .dialog-container {
      transition: all 150ms cubic-bezier(0.0, 0.0, 0.2, 1);
      opacity: 1;
    }
    .dialog-container {
      transform: scale(1);
    }
  }
  .dialog-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    height: 100%;
    transform: scale(0.8);
    opacity: 0;
    .dialog-surface {
      max-height: 360px;
      min-width: 240px;
      max-width: calc(100vw - 32px);
      border-radius: 4px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      flex-grow: 0;
      flex-shrink: 0;
      box-sizing: border-box;
      overflow-y: auto;
      box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, .12);
      .dialog-title {
        font-family: Roboto, sans-serif;
        color: rgba(0,0,0,.87);
        font-size: 1.25rem;
        line-height: 2rem;
        font-weight: 500;
        letter-spacing: .0125em;
        text-decoration: inherit;
        text-transform: inherit;
        display: block;
        position: relative;
        flex-shrink: 0;
        box-sizing: border-box;
        margin: 0;
        padding: 0 24px 9px;
        border-bottom: 1px solid transparent;
        &::before {
          display: inline-block;
          width: 0;
          height: 40px;
          content: "";
          vertical-align: 0;
        }
        + .dialog-content {
          padding-top: 0;
        }
      }
      .dialog-content {
        font-family: Roboto, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
        letter-spacing: .03125em;
        text-decoration: inherit;
        text-transform: inherit;
        flex-grow: 1;
        box-sizing: border-box;
        margin: 0;
        padding: 20px 24px;
        overflow: auto;
        color: rgba(0,0,0,.6);
      }
      .dialog-actions {
        display: flex;
        position: relative;
        flex-shrink: 0;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-end;
        box-sizing: border-box;
        min-height: 52px;
        margin: 0;
        padding: 8px;
        border-top: 1px solid transparent;
      }
    }
  }
  .dialog-scrim {
    opacity: 0;
    z-index: -1;
    background-color: rgba(0,0,0,.32);
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: absolute;
  }
}
</style>
