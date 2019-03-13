import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import { HivemindStore } from 'react-hivemind'

const Root = () => {
  return (
    <HivemindStore
      isMobile={() => {
        console.log('yes it is mobile')
        console.log('scroll-polyfill applied')
      }}
      isNotMobile={() => {
        console.log('nop, this is not mobile')
      }}
      onAppStart={() => {
        console.log('App started')
      }}
    >
      <App />
    </HivemindStore>
  )
}
ReactDOM.render(<Root />, document.getElementById('root'))
