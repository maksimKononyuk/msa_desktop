import {
  SET_ACTIVE_BARCODE,
  SET_ACTIVE_INDEX,
  SET_ACTIVE_ORDER,
  SET_CONFIRMATION,
  SET_EQUIPMENT_ARR,
  SET_EQUIPMENT_VISIBLE,
  SET_FINISH_ORDER_PARAMS,
  SET_IS_EQUIPMENT_LOADING,
  SET_MATERIALS_ARR,
  SET_MATERIALS_CONDITION,
  SET_MATERIALS_VALUE,
  SET_MODAL_VISIBLE,
  SET_ORDERS,
  SET_ORDER_CANCEL_MODAL_VISIBLE,
  SET_ORDER_STARTED,
  SET_PLAY_SOUND,
  SET_PRIVIOUS_OPERATION,
  SET_SELECTED_ITEMS_CHECKED,
  SET_SELECTED_ITEMS_UNCHECKED,
  SET_SHOW_MATERIALS_COMPONENT,
  SET_USER
} from '../actionTypes'

const initialState = {
  user: null,
  orders: [],
  isPlaySound: false,
  activeOrder: null,
  activeIndex: 1,
  activeBarCode: false,
  orderStarted: false,
  modalVisible: false,
  orderCancelModalVisible: false,
  previousOperation: [],
  isConfirmation: false,
  materialsArr: [],
  showMaterialsComponent: false,
  equipmentArr: [],
  isEquipmentLoading: true,
  isEquipmentVisible: true,
  selectedItems: [],
  finishOrderParams: null
}

export default mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.data }
    case SET_ORDERS:
      return { ...state, orders: action.data }
    case SET_PLAY_SOUND:
      return { ...state, isPlaySound: action.data }
    case SET_ACTIVE_ORDER:
      return { ...state, activeOrder: action.data }
    case SET_ACTIVE_INDEX:
      return { ...state, activeIndex: action.data }
    case SET_ACTIVE_BARCODE:
      return { ...state, activeBarCode: action.data }
    case SET_ORDER_STARTED:
      return { ...state, orderStarted: action.data }
    case SET_MODAL_VISIBLE:
      return { ...state, modalVisible: action.data }
    case SET_ORDER_CANCEL_MODAL_VISIBLE:
      return { ...state, orderCancelModalVisible: action.data }
    case SET_PRIVIOUS_OPERATION:
      return { ...state, previousOperation: action.data }
    case SET_CONFIRMATION:
      return { ...state, isConfirmation: action.data }
    case SET_MATERIALS_ARR:
      return { ...state, materialsArr: action.data }
    case SET_MATERIALS_CONDITION:
      let copyWithCondition = Object.assign([], state.materialsArr)
      copyWithCondition[action.index] = {
        ...action.materials,
        condition: action.materials.condition == 'minus' ? 'plus' : 'minus'
      }
      return { ...state, materialsArr: copyWithCondition }
    case SET_MATERIALS_VALUE:
      let copyWithValue = Object.assign([], state.materialsArr)
      copyWithValue[action.index] = {
        ...action.materials,
        value: action.data
      }
      return { ...state, materialsArr: copyWithValue }
    case SET_SHOW_MATERIALS_COMPONENT:
      return { ...state, showMaterialsComponent: action.data }
    case SET_EQUIPMENT_ARR:
      return { ...state, equipmentArr: action.data }
    case SET_IS_EQUIPMENT_LOADING:
      return { ...state, isEquipmentLoading: action.data }
    case SET_EQUIPMENT_VISIBLE:
      return { ...state, isEquipmentVisible: action.data }
    case SET_SELECTED_ITEMS_CHECKED:
      let copyChecked = Object.assign([], state.selectedItems)
      copyChecked.push(action.id)
      return { ...state, selectedItems: copyChecked }
    case SET_SELECTED_ITEMS_UNCHECKED:
      if (action.id === 'all') return { ...state, selectedItems: [] }
      else
        return {
          ...state,
          selectedItems: state.selectedItems.filter(
            (value) => value !== action.id
          )
        }
    case SET_FINISH_ORDER_PARAMS:
      return { ...state, finishOrderParams: action.data }
    default:
      return state
  }
}
