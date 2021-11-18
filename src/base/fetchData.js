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

export const fetchUser = (uid, dispatch) => {
  db.collection('users')
    .doc(uid)
    .onSnapshot((snap) =>
      dispatch({
        type: 'SET_USER',
        payload: snap.data(),
      })
    )
}

/*
const [{ messages, user, senderUser }, dispatch] = useAppContext()
  useEffect(() => {
    const userId = user?.uid.toString()
    const senderId = senderUser?.uid.toString()
    // console.log(typeof userId)
    fetchMessages(userId, senderId, dispatch)
  }, [])

  console.log(messages)
*/

export const fetchMessages = (user, sender, setMessages) => {
  db.collection('chats')
    .doc(sender)
    .collection(user)
    .onSnapshot((r) =>
      r.docs.map((t) => {
        console.log(t.data())
        setMessages({
          type: 'SET_MESSAGES',
          payload: { id: user, data: t.data() },
        })
      })
    )
}
