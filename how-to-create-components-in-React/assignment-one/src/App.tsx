import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <h1>Example</h1>

    <Example/>
    </>
  )
}

export default App

// Memoized Functional Component with React.memo
const Person: React.FC<{ name: string; age: number }> = (({ name, age }) => {
  console.log('Rendering Person component...');
  return (
    <>
      <h1>{`Name: ${name}`}</h1>
      <h2>{`Age: ${age}`}</h2>
    </>
  );
});

function Example() {
  const [name, setName] = useState('Sachin');
  const [age, setAge] = useState(55);

  const changePersonDetails = () => {
    setName('Rahul');
    setAge(56);
  };

  return (
    <>
      <button onClick={changePersonDetails}>Change Name and Age</button>
      <Person name={name} age={age} />
    </>
  );
}


// const Greeting:React.FC = () => {
//   const [name,setName] = useState<string>('Sachin Tendulkar')

//   const btnClick = () => {
//     setName('Rahul Dravid');
//   }
//   return(
//     <>
//     <h2>Hello, {name}!</h2>
//     <button onClick={btnClick}>Change</button>
//     </>
//   )
// }

// interface GreetingProps{
//   name:string;
// }

// const Example:React.FC<GreetingProps> = ({name}) => {
//   return(
//     <>
//      <h1>Hello, {name}</h1>
//     </>
//   )
// }
