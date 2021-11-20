import { db } from './firebase'

export const fetchRelations = (user, setRelations) => {
  db.collection('users')
    .doc(user.uid)
    .onSnapshot((snapshot) => {
      snapshot.data().relations.forEach((rel) => {
        db.collection('users')
          .doc(rel)
          .onSnapshot((snap) => {
            setRelations({
              type: 'SET_RELATION',
              payload: snap.data(),
            })
          })
      })
    })
}

export const fetchMessages = (user, sender, setMessages, setNewMsg) => {
  db.collection('chats')
    .doc(sender)
    .collection(user)
    .orderBy('time', 'asc')
    .onSnapshot((r) => {
      setNewMsg([])
      r.docs.map((t) => {
        setNewMsg((prev) => [...prev, t.data()])
        setMessages({
          type: 'SET_MESSAGES',
          payload: t.data(),
        })
      })
    })
}
