import React, {useState} from "react";

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
        <button disabled={props.disabled} onClick={onClickButton}>{props.name}</button>
    )

}