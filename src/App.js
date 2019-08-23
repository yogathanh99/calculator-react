import React, { useState } from 'react';
import { evaluate } from 'mathjs';

import Button from './components/Button/Button';
import Input from './components/Input/Input';
import ClearButton from './components/ClearButton/ClearButton';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClear = () => {
    setInput('');
  };

  const handleAddValue = val => {
    setInput(input + val);
  };

  const handleEqual = () => {
    setInput(evaluate(input));
  };

  return (
    <div className='App'>
      <div className='cal-wrapper'>
        <Input input={input} />
        <div className='row'>
          <Button handleClick={handleAddValue}>7</Button>
          <Button handleClick={handleAddValue}>8</Button>
          <Button handleClick={handleAddValue}>9</Button>
          <Button handleClick={handleAddValue}>/</Button>
        </div>
        <div className='row'>
          <Button handleClick={handleAddValue}>4</Button>
          <Button handleClick={handleAddValue}>5</Button>
          <Button handleClick={handleAddValue}>6</Button>
          <Button handleClick={handleAddValue}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={handleAddValue}>1</Button>
          <Button handleClick={handleAddValue}>2</Button>
          <Button handleClick={handleAddValue}>3</Button>
          <Button handleClick={handleAddValue}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={handleAddValue}>.</Button>
          <Button handleClick={handleAddValue}>0</Button>
          <Button handleClick={() => handleEqual()}>=</Button>
          <Button handleClick={handleAddValue}>-</Button>
        </div>
        <div className='row'>
          <ClearButton handleClear={handleClear}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
