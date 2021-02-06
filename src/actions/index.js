// function that returns an action type and a text value
export function setSpecialText(text){
  return {
    type: "SET_SPECIAL_TEXT",
    value: text
  }
}

export function increase(text){
  return {
    type: "INCREASE",
  }
}