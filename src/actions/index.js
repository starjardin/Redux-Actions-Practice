// function that returns an action type and a text value
export function setSpecialText(text){
  return {
    type: "SET_SPECIAL_TEXT",
    value: text
  }
}

//action creator to set current city.
export function setCurrentCity(text){
  return {
    type: "SET_CURRENT_CITY",
    value: text
  }
}

//Action  creator to increase counter
export function increaseCounter(){
  return {
    type: "INCREASE_COUNTER",
  }
}

//action creator to decrese counter
export function decreaseCounter(){
  return {
    type: "DECREASE_COUNTER",
  }
}

//action creator to add user
export function addUser (user) {
  return {
    type: "ADD_USER",
    user
  }
}

//action creator to remove users
export function removeUser () {
  return {
    type: "REMOVE_USER"
  }
}

//action creator to change temperature
export function changeTemperature (temp) {
  return {
    type: "CHANGE_TEMPERATURE",
    value: temp
  }
}

//action creator to toggle - hide and show - modal
export function toggleModal () {
  return {
    type: "TOGGLE_MODAL"
  }
}

//action to sort user name bytheir first name
export function sortUserName (sortBy) {
  return {
    type: "SORT_USER_NAME",
    sortBy
  }
}

//action creator to search a specific user
export function searchText (text) {
  return {
    type: "SEARCH_TEXT_BOX",
    value: text
  }
}


export function setImageUrl (url) {
  return {
    type: "SET_IMAGE_URL",
    url,
  }
}

export function imageScale (value) {
  return {
    type: "IMAGE_SCALE",
    value
  }
}