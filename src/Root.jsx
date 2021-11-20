import App from './components/App'
import { useEffect } from 'react'
import { fetchMessages } from './base/fetchData'
import { useAppContext } from './base/context'

function Root() {
  return (
    <>
      <App />
    </>
  )
}

export default Root
