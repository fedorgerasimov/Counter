import React from "react";
import "./Button.css"

type ButtonPropsType = {
    name: string
    callback: () => void
    disabled: boolean
}

export const Button = (props: ButtonPropsType) => {
    const onClickButton = () => {
        props.callback()
    }
    return (
        <button className='btn' disabled={props.disabled} onClick={onClickButton}>{props.name} </button>
    )

}