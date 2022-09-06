import classes from "./Message.module.css";
import { useContext } from "react";
import pomodoroContext from "../../store-context/timeContext";
const Message = () => {
  const ctx = useContext(pomodoroContext);
  return <div className={classes.message}>{ctx.message}</div>;
};

export default Message;
