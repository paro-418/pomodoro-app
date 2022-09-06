const Button = (props) => {
    return <button type ={props.type} onClick={props.callFunction} className = {props.className}>{props.children}</button>
}

export default Button;