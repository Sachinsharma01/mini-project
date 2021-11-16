export const initialState = {
  user: null,
  searchQuery: '',
  senderUser: null,
  messages: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      }
    case 'SET_USER_AVAILABLE':
      return {
        ...state,
        user: {
          ...state.user,
          available: action.payload,
        },
      }
    case 'SET_SEARCH':
      return {
        ...state,
        searchQuery: action.payload,
      }
    case 'SET_SENDER':
      return {
        ...state,
        senderUser: action.payload,
      }
    case 'SET_MESSAGES':
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: action.payload.id,
            msg: action.payload.data,
          },
        ],
      }
    default:
      return state
  }
}

export default reducer
