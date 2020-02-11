import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import history from 'shared/lib/history'
import shared from 'shared/state/sharedReducer'

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    shared,
    router: connectRouter(history),
    ...injectedReducers
  })

  return rootReducer
}
