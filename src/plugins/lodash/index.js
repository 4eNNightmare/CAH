import {
  flattenDeep,
  uniq
} from 'lodash'

export default {
  install (vue, opts) {
    vue.prototype.$_ = {
      uniq,
      flattenDeep
    }
  }
}
