import './App.css'
import { Greet } from './components/Greet';
import { Person } from './components/Person';

const App = () =>  {

  const personName = {
    first: "chandrashekar",
    last: "kalal"
  }

  return (
    <>
      <h1>A TypeScript Application </h1>
      <Greet name="kalal" count={100} isLoggedIn={false} /> 
      <Person name={personName} />
    </>
  )
}

export default App;
