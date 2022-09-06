import React, { useState } from "react";

const pomodoroContext = React.createContext({
  minute: 0,
  second: 0,
  lap: 0,
  message: "working time",
});

let hasStarted = false;
let storeInterval = null;
const WORK_DURATION = 2;
const REST_DURATION = 1;
const LONG_REST_DURATION = 2;

const isTaskCompleted = (currentLap, passedMinutes) => {

  if (currentLap % 6 === 0 && passedMinutes === LONG_REST_DURATION)
    return "working time";
  if (
    currentLap % 2 === 0 &&
    currentLap % 6 !== 0 &&
    passedMinutes === REST_DURATION
  )
    return "working time";

  if (currentLap % 5 === 0 && passedMinutes === WORK_DURATION)
    return "long rest time";

  if (currentLap % 2 !== 0 && passedMinutes === WORK_DURATION)
    return "rest time";

    return false;
};

export const PomodoroContextProvider = (props) => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [message, setMessage] = useState("press START to start timer");
  const [lap, setLap] = useState(0);

  const increaseSecondHandler = () => {
    setSecond((prevSec) => {
      prevSec += 1;
      if (prevSec === 60) {
        increaseMinuteHandler();
        return 0;
      }
      return prevSec;
    });
  };

  const increaseMinuteHandler = () => {
    setMinute((prevMin) => {
      prevMin += 1;
      increaseLapHandler(prevMin);
      return prevMin;
    });
  };

  const increaseLapHandler = (currMin) => {
    setLap((prevLap) => {
      // prevLap += 1;
      const currentTask = isTaskCompleted(prevLap, currMin);
      if (currentTask) {
        setMinute(0);
        setSecond(0);
        setMessage(() => currentTask);
        return prevLap + 1;
      }
      else setMessage((prevMessage) => prevMessage);
      return prevLap;
    });
  };

  const startHandler = () => {
    if (hasStarted) clearInterval(storeInterval);
    storeInterval = setInterval(increaseSecondHandler, 1000);
    if (!hasStarted) {
      setLap(() => {
        setMessage(() => "working time");
        hasStarted = true;
        return 1;
      });
    }
  };

  const stopHandler = () => {
    clearInterval(storeInterval);
    storeInterval = null;
    hasStarted = false;
  };

  const resetHandler = () => {
    setSecond(0);
    setMinute(0);
    setLap(0);
    if (storeInterval != null) stopHandler();
  };
  return (
    <pomodoroContext.Provider
      value={{
        second: second,
        minute: minute,
        lap: lap,
        message: message,
        start: startHandler,
        stop: stopHandler,
        reset: resetHandler,
        isTaskCompleted: isTaskCompleted,
      }}
    >
      {props.children}
    </pomodoroContext.Provider>
  );
};

export default pomodoroContext;
