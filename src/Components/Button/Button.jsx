import React from "react"
import "./Button.css"
function  Button({text,isActive,onClick}){
    return(
        <button className= {`${isActive ? "active": null} buttuns  `} onClick={onClick}>
            {text}
        </button>
    )
}export default Button