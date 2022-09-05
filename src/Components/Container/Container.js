import classes from "./Container.module.css";
import Count from "../Counts/Count";
import Button from "../Button/Button";
import React, { useContext } from "react";
import pomodoroContext from "../../store-context/timeContext";

const Container = () => {
  const ctx = useContext(pomodoroContext);
  console.log(ctx.second);
  // console.log(ctx.minute + " " + ctx.second);

  return (
    <React.Fragment>
      <div className={classes.div}>
        <Count>{ctx.minute < 10 ? "0" : ""}{ctx.minute}</Count>
        <p>:</p>
        <Count>{ctx.second < 10 ? "0" : ""}{ctx.second}</Count>
      </div>
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
    </React.Fragment>
  );
};

export default Container;
