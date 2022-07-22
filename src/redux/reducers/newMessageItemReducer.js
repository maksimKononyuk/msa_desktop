import { SET_NEW_MESSAGE } from '../actionTypes'

const initialState = {
  newMessage: ''
}

export default newMessageItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_MESSAGE:
      return { ...state, newMessage: action.data }
    default:
      return state
  }
}
