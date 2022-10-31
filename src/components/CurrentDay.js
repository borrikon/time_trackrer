import moment from "moment";
import { useEffect, useState } from "react";

const CurrentDay = () => {
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [startTime, setStartTime] = useState();
  const [currentTimer, setCurrentTimer] = useState();
  const [workedHours, setWorkedHours] = useState();
  const [workedMinutes, setWorkedMinutes] = useState();
  const [workedSec, setWorkedSec] = useState();
  const [timerId, setTimerId] = useState();
  
  useEffect(() => {
    if(isTimerActive){
      const id = setInterval(() => {
          const currentTime = moment();
          const diff = currentTime.diff(startTime, 'ss')
          setCurrentTimer(diff)
          setWorkedHours(Math.floor((diff / 600000) % 24));
          setWorkedMinutes(Math.floor((diff  / 60000) % 60));
          setWorkedSec(Math.floor((diff / 1000) % 60));
      }, 1000);
      setTimerId(id);
      return () => clearInterval(id); 
    }
  }, [startTime, currentTimer]);

  const StartTimer = () => {
    setIsTimerActive(!isTimerActive);
    setStartTime(moment());
  }
  const StopTimer = () => {
    setIsTimerActive(!isTimerActive);
    clearInterval(timerId);
  }
  return (
    <>
        <section className="currentDay">
            <button 
              disabled={isTimerActive}
              className={!isTimerActive ? 'btn--active' : 'btn--disabled'}
              onClick={StartTimer}
            >
              Start timer
            </button>
            <button 
              disabled={!isTimerActive}
              className={isTimerActive ? 'btn--active' : 'btn--disabled'}
              onClick={StopTimer}
            >
              End timer
            </button>
        </section>
        {
          currentTimer ?
          <p >{`${workedHours} : ${workedMinutes} : ${workedSec}`}</p> 
          : null
        }
        
    </>
  )
}

export default CurrentDay;