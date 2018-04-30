import * as ActionTypes from './actionTypes'

export function loginUserSuccess (username) {
  return {
    type: ActionTypes.LOGIN_USER_SUCCESS,
    payload: { username }
  }
}

export function loginUser ({ username, password }) {
  return async (dispatch, getState) => {
    dispatch({ type: ActionTypes.LOGIN_USER_REQUEST })

    const signin = await firebase_auth
      .signInWithEmailAndPassword(username, password)
      .catch(({ code, message }) => {
        console.log(`AUTH ERROR: ${code} ${message}`)
      })

    const user = await firebase_auth.currentUser

    if (user) {
      dispatch(loginUserSuccess(username))
    } else {
      dispatch({ type: ActionTypes.LOGIN_ERROR })
    }
  }
}

export function logout () {
  firebase_auth
    .signOut()
    .then(() => {
      console.log('AUTH ACTION: sign out successful')
    })
    .catch(error => {
      console.log('AUTH ACTION: sign out unsuccessful')
    })

  return {
    type: ActionTypes.LOGOUT_USER
  }
}
