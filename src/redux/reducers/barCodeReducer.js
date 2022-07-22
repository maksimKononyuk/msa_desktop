import {
  SET_BARCODE,
  SET_BOUNDS,
  SET_HAS_PERMISSION,
  SET_SCANNED
} from '../actionTypes'

const initialState = {
  hasPermission: null,
  scanned: false,
  barcode: null,
  bounds: null
}

export default barCodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HAS_PERMISSION:
      return { ...state, hasPermission: action.data }
    case SET_SCANNED:
      return { ...state, scanned: action.data }
    case SET_BARCODE:
      return { ...state, barcode: action.data }
    case SET_BOUNDS:
      return { ...state, bounds: action.data }
    default:
      return state
  }
}
