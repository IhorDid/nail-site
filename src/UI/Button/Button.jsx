import React from 'react';

const Button = ({ text, className, props, onClose }) => {
  const handleCTA = () => {
    if (onClose) {
      onClose();
    }
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button className={className} {...props} onClick={handleCTA}>
      {text}
    </button>
  );
};

export default Button;
