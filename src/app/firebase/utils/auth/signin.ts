import * as firebase from 'firebase'

function signin (email, password) {
  return firebase.auth().signInWithEmailAndPassword(
    email,
    password
  )
}

export default signin
