import { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <h1>Access DOM Element Example</h1>
      <input type="text" ref={inputRef} placeholder="CLick button to focus" />
      <button onClick={focusInput}>Focus on input</button>
    </>
  );
}

export default App;
