import { db } from './firebase'

export const fetchRelations = (user, setRelations) => {
  db.collection('users')
    .doc(user.uid)
    .onSnapshot((snapshot) => {
      if (!snapshot.data()) {
        localStorage.clear()
        window.location.reload()
        setTimeout(() =>
          alert(
            'You have been logged out.\nRetry logging in again or contact the admin at: admin@chatverse.com'
          )
        )
      }
      snapshot.data().relations.forEach((rel, index) => {
        if (index === 0) {
          setRelations({
            type: 'SET_RELATION_ARRAY',
            payload: [],
          })
        }
        db.collection('users')
          .doc(rel)
          .onSnapshot((snap) => {
            if (snap.data().user_name !== 'admin@chatverse.com') {
              setRelations({
                type: 'SET_RELATION',
                payload: snap.data(),
              })
            }
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
      r.docs.forEach((t) => {
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
    r.docs.forEach((t) => {
      if (t.data().user_name.includes(searchQuery)) {
        if (t.data().user_name !== 'admin@chatverse.com')
          setQueryResults((prev) => [...prev, t.data()])
      }
    })
  })
}
