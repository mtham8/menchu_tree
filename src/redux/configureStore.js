import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { rootReducer } from './root'
import { loadLocal, setLocal } from './helpers'

const middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const persistedState = loadLocal('menchu_tree')
const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(...middleware)
)

store.subscribe(() =>
  setLocal(
    {
      auth: store.getState().auth
    },
    'menchu_tree'
  )
)

export { store }
