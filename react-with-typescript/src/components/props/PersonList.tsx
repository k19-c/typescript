import { Name } from "./Person.types"

type personlistProps = {
   names: Name[]
}

export const PersonList = ({names} : personlistProps) => {
  return (
    <div>
      {names.map((name) => {
        return (
            <h2>{name.first} {name.last}</h2>
        )
      })}
    </div>
  )
}
