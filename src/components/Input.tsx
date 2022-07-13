
import {ChangeEvent} from "react";

type InputPropsType = {
    inputClass?: string
    callBack: (inputValue: string) => void
    value?: string
}

export function Input (props:InputPropsType) {
    const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.callBack (e.currentTarget.value)
        }

    return (
        <input type={"number"} className={props.inputClass} value={props.value} onChange={onChangeInputHandler}
        style={{width: 70, height:25, margin: 10, fontSize:25}}
        />
    )
}