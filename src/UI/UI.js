import Container from "../Components/Container/Container";
import classes from "./UI.module.css";
import Button from "../Components/Button/Button";
import pomodoroContext from "../store-context/timeContext";
import { useContext } from "react";
import Message from "../Components/Message/Message";

const UI = () => {

  const ctx = useContext(pomodoroContext);
  return (
    <main className={classes.main}>
      <Message>Pomodoro App</Message>
      <Container />
      <div className={classes.btnContainer}>
        <Button className={classes.btn} callFunction={ctx.start}>
          start
        </Button>
        <Button className={classes.btn} callFunction={ctx.stop}>
          stop
        </Button>
        <Button className={classes.btn} callFunction={ctx.reset}>
          reset
        </Button>
      </div>
      <Message>{ctx.message}</Message>
    </main>
  );
};

export default UI;
