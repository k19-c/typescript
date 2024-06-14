
type GreetProps ={
    name: string;
    count: number;
    isLoggedIn: boolean;
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
          {props.isLoggedIn ? <h2>Welcome {props.name} to explore typescript in {props.count} minuntes</h2> : "Welcome Guest"  }
      
    </div>
  )
}
