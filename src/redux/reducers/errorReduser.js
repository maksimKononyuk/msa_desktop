import {
  SET_IS_ERROR_COMPONENT_VISIBLE,
  SET_ERROR_MESSAGE
} from '../actionTypes'

const initialState = {
  isErrorComponentVisible: false,
  errorMessage: ''
}

export default errorReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_ERROR_COMPONENT_VISIBLE:
      return { ...state, isErrorComponentVisible: action.data }
    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.data }
    default:
      return state
  }
}
