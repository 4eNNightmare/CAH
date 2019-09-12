import Vue from 'vue'
import Dialog from './dialog'

const defaultProps = {}

const eventsHandler = dialog => {
  return {
    onOk (callback) {
      dialog.$once('ok', callback)
      return eventsHandler(dialog)
    },
    onCancel (callback) {
      dialog.$once('cancel', callback)
      return eventsHandler(dialog)
    }
  }
}

export default {
  install (vue, opts) {
    vue.prototype.$dialog = props => {
      const dialog = new (Vue.extend(Dialog))({ propsData: Object.assign(defaultProps, props) })
      dialog.$mount()
      document.documentElement.appendChild(dialog.$el)
      setTimeout(() => {
        dialog.open()
      }, 1)
      return eventsHandler(dialog)
    }
  }
}
