import React from 'react';
import { connect } from "react-redux"

function CurrentCity({ currentCity }) {
  console.log(currentCity);
  return (
      <div>
        CurrentCity: {currentCity ? currentCity : "null"}
      </div>
  );
}

export default connect(
  (state) => ({
    currentCity: state.currentCity.currentCity
  }), null
)(CurrentCity);