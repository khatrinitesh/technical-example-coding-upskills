import React, { useState } from 'react';

const Counter:React.FC = () => {
    const [count,setCount] = useState<number>(0);

    const btnInc = () => {
        setCount((prev) => prev + 1)
    }
    const btnDec = () => {
        setCount((prev) => prev - 1)
    }
    const btnReset = () => {
        setCount(0)
    }
  return (
    <>
      <button onClick={btnInc}>+</button>
      <button onClick={btnDec}>-</button>
      <button onClick={btnReset}>Reset</button>
      {count}
    </>
  );
}

export default Counter;
