import { SET_IMG_TAG } from '../actionTypes'

const initialState = {
  ImgTag: ''
}

export default orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMG_TAG:
      return { ...state, ImgTag: action.data }
    default:
      return state
  }
}
