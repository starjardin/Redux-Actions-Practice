import { combineReducers } from "redux";

import globalState from '../state'
// incomplete reducer function that checks an action prop type to detemine a counter number
function currentCount(state= globalState.currentCount, action){
  switch(action.type) {
    case "INCREASE_COUNTER":
      return state + 1
    case "DECREASE_COUNTER":
      return state - 1
    default : return state
  }
}

// incomplete reducer function that should check an action prop type to return an array of users
function users(state =[]){
  return state;
}

function currentCity(state=""){
  return state;
}

function currentTemp(state=0){
  return state;
}

function displayModal(state=false){
  return state;
}

function imageUrl(state=""){
  return state
}

function currentUserSort(state="first_name"){
  return state;
}

function imageScale(state=1){
  return state
}

function searchText(state=""){
  return state;
}

// complete reducer function that should check action prop type ""SET_SPECIAL_TEXT" to determine state value
export function specialText(state = globalState.specialText, action) {
  switch(action.type) {
    case "SET_SPECIAL_TEXT":
      return {
        ...state,
        specialText: action.value
      }
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