import { useState } from 'react'
import './App.css'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);


  return (
    <>
    {isLoggedIn ? 'welcome' : 'logout'}
    </>
  )
}

export default App
