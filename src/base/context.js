import React, { useReducer, useContext, createContext } from 'react'

export const AppContext = createContext()

export const AppLayer = ({ initialState, reducer, children }) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppContext.Provider>
)

export const useAppContext = () => useContext(AppContext)
