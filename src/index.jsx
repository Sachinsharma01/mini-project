import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Root from './Root'
import { AppLayer } from './base/context'
import { reducer, initialState } from './base/reducer'

ReactDOM.render(
  <AppLayer initialValues={initialState} reducer={reducer}>
    <Root />
  </AppLayer>,
  document.getElementById('root')
)
