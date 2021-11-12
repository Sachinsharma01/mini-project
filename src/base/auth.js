import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth'
import { useHistory } from 'react-router-dom'
import { useAppContext } from './context'

const history = useHistory()
const auth = getAuth()
const [{}, dispatch] = useAppContext()

export const signupWithEmail = () => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      sendEmailVerification()
      signOut()
      history.push('/verifyemail')
    })
    .catch((error) => {
      console.log(error)
    })
}

export const loginWithEmail = () => {
  signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      if (!user.emailVerified) {
        signOut()
        history.push('/verifyemail')
      } else {
        dispatch({
          type: 'SET_USER',
          payload: user,
        })
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

export const loginWithGoogle = () => {
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken

      // The signed-in user info.
      const user = result.user
      dispatch({
        type: 'SET_USER',
        payload: user,
      })
    })
    .catch((error) => {
      console.log(error)
    })
}
