import React from 'react';
import TextField from '@material-ui/core/TextField'
import { connect } from 'react-redux'
import { setSpecialText } from '../actions'

function SpecialTextBox({ setSpecialText }) {
  return (
      <div>
        <div>Enter Special Text:</div>
        <TextField onChange={(e)=>{
            if(setSpecialText){
              setSpecialText(e.target.value);
            }
        }} />
      </div>
  );
}

export default connect(
  null,{
    setSpecialText
  }
)(SpecialTextBox);
