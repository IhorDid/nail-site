import React from 'react';

const Button = ({ text, className, props, onClick }) => {
  return (
    <button className={className} {...props} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
