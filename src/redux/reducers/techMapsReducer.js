import {
  SET_ITEM,
  SET_MAPS_ARR,
  SET_MODAL_VISIBLE_TECH_MAPS
} from '../actionTypes'

const initialState = {
  mapsArr: null,
  modalVisible: false,
  item: null
}

export default techMapsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAPS_ARR:
      return { ...state, mapsArr: action.data }
    case SET_MODAL_VISIBLE_TECH_MAPS:
      return { ...state, modalVisible: action.data }
    case SET_ITEM:
      return { ...state, item: action.data }
    default:
      return state
  }
}
