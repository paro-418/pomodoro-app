import React, { useState, useContext } from "react";

const pomodoroContext = React.createContext({
  second: 0,
  lap: 0,
  increaseTimeHandler() {},
  updateLap() {},
  start() {},
  stop() {},
  reset() {},
});

let storeInterval = null;

export const PomodoroContextProvider = (props) => {
    const ctx = useContext(pomodoroContext);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [lap, setLap] = useState(0);

  const increaseTimeHandler = () => {
 
    if(ctx.second <10){
        console.log(ctx.second );
        console.log("hello ");

    }

    // if (second == 10) {
    //   console.log("hello");
    //   setSecond(0);
    //   setMinute((prevMin) => prevMin + 1);
    // } else
         setSecond((prevSec) => prevSec + 1);
  };

  const startHandler = () => {
    if (storeInterval != null) clearInterval(storeInterval);
    storeInterval = setInterval(increaseTimeHandler, 1000);
  };

  const updateLapHandler = () => {
    setLap((prevLap) => prevLap + 1);
  };

  const stopHandler = () => {
    clearInterval(storeInterval);
    storeInterval = null;
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
        increaseTime: increaseTimeHandler,
        updateLap: updateLapHandler,
        start: startHandler,
        stop: stopHandler,
        reset: resetHandler,
      }}
    >
      {props.children}
    </pomodoroContext.Provider>
  );
};

export default pomodoroContext;
