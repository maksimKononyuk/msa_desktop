import { SET_SOUND } from '../actionTypes'

const initialState = {
  sound: null
}

export default activeOrderReducer = (state = initialState, action) => {
  switch (action.tipe) {
    case SET_SOUND:
      return { ...state, sound: action.data }
    default:
      return state
  }
}
