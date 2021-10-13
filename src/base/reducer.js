export const initialState = {
  user: {},
  showContactCard: false,
  searchQuery: ""
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER": 
    return {
      ...state,
      user: action.payload
    }
    case "SET_SHOW_CONTACT_CARD":
      return {
        ...state,
        showContactCard: action.payload
      }
      case "SET_SEARCH":
        return {
          ...state,
          searchQuery: action.payload
        }
      default:
        return state
  }
}
