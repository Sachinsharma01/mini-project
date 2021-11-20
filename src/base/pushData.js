import { db } from './firebase'
import firebase from 'firebase'

export const pushMessage = (msg, time, id1, id2, sender) => {
  db.collection('chats').doc(id1).collection(id2).add({
    msg: msg,
    time: firebase.firestore.Timestamp.now(),
    sender: sender?.uid,
  })
}

export const pushNewUser = (id, firstname, lastname, email, dispatch) => {
  const docData = {
    uid: id,
    first_name: firstname,
    last_name: lastname,
    relations: [],
    status: true,
    user_name: email,
  }

  db.collection('users')
    .doc(id)
    .set(docData)
    .then(() => console.log('done creating new user'))
  localStorage.setItem('user', JSON.stringify(docData))
  dispatch({
    type: 'SET_USER',
    payload: docData,
  })
}

export const pushGoogleUser = (dispatch) => {
  const user = JSON.parse(localStorage.getItem('authUser'))
  db.collection('users')
    .doc(user.uid)
    .onSnapshot((snapshot) => {
      if (snapshot.data()) {
        localStorage.setItem('user', JSON.stringify(snapshot.data()))
        dispatch({
          type: 'SET_USER',
          payload: snapshot.data(),
        })
        localStorage.removeItem('authUser')
      } else {
        const docData = {
          uid: user.uid,
          signup: true,
          first_name: user.displayName.split()[0],
          last_name: user.displayName.split()[1]
            ? user.displayName.split()[0]
            : '',
          relations: [],
          status: true,
          user_name: user.email,
        }
        db.collection('users')
          .doc(user.uid)
          .set(docData)
          .then(() => console.log('done creating new user'))

        localStorage.setItem('user', JSON.stringify(user))
        dispatch({
          type: 'SET_USER',
          payload: docData,
        })
        localStorage.removeItem('authUser')
      }
    })

  // console.log('indside else')
}

export const pushBlockRequest = () => {}

export const pushUnblockRequest = () => {}

export const pushDeleteRequest = () => {}

export const pushAvailableRequest = () => {}
