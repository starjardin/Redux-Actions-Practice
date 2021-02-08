import React, { useState } from 'react';
import { InputLabel,Select,MenuItem } from '@material-ui/core';

function CityDropDown({set }) {
  const [ city,setCity ] = useState('Austin')
  return (
      <div>
        <InputLabel id="label">Select Current City</InputLabel> 
        <Select
          labelId="label" 
          id="select" 
          value={city}
          onChange={
          (e)=>{
            if(set){
              setCity(e.target.value);
              set(e.target.value);
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

export default CityDropDown;