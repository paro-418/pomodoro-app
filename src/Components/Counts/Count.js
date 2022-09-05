import classes from "./Count.module.css"

const Count = (props) =>{
    return <span className={classes.span}>{props.children}</span>
}

export default Count;