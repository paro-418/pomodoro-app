import classes from "./Container.module.css";
import Count from "../Counts/Count";
import Button from "../Button/Button";
import React, { useContext } from "react";
import pomodoroContext from "../../store-context/timeContext";

const Container = () => {
  const ctx = useContext(pomodoroContext);
  console.log(ctx.message);
  return (
    <React.Fragment>
      <div className={classes.div}>
        <Count>{ctx.minute < 10 ? "0" : ""}{ctx.minute}</Count>
        <p>:</p>
        <Count>{ctx.second < 10 ? "0" : ""}{ctx.second}</Count>
      </div>
      
      <div></div>
    </React.Fragment>
  );
};

export default Container;
