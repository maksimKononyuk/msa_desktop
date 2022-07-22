import {
  SET_CREATED_ORDER_ID,
  SET_IS_COMPLETE_WORK_SHIFT_VISIBLE,
  SET_IS_MODAL_GET_DETAILS,
  SET_IS_MODAL_NEW_ORDER,
  SET_TEMP_DETAIL,
  SET_USER_MENU_ORDERS
} from '../actionTypes'

const initialState = {
  isCompleteWorkShiftVisible: false,
  orders: [],
  tempDetail: [],
  createdOrderId: null
}

export default usersMenuModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_COMPLETE_WORK_SHIFT_VISIBLE:
      return { ...state, isCompleteWorkShiftVisible: action.data }
    case SET_USER_MENU_ORDERS:
      return { ...state, orders: action.data }
    case SET_TEMP_DETAIL:
      if (!action.key) {
        return { ...state, tempDetail: action.data }
      } else {
        const tempObj = {
          ...state.tempDetail,
          order: {
            ...state.tempDetail.order,
            composition: {
              ...state.tempDetail.order.composition,
              [action.key]: action.data
            }
          }
        }
        return { ...state, tempDetail: tempObj }
      }
    case SET_CREATED_ORDER_ID:
      return { ...state, createdOrderId: action.data }
    default:
      return state
  }
}
