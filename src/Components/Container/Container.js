import classes from "./Container.module.css";
import Count from "../Counts/Count";
import Button from "../Button/Button";
import React from "react";

const Container = () => {
  return (
    <React.Fragment>
      <div className={classes.div}>
        <Count>0</Count>
        <Count>0</Count>
        <p>:</p>
        <Count>0</Count>
        <Count>0</Count>
      </div>
      <div className={classes.btnContainer}>
        <Button className = {classes.btn}>start</Button>
        <Button className = {classes.btn}>stop</Button>
        <Button className = {classes.btn}>reset</Button>
      </div>
    </React.Fragment>
  );
};

export default Container;
