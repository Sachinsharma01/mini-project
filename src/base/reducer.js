export const initialState = {
  user:{}
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER": 
    return {
      ...state,
      user: action.payload
    }
  }
}
