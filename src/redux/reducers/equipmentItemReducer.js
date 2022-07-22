import {
  SET_IS_CHECKED,
  SET_IS_CHECKED_ARR,
  SET_IS_LOADING
} from '../actionTypes'

const initialState = {
  isChecked: [],
  isLoading: false
}

export default equipmentItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_CHECKED_ARR:
      if (action.data === 'empty') return { ...state, isChecked: [] }
      else {
        let arr = state.isChecked
        arr.push(false)
        return { ...state, isChecked: arr }
      }
    case SET_IS_CHECKED:
      let copyIsChecked = Object.assign([], state.isChecked)
      copyIsChecked[action.index] = !state.isChecked[action.index]
      return { ...state, isChecked: copyIsChecked }
    case SET_IS_LOADING:
      return { ...state, isLoading: action.data }
    default:
      return state
  }
}
