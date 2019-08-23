import React from 'react';
import './ClearButton.css';

const ClearButton = props => {
  const { children, handleClear } = props;
  return (
    <div className='clear-btn' onClick={handleClear}>
      {children}
    </div>
  );
};

export default ClearButton;
