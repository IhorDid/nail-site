import React from 'react';

const Button = ({ text, className, props, onClose, onClick }) => {
  const handleCTA = () => {
    if (onClose) {
      onClose();
    }
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button className={className} {...props} onClick={onClick || handleCTA}>
      {text}
    </button>
  );
};

export default Button;
