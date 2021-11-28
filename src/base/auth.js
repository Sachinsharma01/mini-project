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
      pushNewUser(
        result.uid,
        firstname,
        lastname,
        email,
        result.metadata.creationTime,
        result.metadata.lastSignInTime,
        dispatch
      )
    })
    .catch((error) => {
      alert(error?.message)
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
          if (!snapshot.data()) {
            alert(
              'You are banned from the application.\nFor further Queries Contact at: admin@chatverse.com'
            )
            localStorage.clear()
          } else {
            localStorage.setItem('user', JSON.stringify(snapshot.data()))
            dispatch({
              type: 'SET_USER',
              payload: snapshot.data(),
            })
            localStorage.removeItem('authUser')
          }
        })
      db.collection('users').doc(user.uid).update({
        status: true,
      })
    })
    .catch((error) => {
      error.code === 'auth/wrong-password' && alert('Wrong Password')
      console.log(error)
    })
}

export const loginWithGoogle = (dispatch) => {
  auth
    .signInWithPopup(googleAuth)
    .then((result) => {
      console.log(result)
      var user = result.user
      localStorage.setItem('isNewUser', result.additionalUserInfo.isNewUser)
      localStorage.setItem('authUser', JSON.stringify(user))
      pushGoogleUser(dispatch)
      db.collection('users').doc(user.uid).update({
        status: true,
      })
    })
    .catch((error) => {
      console.log(error)
    })
}

export const logout = (user) => {
  db.collection('users').doc(user.uid).update({
    status: false,
  })
  auth.signOut()
  localStorage.clear()
  setTimeout(() => window.location.reload())
}
