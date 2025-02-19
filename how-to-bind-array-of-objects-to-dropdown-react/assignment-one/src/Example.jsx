import React, { useState } from 'react';

const Example = () => {
    // array of objects
    const options = [
        { id: 1, name: "Option 1" },
        { id: 2, name: "Option 2" },
        { id: 3, name: "Option 3" }
      ];


      // state to hold selected value 
      const [selectedOption, setSelectedOption] = useState("");

      // handle change event
      const handleChange = (event) => {
        setSelectedOption(event.target.value);
      };
  return (
    <>
      <h1>Dropdown with Array of Objects</h1>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      <p>Selected: {selectedOption}</p>
    </>
  );
}

export default Example;
