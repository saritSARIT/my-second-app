
import React from 'react';
import Grandson from './Grandson';

function ChildA({ value }) {
  return (
    <div className="child">
      <h3>Child A</h3>
      <Grandson value={value} />
    </div>
  );
}

export default ChildA;
