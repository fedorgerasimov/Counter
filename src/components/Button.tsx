import React from "react";
import s from "./Button.module.css"

type ButtonPropsType = {
    name:string
    callback: () => void
    disabled?: boolean
}

export const UniversalButton = (props:ButtonPropsType) => {

const onClickHandler = () => {
    props.callback()
}
        return (
        <span>
            <button className={s.button} disabled={props.disabled} name={props.name} onClick={onClickHandler}> {props.name}</button>
        </span>

    )
}