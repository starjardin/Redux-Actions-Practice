import { combineReducers } from "redux";

// incomplete reducer function that checks an action prop type to detemine a counter number
function currentCount(state= 0, action){
  switch(action.type) {
    case "INCREASE_COUNTER":
      return state + 1
    case "DECREASE_COUNTER":
      return state - 1
    default : return state
  }
}

// incomplete reducer function that should check an action prop type to return an array of users
function users (state = [], action) {
  switch (action.type) {
    case "ADD_USER": return [ ...state, action.user ]
    case "REMOVE_USER": return state.slice(0, -1)
    default: return state
  }
}

function currentCity (state = 'Austin', action) {
  switch(action.type) {
    case "SET_CURRENT_CITY":
      return action.value
    default: return state
  }
}

function currentTemp(state=23, action){
  switch (action.type) {
    case "CHANGE_TEMPERATURE":
      return action.value
    default: return state
  }
}

function displayModal(state=false, action){
  switch (action.type) {
    case "TOGGLE_MODAL": return !state
  default: return state
  }
}

function imageUrl (state = "", action) {
  switch (action.type) {
    case "SET_IMAGE_URL": return action.url
    default: return state
  }
}

function currentUserSort(state="first_name", action){
  switch (action.type) {
    case "SORT_USER_NAME":
      return action.sortBy
    default: return state
  }
}

function imageScale(state=1, action){
  switch (action.type) {
    case "IMAGE_SCALE": return action.value
    default: return state
  }
}

function searchText(state="", action){
  switch (action.type) {
    case "SEARCH_TEXT_BOX":
      return action.value
    default: return state
  }
}
// complete reducer function that should check action prop type ""SET_SPECIAL_TEXT" to determine state value
function specialText(state = '', action) {
  switch(action.type) {
    case "SET_SPECIAL_TEXT":
      return action.value
    default: return state
  }
}



export default combineReducers({
  currentCount,
  specialText,
  currentCity,
  searchText,
  currentTemp,
  displayModal,
  imageUrl,
  currentUserSort,
  imageScale,
  users
});