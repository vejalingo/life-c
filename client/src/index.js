/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import history from 'shared/lib/history'
import configureStore from './store'
import { unregister } from './serviceWorker'
import Routes from './routes'
import './index.less'

const initialState = {}
const store = configureStore(initialState, history)
const MOUNT_NODE = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE
)

unregister()
