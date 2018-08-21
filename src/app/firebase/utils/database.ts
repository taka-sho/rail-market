import * as firebase from 'firebase'

const database = {
  set: (path: string, data: object) => {
    return firebase.database().ref(path).set(data)
  },
  read: (path: string) => {
    return firebase.database().ref(path).once('value')
  },
  uid: () => {
    return firebase.auth().currentUser.uid
  }
}

export default database
