import React from "react";

export default function dec(props) {
    return (
        <button style={{backgroundColor:"red"}} onClick={() => props.func()}>-</button>
    )
}