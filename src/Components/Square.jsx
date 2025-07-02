import React, { useState } from "react"
import './Style.css'

export function Square(props){
    return <button className="square" onClick={props.onSquareClick}>{props.value}</button>
}