import { useState } from 'react'

import './App.css'

function App() {
  const [message,setMessage] = useState('');

  const changeMsg = () => {
    setMessage('message updated from child')
  }

  return (
    <>
      <h2>Parent comp</h2>
      <p>{message}</p>
      <ChildComp callParentMethod={changeMsg}/>
    </>
  )
}

export default App

function ChildComp({callParentMethod }){

  return(
    <>
    <h2>Child comp</h2>
    <button onClick={callParentMethod}>Click to change parent method</button>
    </>
  )
}
