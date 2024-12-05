import React from 'react';

function Button(props) {
  const handleClick = () => {
    // Perform your desired action here
    console.log('Button clicked!'); 
  };

  return (
    <button onClick={handleClick}>
      {props.children}
    </button>
  );
}

export default Button;