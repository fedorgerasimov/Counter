import React from "react";
import s from './Button.module.css'

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
        <div>
            <button className={s.button} disabled={props.disabled} onClick={onClickButton}>{props.name} </button>
        </div>
    )

}