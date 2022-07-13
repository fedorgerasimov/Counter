import React from "react";
import s from "./Settings.module.css"
import {Input} from "../Input";
import {UniversalButton} from "../Button";

type SettingsPropsType = {
    callBackMaxValue: (maxInputValue: string) => void
    callBackStartValue: (startInputValue: string) => void
    setValue: () => void
    buttonIndicator: boolean
    startValue: number
    maxValue: number
    error: boolean
}

export function Settings(props: SettingsPropsType) {
    let strStartInputValue = JSON.stringify(props.startValue)
    let strMaxInputValue = JSON.stringify(props.maxValue)
    const setButtonHandler = () => {
        props.setValue()
    }
    return (
        <div className={s.settingsOfCounter}>
            <div className={s.blockOfSettings}>
                <div>
                <span>
                    max value
                </span>
                    <Input
                        callBack={props.callBackMaxValue}
                        inputClass={props.maxValue <= props.startValue ? `${s.error}` : `${s.input}`}
                        value={strMaxInputValue}
                    />
                </div>
                <div>
                <span>
                    start value
                </span>
                    <Input
                        callBack={props.callBackStartValue}
                        inputClass={props.startValue < 0 ? `${s.error}` : `${s.input}`}
                        value={strStartInputValue}
                    />
                </div>
            </div>
            <div className={s.buttonAreaOfSettings}>
                <div className={s.buttonArea}>
                    <UniversalButton name={'set'} callback={setButtonHandler} disabled={props.error || props.buttonIndicator}/>
                </div>
            </div>
        </div>
    )
}