import * as firebase from 'firebase'

function signup (email, password) {
  return firebase.auth().createUserWithEmailAndPassword(
    email,
    password
  )
}

export default signup
