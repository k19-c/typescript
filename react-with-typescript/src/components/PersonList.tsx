type personlistProps = {
   names: {
     first: string;
     last: string;
   }[]
}

export const PersonList = (props: personlistProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
            <h2>{name.first} {name.last}</h2>
        )
      })}
    </div>
  )
}
