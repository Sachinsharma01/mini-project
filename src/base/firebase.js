import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBAMh4MxYIN-1owFbxZyU_WWzwT2mUGgaI',
  authDomain: 'chatverse-d2623.firebaseapp.com',
  projectId: 'chatverse-d2623',
  storageBucket: 'chatverse-d2623.appspot.com',
  messagingSenderId: '562133755567',
  appId: '1:562133755567:web:b91ac8002d81a66726565a',
  measurementId: 'G-Q122X7V2NQ',
}

const app = firebase.initializeApp(firebaseConfig)

export const db = app.firestore()
export const auth = app.auth()
export const googleAuth = new firebase.auth.GoogleAuthProvider()
