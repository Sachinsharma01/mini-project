import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AppLayer } from './base/context'
import { reducer, initialState } from './base/reducer'

ReactDOM.render(
  <AppLayer initialValues={initialState} reducer={reducer}>
    <App />
  </AppLayer>,
  document.getElementById('root')
)
