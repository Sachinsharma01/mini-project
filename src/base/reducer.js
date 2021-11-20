export const initialState = {
  user: null,
  senderUser: null,
  messages: [],
  relations: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      }
    case 'SET_RELATION':
      return {
        ...state,
        relations: [...state.relations, action.payload],
      }
    case 'SET_USER_AVAILABLE':
      return {
        ...state,
        user: {
          ...state.user,
          available: action.payload,
        },
      }
    // case 'SET_RELATION':
    //   return {
    //     ...state,
    //     relations: [...state.relations, action.payload],
    //   }
    case 'SET_SENDER':
      return {
        ...state,
        senderUser: action.payload,
      }
    case 'SET_MESSAGES':
      return {
        ...state,
        messages: [action.payload],
      }
    default:
      return state
  }
}

export default reducer
