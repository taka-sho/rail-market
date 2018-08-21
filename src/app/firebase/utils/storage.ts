import * as firebase from 'firebase'

const storage = {
  put: (path: string, file: any) => {
    return firebase.storage().ref(path).put(file)
  },
  download: (path: string) => {
    return firebase.storage().ref(path).getDownloadURL()
  }
}

export default storage
