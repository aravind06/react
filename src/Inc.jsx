import React from "react";

export default function inc(props) {
    return (
        <button style={{backgroundColor:"green"}} onClick={() => props.func()}>+</button>
    )
}