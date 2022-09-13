import React from 'react';
import s from './DisplayCounter.module.css'
import {Status} from "../../enums/status";


type CounterPropsType = {
    counter: number
    maxValue: number
    status: Status
}

export const DisplayCounter: React.FC<CounterPropsType> = ({counter, maxValue, status}) => {
 /*   return (
        status === Status.ERROR
            ? <div className={s.errorMessage}>Type correct value!</div>
            : status === Status.SET
                ? <div className={s.startMessage}>Enter values and press "SET"</div>
                : <div className={counter === maxValue ? s.error : s.counter}>{counter}</div>
    )*/
    const counterClassName = counter === maxValue ? s.error : s.counter
    switch (status) {
        case Status.ERROR:
            return <div className={s.errorMessage}>Type correct value!</div>
        case Status.SET:
            return  <div className={s.startMessage}>Enter values and press "SET"</div>
        default:
            return <span className={counterClassName}>{counter}</span>
    }
}
