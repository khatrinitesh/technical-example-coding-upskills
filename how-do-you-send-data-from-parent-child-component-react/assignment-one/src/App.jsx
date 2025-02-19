import { useState } from 'react'

import './App.css'

function App() {

  const parentData = 'Hi, Duis ullamco magna excepteur adipisicing excepteur.'

  return (
    <>
      <ChildComp message={parentData}/>
    </>
  )
}

export default App

function ChildComp({message}){
  return(
    <>
    <h2>Child comp</h2>
    <p>{message}</p>
    </>
  )
}
