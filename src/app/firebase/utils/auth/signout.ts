import * as firebase from 'firebase'

function signout () {
  return firebase.auth().signOut()
}

export default signout
