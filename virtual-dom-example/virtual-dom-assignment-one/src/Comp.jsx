import React, { useState } from 'react';

const Comp = () => {
     // State to hold the counter value
  const [counter, setCounter] = useState(0);

  // Function to handle counter increment
  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1); // Update the state
  };
  return (
    <>
      <button onClick={incrementCounter}>Btn Increment</button>
      <p>{counter}</p>
    </>
  );
}

export default Comp;
