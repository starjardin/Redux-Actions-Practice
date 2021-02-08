import React from 'react';
import { connect } from 'react-redux'

function Counter({ count }) {
  return (
      <div>
        Counter: {count !== undefined ? count : "null"}
      </div>
  );
}

export default connect((state) => ({ count: state.currentCount }), null)(Counter);
