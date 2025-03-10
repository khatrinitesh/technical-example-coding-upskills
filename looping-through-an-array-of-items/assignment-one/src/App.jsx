import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <Example/>
    </>
  )
}

export default App
function Example(){
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Sam Smith', email: 'sam@example.com' },
  ]);

  const BtnDel = (id) => {
    const newData = users.filter((val) => val.id !== id)
    setUsers(newData)
  }
  return(
    <>
    {users.map((val) => {
      return(
        <>
         <div key={val.id}>
          {val.id}
          <h2>{val.name}</h2>
          <p>{val.email}</p>
          <button onClick={() => BtnDel(val.id)}>Remove</button>
         </div>
        </>
      )
    })}
    </>
  )
}

// function Example(){
//   // example array of data
//   const items = [
//     { id: 1, name: 'Item 1' },
//     { id: 2, name: 'Item 2' },
//     { id: 3, name: 'Item 3' },
//   ];
//   return(
//     <>
//     {items.map((val) =>{
//       return(
//         <>
//         <>
//         <div key={val.id}>{val.name}</div></></>
//       )
//     })}
//     </>
//   )
// }
