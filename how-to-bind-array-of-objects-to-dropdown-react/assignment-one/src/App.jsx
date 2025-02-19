import { useState } from 'react'
import './App.css'
import Example from './Example';

function App() {
  const options = ['option1','option2','option3']

  const [selectedOption,setSelectedOption] = useState(false);

  const handleChange = (e) => {
    setSelectedOption(e.target.value)
  }

  return (
    <>
    <Example/>
    <hr/>
     <select value={selectedOption} onChange={handleChange}>
     <option value="">Select an option</option>
     {options.map((option,index) => (
      <option key={index} value={option}>{option}</option>
     ))}
     </select>
     <p>Selected: {selectedOption}</p>
    </>
  )
}

export default App
