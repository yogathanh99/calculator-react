import React from 'react';
import './Button.css';

const isOperator = val => !isNaN(val) || val === '.' || val === '=';

const Button = props => {
  return (
    <div
      className={`button-wrapper ${
        isOperator(props.children) ? null : 'operator'
      }`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children === '*' ? 'X' : props.children}
    </div>
  );
};

export default Button;
