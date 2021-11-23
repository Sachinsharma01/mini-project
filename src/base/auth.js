import { auth, db, googleAuth } from './firebase'
import { pushNewUser, pushGoogleUser } from './pushData'

export const signupWithEmail = (
  dispatch,
  firstname,
  lastname,
  email,
  password
) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      var result = user.user
      // // window.location = '/verifyemail'
      // // auth.sendEmailVerification()
      // auth.signOut()
      pushNewUser(result.uid, firstname, lastname, email, dispatch)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const loginWithEmail = (dispatch, email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      var user = result.user
      db.collection('users')
        .doc(user.uid)
        .onSnapshot((snapshot) => {
          localStorage.setItem('user', JSON.stringify(snapshot.data()))
          dispatch({
            type: 'SET_USER',
            payload: snapshot.data(),
          })
          localStorage.removeItem('authUser')
        })
    })
    .catch((error) => {
      console.log(error)
    })
}

export const loginWithGoogle = (dispatch) => {
  auth
    .signInWithPopup(googleAuth)
    .then((result) => {
      var user = result.user
      localStorage.setItem('authUser', JSON.stringify(user))
      pushGoogleUser(dispatch)
    })
    .catch((error) => {
      console.log(error)
    })
}
