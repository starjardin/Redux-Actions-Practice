import React, { useState } from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';

function SortUsers ({ set }) {
  const [ sortUser, setSortUsers ] = useState('first_name')
  return (
      <div>
        <InputLabel id="label">Sort Users</InputLabel> 
        <Select
          labelId="label" 
          id="select" 
          value={sortUser}
          onChange={
            (e)=>{
              if (set) {
                setSortUsers(e.target.value)
                set(e.target.value);
              }
            }
          }>
          <MenuItem value="first_name">First Name</MenuItem>
          <MenuItem value="last_name">Last Name</MenuItem>
        </Select>
      </div>
  );
}
export default SortUsers;