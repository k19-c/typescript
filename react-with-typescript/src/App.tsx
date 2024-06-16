import { SetStateAction, useState } from 'react';
import './App.css'
import { Button } from './components/props/Button';
import { Greet } from './components/props/Greet';
import { Heading } from './components/props/Heading';
import { Input } from './components/props/Input';
import { Oscar } from './components/props/Oscar';
import { Status } from './components/props/Status';
import { Container } from './components/props/Container';
import { ThemeContextProvider } from './components/context/themeContext';
import Box from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';

const App = () =>  {

  const [value, setValue] = useState('');

  

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setValue(event.target.value)

    console.log('RES', event.target.value);

  }
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
      <Input value={value} handleChange={handleChange} />
      <Container styles={{border: "1px solid balck", padding: "1rem"}} />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>
    </>
  )
}

export default App;
