import React, { useReducer, useContext, createContext } from 'react'
import reducer, {initialState} from './reducer'

export const AppContext = createContext()

export const AppLayer = ({ children }) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppContext.Provider>
)

export const useAppContext = () => useContext(AppContext)
