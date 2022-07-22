import {
  SET_ACTIVE_BARCODE,
  SET_ACTIVE_INDEX,
  SET_ACTIVE_ORDER,
  SET_APP_IS_READY,
  SET_BARCODE,
  SET_BOUNDS,
  SET_CONFIRMATION,
  SET_CREATED_ORDER_ID,
  SET_EQUIPMENT_ARR,
  SET_EQUIPMENT_VISIBLE,
  SET_ERROR_MESSAGE,
  SET_FINISH_ORDER_PARAMS,
  SET_HAS_PERMISSION,
  SET_IMG_TAG,
  SET_IS_CHECKED,
  SET_IS_CHECKED_ARR,
  SET_IS_COMPLETE_WORK_SHIFT_VISIBLE,
  SET_IS_ERROR_COMPONENT_VISIBLE,
  SET_IS_EQUIPMENT_EMPTY,
  SET_IS_LOADING,
  SET_IS_USER_MENU_MODAL,
  SET_ITEM,
  SET_LOGIN,
  SET_MAPS_ARR,
  SET_MATERIALS_ARR,
  SET_MATERIALS_CONDITION,
  SET_MATERIALS_VALUE,
  SET_MESSAGES,
  SET_MODAL_VISIBLE,
  SET_MODAL_VISIBLE_TECH_MAPS,
  SET_NEW_MESSAGE,
  SET_ORDERS,
  SET_ORDER_CANCEL_MODAL_VISIBLE,
  SET_ORDER_STARTED,
  SET_PASSWORD,
  SET_PLAY_SOUND,
  SET_PRIVIOUS_OPERATION,
  SET_SCANNED,
  SET_SELECTED_ITEMS_CHECKED,
  SET_SELECTED_ITEMS_UNCHECKED,
  SET_SHOW_ERROR,
  SET_SHOW_MATERIALS_COMPONENT,
  SET_SOUND,
  SET_TEMP_DETAIL,
  SET_USER,
  SET_USER_MENU_ORDERS,
  SET_IS_EQUIPMENT_LOADING
} from './actionTypes'

// For mainReducer

export const setUser = (tempUser) => {
  return {
    type: SET_USER,
    data: tempUser
  }
}

export const setOrders = (orders) => {
  return {
    type: SET_ORDERS,
    data: orders
  }
}

export const setIsPlaySound = (isPlaySound) => {
  return {
    type: SET_PLAY_SOUND,
    data: isPlaySound
  }
}

export const setActiveOrder = (activeOrder) => {
  return {
    type: SET_ACTIVE_ORDER,
    data: activeOrder
  }
}

export const setActiveIndex = (index) => {
  return {
    type: SET_ACTIVE_INDEX,
    data: index
  }
}

export const setActiveBarCode = (isActive) => {
  return {
    type: SET_ACTIVE_BARCODE,
    data: isActive
  }
}

export const setOrderStarted = (isOrderStarded) => {
  return {
    type: SET_ORDER_STARTED,
    data: isOrderStarded
  }
}

export const setModalVisible = (isVisible) => {
  return {
    type: SET_MODAL_VISIBLE,
    data: isVisible
  }
}

export const setOrderCancelModalVisible = (isVisible) => {
  return {
    type: SET_ORDER_CANCEL_MODAL_VISIBLE,
    data: isVisible
  }
}

export const setPreviousOperation = (previousOperationArr) => {
  return {
    type: SET_PRIVIOUS_OPERATION,
    data: previousOperationArr
  }
}

export const setIsConfirmation = (isConfirmation) => {
  return {
    type: SET_CONFIRMATION,
    data: isConfirmation
  }
}

export const setMaterialsArr = (materialsArr) => {
  return {
    type: SET_MATERIALS_ARR,
    data: materialsArr
  }
}

export const setMaterialsCondition = (materials, index) => {
  return {
    type: SET_MATERIALS_CONDITION,
    materials,
    index
  }
}

export const setMaterialsValue = (data, materials, index) => {
  return {
    type: SET_MATERIALS_VALUE,
    data,
    materials,
    index
  }
}

export const setShowMaterialsComponent = (data) => {
  return {
    type: SET_SHOW_MATERIALS_COMPONENT,
    data
  }
}

export const setEquipmentArr = (data) => {
  return {
    type: SET_EQUIPMENT_ARR,
    data
  }
}

export const setIsEquipmentLoading = (data) => {
  return {
    type: SET_IS_EQUIPMENT_LOADING,
    data
  }
}

export const setIsEquipmentVisible = (data) => {
  return {
    type: SET_EQUIPMENT_VISIBLE,
    data
  }
}

export const setSelectedItemsCheced = (id) => {
  return {
    type: SET_SELECTED_ITEMS_CHECKED,
    id
  }
}

export const setSelectedItemsUnCheced = (id) => {
  return {
    type: SET_SELECTED_ITEMS_UNCHECKED,
    id
  }
}

export const setFinishOrderParams = (data) => {
  return {
    type: SET_FINISH_ORDER_PARAMS,
    data
  }
}

// For headerReducer

export const setIsUserMenuModal = (isModal) => {
  return {
    type: SET_IS_USER_MENU_MODAL,
    data: isModal
  }
}

// For messagesReducer

export const setMessages = (messages) => {
  return {
    type: SET_MESSAGES,
    data: messages
  }
}

// For activeOrderReducer

export const setSound = (sound) => {
  return {
    type: SET_SOUND,
    data: sound
  }
}

// For techMapsReducer

export const setMapsArr = (maps) => {
  return {
    type: SET_MAPS_ARR,
    data: maps
  }
}

export const setModalVisibleTechMaps = (isVisible) => {
  return {
    type: SET_MODAL_VISIBLE_TECH_MAPS,
    data: isVisible
  }
}

export const setItem = (item) => {
  return {
    type: SET_ITEM,
    data: item
  }
}

// For barCodeReducer

export const setHasPermission = (data) => {
  return {
    type: SET_HAS_PERMISSION,
    data
  }
}

export const setScanned = (isScanned) => {
  return {
    type: SET_SCANNED,
    data: isScanned
  }
}

export const setBarcode = (data) => {
  return {
    type: SET_BARCODE,
    data
  }
}

export const setBounds = (bounds) => {
  return {
    type: SET_BOUNDS,
    data: bounds
  }
}

// For equipmentItemReducer

export const setIsCheckedArr = (data) => {
  return {
    type: SET_IS_CHECKED_ARR,
    data
  }
}

export const setIsChecked = (index) => {
  return {
    type: SET_IS_CHECKED,
    index
  }
}

export const setIsLoading = (data) => {
  return {
    type: SET_IS_LOADING,
    data
  }
}

// For newMessageItemReducer

export const setNewMessage = (data) => {
  return {
    type: SET_NEW_MESSAGE,
    data
  }
}

// For orderReducer

export const setImgTag = (ImgTag) => {
  return {
    type: SET_IMG_TAG,
    data: ImgTag
  }
}

// For userMenuModalReducer

export const setIsCompleteWorkShiftVisible = (data) => {
  return {
    type: SET_IS_COMPLETE_WORK_SHIFT_VISIBLE,
    data
  }
}

export const setUserMenuOrders = (data) => {
  return {
    type: SET_USER_MENU_ORDERS,
    data
  }
}

export const setTempDetail = (data, key) => {
  return {
    type: SET_TEMP_DETAIL,
    data,
    key
  }
}

export const setCreatedOrderId = (data) => {
  return {
    type: SET_CREATED_ORDER_ID,
    data
  }
}

// For authReducer

export const setLogin = (data) => {
  return {
    type: SET_LOGIN,
    data
  }
}

export const setPassword = (data) => {
  return {
    type: SET_PASSWORD,
    data
  }
}

export const setAppIsReady = (data) => {
  return {
    type: SET_APP_IS_READY,
    data
  }
}

export const setShowError = (data) => {
  return {
    type: SET_SHOW_ERROR,
    data
  }
}

// For startFinishButtonReduser

export const setIsEquipmentEmpty = (data) => {
  return {
    type: SET_IS_EQUIPMENT_EMPTY,
    data
  }
}

// For ErrorReduser

export const setIsErrorComponentVisible = (data) => {
  return {
    type: SET_IS_ERROR_COMPONENT_VISIBLE,
    data
  }
}

export const setErrorMessage = (data) => {
  return {
    type: SET_ERROR_MESSAGE,
    data
  }
}
