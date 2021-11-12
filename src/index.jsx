import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Root from './Root'
import { AppLayer } from './base/context'

ReactDOM.render(
  <AppLayer>
    <Root />
  </AppLayer>,
  document.getElementById('root')
)
