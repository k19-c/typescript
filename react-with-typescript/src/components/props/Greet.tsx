
type GreetProps ={
    name: string;
    count?: number;
    isLoggedIn: boolean;
}

export const Greet = (props: GreetProps) => {

  const { count = 0} = props;
  return (
    <div>
          {props.isLoggedIn ? <h2>Welcome {props.name} to explore typescript in {count} minuntes</h2> : "Welcome Guest"  }
      
    </div>
  )
}
