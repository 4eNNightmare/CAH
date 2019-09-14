import Vue from 'vue'
import Dialog from './dialog'

const eventsHandler = dialog => {
  return {
    onOk (callback) {
      dialog.$on('ok', callback)
      return eventsHandler(dialog)
    },
    onCancel (callback) {
      dialog.$on('cancel', callback)
      return eventsHandler(dialog)
    },
    onError (callback) {
      dialog.$on('error', callback)
      return eventsHandler(dialog)
    },
    onDismiss (callback) {
      dialog.$on('dismiss', callback)
      return eventsHandler(dialog)
    }
  }
}

export default {
  install (vue, opts) {
    vue.prototype.$dialog = props => {
      const dialog = new (Vue.extend(Dialog))({ propsData: props })
      dialog.$mount()
      document.documentElement.appendChild(dialog.$el)
      setTimeout(() => {
        dialog._open()
      }, 1)
      return eventsHandler(dialog)
    }
  }
}
