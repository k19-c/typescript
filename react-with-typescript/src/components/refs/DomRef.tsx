import { useRef, useEffect } from 'react'

export const DomRef = () => {

    const inputRef = useRef<HTMLInputElement>(null!);
    
    // we can use non null Assertion when we are using the useRef.
    // this allows us to call focus without optional Chaining .
    useEffect(() => {
       inputRef.current?.focus();
    }, [])

  return (
    <div>
       <input type='text' ref={inputRef}  />
    </div>
  )
}

export default DomRef
