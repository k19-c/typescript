import './App.css'
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Status } from './components/Status';

const App = () =>  {

  const personName = {
    first: "chandrashekar",
    last: "kalal"
  }

  const listNames = [
    {
      first: "chandrashekar",
      last: "kalal"
    },
    {
      first: "chandrakanth",
      last: "kalal"
    },
    {
      first: "nandini",
      last: "kalal"
    }
  ]

  return (
    <>
      <h1>A TypeScript Application </h1>
      <Greet name="kalal" isLoggedIn={true} /> 
      {/* <Person name={personName} /> */}
      {/* <PersonList names={listNames} /> */}
      <Status status='loading' />
      <Heading>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, cum!</Heading>
      <Oscar><Heading>Leonardo Decaprio has won the Oscar</Heading></Oscar>
      <Button handleClick={(event, id) => {
        console.log('Button Clicked', event, id)
      }} />
      <Input value='' handleChange={(event) => console.log(event)} />
    </>
  )
}

export default App;
