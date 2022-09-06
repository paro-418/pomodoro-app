import classes from "./Form.module.css";
import pomodoroContext from "../../store-context/timeContext";
import { useRef, useContext } from "react";

const Form = () => {

    const ctx = useContext(pomodoroContext);
  const workDurationRef = useRef();
  const restDurationRef = useRef();

  const dataCollectHandler = () => {
    const workDuration = workDurationRef.current.value;
    const restDuration = restDurationRef.current.value;
    if(workDuration && restDuration)
    ctx.dataCollector(+workDuration, +restDuration);
  };

  return (
    <form onChange={dataCollectHandler} className={classes.form}>
      <input
        className={classes.input}
        type="number"
        id="workDuration"
        placeholder="work duration (2 min default)"
        ref={workDurationRef}
      ></input>
      <input
        className={classes.input}
        type="number"
        id="restDuration"
        placeholder="rest duration (1 min default)"
        ref={restDurationRef}
      ></input>
    </form>
  );
};

export default Form;
