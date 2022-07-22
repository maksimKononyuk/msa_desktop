import { SET_MESSAGES } from '../actionTypes'

const initialState = {
  messages: []
}

export default messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return { ...state, messages: action.data }
    default:
      return state
  }
}
