import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <ExampleOne/>
    </>
  )
}

export default App


function ExampleOne(){
  const [key,setKey] = useState<string>('')

  const handleKeyPress = (event:React.KeyboardEvent<HTMLInputElement>) => {
    setKey(event.key);
    console.log('input pressed key:',event.key)
  }
  return(
    <>
      <h1>Last key pressed: {key}</h1>
      <input type="text" value={key} onKeyDown={handleKeyPress}  placeholder="Press any key..." />
    </>
  )
}


// function Example(){
//   const [count,setCount] = useState<number>(0)

//   const btnInc = () => {
//     setCount((prev) => prev + 1)
//   }
//   const btnDec = () => {
//     setCount((prev) => prev - 1)
//   }
//   const btnReset = () => {
//     setCount(0)
//   }

//   const handleClick = (e:React.MouseEventHandler<HTMLButtonElement>) => {
//     setCount((prev) => prev + 1)
//     console.log('button clicked, count',e)
//   }
//   return(
//     <>
//      <h2>Click Counter: {count}</h2>
//      <button onClick={handleClick}>Click me</button>
//      {/* <button onClick={btnInc}>+</button>
//      <button onClick={btnDec}>-</button>
//      <button onClick={btnReset}>Reset</button> */}
//     </>
//   )
// }