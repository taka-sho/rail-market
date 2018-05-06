import * as firebase from 'firebase'
import {
  NODE_API_KEY,
  NODE_AUTH_DOMAIN,
  NODE_DATABASE_URL,
  NODE_PROJECT_ID,
  NODE_STORAGE_BUCKET,
  NODE_MESSAGING_SENDER_ID
} from '../const'

// const configs = {
//   apiKey: NODE_API_KEY,
//   authDmain: NODE_AUTH_DOMAIN,
//   databaseURL: NODE_DATABASE_URL,
//   projectId: NODE_PROJECT_ID,
//   strageBucket: NODE_STORAGE_BUCKET,
//   messagingSenderId: NODE_MESSAGING_SENDER_ID
// }
const configs = {
  apiKey: "AIzaSyD74JaROwVcioWXmgVmH8KUoPPLKOE_65E",
  authDomain: "rail-market.firebaseapp.com",
  databaseURL: "https://rail-market.firebaseio.com",
  projectId: "rail-market",
  storageBucket: "rail-market.appspot.com",
  messagingSenderId: "648783745547"
}

const Firebase = firebase.initializeApp(configs)

export default Firebase
