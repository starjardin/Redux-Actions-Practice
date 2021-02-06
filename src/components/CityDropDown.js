import React, { useState } from 'react';
import { InputLabel,Select,MenuItem } from '@material-ui/core';
import { connect } from 'react-redux'
import {setCurrentCity} from '../actions'

function CityDropDown({setCurrentCity }) {
  const [ city,setCity ] = useState('')
  return (
      <div>
        <InputLabel id="label">Select Current City</InputLabel> 
        <Select
          labelId="label" 
          id="select" 
          value={city}
          onChange={
          (e)=>{
            if(setCurrentCity){
              setCity(e.target.value);
              setCurrentCity(e.target.value);
            }
          }
          }>
          <MenuItem value="Austin">Austin</MenuItem>
          <MenuItem value="New York">New York</MenuItem>
          <MenuItem value="New Olreans">New Olreans</MenuItem>
          <MenuItem value="Las Vegas">Las Vegas</MenuItem>
          <MenuItem value="Seattle">Seattle</MenuItem>
          <MenuItem value="San Fransisco">San Fransisco</MenuItem>
          <MenuItem value="Washington D.C.">Washington D.C.</MenuItem>
        </Select>
      </div>
  );
}

export default connect(
  null, {setCurrentCity}
)(CityDropDown);