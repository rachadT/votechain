// src/Counter.js
import React, { useState, useEffect } from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(props.startValue);
  const [message, setMessage] = useState('');

  // Increment function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement function
  const decrement = () => {
    setCount(count - 1);
  };

  // useEffect to update message when count changes
  useEffect(() => {
    setMessage(`The counter has been updated to ${count}`);
  }, [count]); // Effect runs whenever 'count' changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <button type="button" onClick={increment}>+</button>
      <button type="button" onClick={decrement}>-</button>
      <p>{message}</p> {/* Display the message on the screen */}
    </div>
  );
}

export default Counter;
