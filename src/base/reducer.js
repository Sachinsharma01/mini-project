export const initialState = {
  user: {
    uid: "tsb2OW34L8hiGRP2I56HcKSpQP92",
  },
  searchQuery: "",
  senderUser: null,
  messages: [],
  relations: [],
};

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
    case "SET_RELATION": 
      return {
        ...state,
        relations: [...state.relations, action.payload]
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
