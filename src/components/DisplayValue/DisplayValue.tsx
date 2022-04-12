import React from "react";
import s from './DisplayValue.module.css'

type DisplayValue = {
    value : number
}

function DisplayValue (props: DisplayValue) {
    return (
        <div className={props.value < 5 ? s.counter : s.stopCounter}>{props.value}</div>
    )
}

export default DisplayValue