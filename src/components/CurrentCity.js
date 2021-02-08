import React from 'react';

function CurrentCity({currentCity}) {
  return (
      <div>
        CurrentCity: {currentCity ? currentCity : "null"}
      </div>
  );
}

export default CurrentCity;

