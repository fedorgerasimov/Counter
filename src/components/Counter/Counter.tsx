import React from "react";
import s from "./Counter.module.css"
import {UniversalButton} from "../Button";

type CounterPropsType = {
    maxValue: number
    startValue: number
    counter: number
    setCounter: (counter: number) => void
    buttonIndicator: boolean
    error: boolean
}

export function Counter({counter, ...props}: CounterPropsType) {

    const callback = (nameOfButton: 'inc' | 'reset') => {

        if (counter < props.maxValue && nameOfButton === 'inc') {
            counter++
        }

        if (nameOfButton === 'reset') {
            counter = props.startValue
        }
        props.setCounter(counter)
    }

    return (
        <div className={s.counter}>
            <div className={s.display}>
                {props.buttonIndicator
                    ? <div className={counter === props.maxValue ? s.error : ''}>
                        {counter}
                    </div>
                    :
                    <div>
                        {props.error
                            ? <div className={s.errorMessage}> Incorrect value!</div>
                            : <div className={s.startMessage}> Enter values and press "set"
                            </div>
                        }
                    </div>

                }
            </div>
            <div>
                <div className={s.buttonBlock}>
                    <UniversalButton
                        name={'inc'}
                        callback={() => callback('inc')}
                        disabled={counter === props.maxValue ? true : !props.buttonIndicator}
                    />
                    <UniversalButton
                        name={'reset'}
                        callback={() => callback('reset')}
                        disabled={!props.buttonIndicator}
                    />
                </div>
            </div>

        </div>
    )
}