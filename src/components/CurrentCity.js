import React from 'react';
import { connect } from "react-redux"

function CurrentCity({currentCity}) {
  console.log(currentCity);
  return (
      <div>
        CurrentCity: {currentCity ? currentCity : "null"}
      </div>
  );
}

export default connect(({ currentCity }) => ({ currentCity }), null)(CurrentCity);

