type childrenProps = {
    children: string
}


export const Heading = (props: childrenProps) => {
  return (
    <div>
       <h2>{props.children}</h2>
    </div>
  )
}

