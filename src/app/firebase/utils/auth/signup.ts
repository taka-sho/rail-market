import * as firebase from 'firebase'

function signUp (email: string, password: string) {
  return firebase.auth().createUserWithEmailAndPassword(
    email,
    password
  )
}

export default signUp
