import { PersonProps } from "./Person.types"


export const Person = ({name }: PersonProps) => {
  return (
    <div>
      <h2>{name.first} {name.last}</h2>
    </div>
  )
}
