import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'connected-react-router'
import configureStore, { history } from './store'
import Routes from './routes'

const store = configureStore()

it('APP: renders without crashing', () => {
  // eslint-disable-next-line no-undef
  const div = document.createElement('root')
})
