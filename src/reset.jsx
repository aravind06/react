import React from "react";

export default function reset(props) {
    return (
        <button style={{backgroundColor:"yellow"}} onClick={() => props.func()}>()</button>
    )
}