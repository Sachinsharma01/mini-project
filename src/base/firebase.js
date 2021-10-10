// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBAMh4MxYIN-1owFbxZyU_WWzwT2mUGgaI',
  authDomain: 'chatverse-d2623.firebaseapp.com',
  projectId: 'chatverse-d2623',
  storageBucket: 'chatverse-d2623.appspot.com',
  messagingSenderId: '562133755567',
  appId: '1:562133755567:web:b91ac8002d81a66726565a',
  measurementId: 'G-Q122X7V2NQ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
