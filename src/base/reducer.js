export const initialState = {
  user: {
    userName: "hello",
    available: true
  },
  searchQuery: "",
  senderUser: {
    userName: "vipin",
    available: true
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER": 
    return {
      ...state,
      user: action.payload
    }
    case "SET_USER_AVAILABLE":
      return {
        ...state,
        user: {
          ...state.user, available: action.payload
        }
      }
      case "SET_SEARCH":
        return {
          ...state,
          searchQuery: action.payload
        }
      case "SET_SENDER":
        return {
          ...state,
          senderUser: action.payload
        }
      default:
        return state
  }
}

export default reducer;