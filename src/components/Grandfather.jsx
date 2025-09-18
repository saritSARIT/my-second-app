
import React, { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

function Grandfather() {
  const [value, setValue] = useState(0);

  return (
    <div className="grandfather">
      <h2>Grandfather</h2>
      <div className="children-container">
        <ChildA value={value} />
        <ChildB value={value} setValue={setValue} />
      </div>
    </div>
  );
}

export default Grandfather;
