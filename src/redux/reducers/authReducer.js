import {
  SET_APP_IS_READY,
  SET_LOGIN,
  SET_PASSWORD,
  SET_SHOW_ERROR
} from '../actionTypes'

const initialState = {
  login: '',
  password: '',
  appIsReady: false,
  showError: false
}

export default authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, login: action.data }
    case SET_PASSWORD:
      return { ...state, password: action.data }
    case SET_APP_IS_READY:
      return { ...state, appIsReady: action.data }
    case SET_SHOW_ERROR:
      return { ...state, showError: action.data }
    default:
      return state
  }
}
