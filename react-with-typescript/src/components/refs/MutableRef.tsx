import { useState, useEffect, useRef } from "react"


export const MutableRef = () => {

    const [timer, setTimer] = useState(0);
    const intervalRef = useRef<number | null>(null);

    // if we change the null to undefined that also works and if condition is not required in stopTimer Function .

    const stopTimer = () => {

        if(intervalRef.current) {
            console.log('INTERVAL', intervalRef.current);
            window.clearInterval(intervalRef.current)
        }
       
    };


    useEffect(() => {
       
        intervalRef.current = window.setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)

        return () => {
            stopTimer();
        }
    })
  return (
    <div>
      HookTimer - {timer} - 
      <button onClick={() => stopTimer()}>
        Stop Timer
      </button>
    </div>
  )
}

export default MutableRef
