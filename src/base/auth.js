import { auth, provider } from './firebase'
import { useHistory } from 'react-router-dom'

const history = useHistory()
const auth = getAuth()
const [{}, dispatch] = useAppContext()

export const signupWithEmail = () => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      sendEmailVerification()
      signOut()
      history.push('/verifyemail')
    })
    .catch((error) => {
      console.log(error)
    })
}

export const loginWithEmail = (dispatch) => {
  auth
    .signInWithEmailAndPassword(email, password)
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

export const loginWithGoogle = (setUser) => {
  auth
    .signInWithRedirect(provider)
    .then((result) => {
      var user = result.user
      setUser({
        type: 'SET_USER',
        action: user,
      })
    })
    .catch((error) => {
      console.log(error)
    })
}
