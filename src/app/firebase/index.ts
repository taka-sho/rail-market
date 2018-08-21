import * as firebase from 'firebase'

const configs = {
  apiKey: "AIzaSyD74JaROwVcioWXmgVmH8KUoPPLKOE_65E",
  authDomain: "rail-market.firebaseapp.com",
  databaseURL: "https://rail-market.firebaseio.com",
  projectId: "rail-market",
  storageBucket: "rail-market.appspot.com",
  messagingSenderId: "648783745547"
}

function initFirebase () {
  firebase.initializeApp(configs)
}

export default initFirebase
