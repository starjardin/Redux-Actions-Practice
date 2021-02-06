import React from 'react';
import { connect } from "react-redux"

function SpecialText({ text }) {
  return (
      <div>
        Special Text: {text ? text : "null"}
      </div>
  );
}
export default connect(
  (state) => ({
    text: state.specialText.specialText
  }), null
)(SpecialText);