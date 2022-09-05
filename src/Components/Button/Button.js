const Button = (props) => {
    return <button onClick={props.callFunction} className = {props.className}>{props.children}</button>
}

export default Button;