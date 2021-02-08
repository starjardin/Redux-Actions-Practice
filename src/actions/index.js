// function that returns an action type and a text value
export function setSpecialText(text){
  return {
    type: "SET_SPECIAL_TEXT",
    value: text
  }
}

export function setCurrentCity(text){
  return {
    type: "SET_CURRENT_CITY",
    value: text
  }
}

export function increase(){
  return {
    type: "INCREASE_COUNTER",
  }
}
export function decrease(){
  return {
    type: "DECREASE_COUNTER",
  }
}

export function changeTemperature (temp) {
  return {
    type: "CHANGE_TEMPERATURE",
    value: temp
  }
}

export function toggleModal () {
  return {
    type: 'TOGGLE_MODAL'
  }
}


export function sortUserName (sortBy) {
  return {
    type: "SORT_USER_NAME",
    sortBy
  }
}
