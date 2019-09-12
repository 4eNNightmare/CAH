import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  install (vue, opts) {
    const app = firebase.initializeApp(JSON.parse(process.env.VUE_APP_FIREBASE_CONFIG))
    vue.prototype.$firebase = {
      app: app,
      db: firebase.firestore(),
      auth: firebase.auth()
    }
  }
}
