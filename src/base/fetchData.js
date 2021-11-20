import { db } from './firebase'

export const fetchRelations = (user, setRelations) => {
  db.collection('users')
    .doc(user.uid)
    .onSnapshot((snapshot) => {
      snapshot.data().relations.forEach((rel) => {
        setRelations({
          type: 'SET_RELATION',
          payload: [],
        })
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

export const fetchSearchResults = (searchQuery, setQueryResults) => {
  db.collection('users').onSnapshot((r) => {
    setQueryResults([])
    r.docs.map((t) => {
      if (t.data().user_name.includes(searchQuery)) {
        setQueryResults((prev) => [...prev, t.data()])
      }
    })
  })
}
