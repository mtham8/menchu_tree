import { combineReducers } from 'redux'

import auth from '../authentication/reducers/auth'

const appReducer = combineReducers({
  auth
})

export const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    state = undefined
  }
  return appReducer(state, action)
}
