import { db } from './firebase'

export const fetchRelations = (user, setRelations) => {
  db.collection('users')
    .doc(user.uid)
    .onSnapshot((snapshot) => {
      snapshot.data().relations.forEach((rel) => {
        db.collection('users')
          .doc(rel)
          .onSnapshot((snap) => {
            setRelations((data) => [...data, snap.data()])
          })
      })
    })
}

export const fetchMessages = (user, sender, setMessages) => {
  db.collection('chats')
    .doc(user.localeCompare(sender) === -1 ? user : sender)
    .collection(user.localeCompare(sender) === 1 ? user : sender)
    .onSnapshot((data) => {
      data.docs.map((doc) => {
        setMessages({
          type: 'SET_MESSAGES',
          payload: { id: user, data: doc.data() },
        })
      })
    })
}
