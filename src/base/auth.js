import { auth, googleAuth } from './firebase'

export const signupWithEmail = (dispatch, email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      var result = user.user
      // // window.location = '/verifyemail'
      // // auth.sendEmailVerification()
      // auth.signOut()
      localStorage.setItem('user', JSON.stringify(result))
      dispatch({
        type: 'SET_USER',
        payload: result,
      })
    })
    .catch((error) => {
      console.log(error)
    })
}

export const loginWithEmail = (dispatch, email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      var result = user.user
      // if (user.emailVerified) {
      //   auth.signOut()
      //   window.location = '/verifyemail'
      // } else {
      localStorage.setItem('user', JSON.stringify(result))
      dispatch({
        type: 'SET_USER',
        payload: result,
      })
      // }
    })
    .catch((error) => {
      console.log(error)
    })
}

export const loginWithGoogle = (setUser) => {
  auth
    .signInWithPopup(googleAuth)
    .then((result) => {
      var user = result.user
      localStorage.setItem('user', JSON.stringify(user))
      setUser({
        type: 'SET_USER',
        payload: user,
      })
    })
    .catch((error) => {
      console.log(error)
    })
}
