/* eslint-disable no-undef */
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'
import createReducer from './reducers'

export default function configureStore(preloadedState = {}, history) {
  let composeEnhancers = compose

  // If Redux Dev Tools Extensions are installed, enable them
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  }

  const middlwares = [thunkMiddleware, routerMiddleware(history)]
  const enhancers = [applyMiddleware(...middlwares)]

  const store = createStore(createReducer(), preloadedState, composeEnhancers(...enhancers))

  // Extensions
  store.injectedReducers = {}

  // Make reducers hot reloadable, see http://mxs.is/googmo
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers))
    })
  }

  return store
}
