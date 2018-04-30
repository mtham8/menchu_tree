import createDefaultReducer from '../../redux/helpers/createDefaultReducer'

import * as ActionTypes from '../actions/actionTypes'

/**
 * initial state of reducer
 */
const initialAuthentication = {
  isAuthenticated: false,
  isAuthenticating: false,
  username: null,
  loginError: false
}

/**
 * handlers for actionMap
 * @param {*} state
 * @param {*} payload
 */
const loginUserHandler = (state, payload) => ({
  ...state,
  isAuthenticating: true
})

const loginUserSuccessHandler = (state, payload) => {
  const { username } = payload
  return {
    ...state,
    isAuthenticating: false,
    loginError: false,
    isAuthenticated: true,
    username
  }
}

const returnInitialStateHandler = (state, payload) => ({
  ...initialAuthentication
})

const loginErrorHandler = (state, payload) => ({
  ...initialAuthentication,
  loginError: true
})

/**
 * actionMap
 */
const actionMap = {
  [ActionTypes.LOGIN_USER_REQUEST]: loginUserHandler,
  [ActionTypes.LOGIN_USER_SUCCESS]: loginUserSuccessHandler,
  [ActionTypes.LOGOUT_USER]: returnInitialStateHandler,
  [ActionTypes.LOGIN_ERROR]: loginErrorHandler
}

/**
 *
 * reducer
 * @export
 * @param {any} [actionMap=actionMap]
 * @param {any} [initialState=initialAuthentication]
 * @returns
 */
const auth = createDefaultReducer(actionMap, initialAuthentication)
export default auth
