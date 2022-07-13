import React, {useEffect, useState} from "react";
import s from './App.module.css'
import {Settings} from "./components/Settings/Settings";
import {Counter} from "./components/Counter/Counter";


function App() {
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [counter, setCounter] = useState<number>(0)
    const [buttonIndicator, setButtonIndicator] = useState<boolean>(true)


    useEffect(() => {
        const startValueAsString = localStorage.getItem('startValue')
        startValueAsString && setStartValue(JSON.parse(startValueAsString))
        /*if (startValueAsString) {
            let newValue = JSON.parse(startValueAsString)
            setStartValue(newValue)
        }*/
        const maxValueAsString = localStorage.getItem('maxValue')
        maxValueAsString && setMaxValue(JSON.parse(maxValueAsString))

        /*let counterAsString = localStorage.getItem('startValue')
        if (counterAsString) {
            let newValue = JSON.parse(counterAsString)
            setCounter(newValue)
        }*/
        const currentValueAsString = localStorage.getItem('startValue');
        currentValueAsString && setCounter(JSON.parse(currentValueAsString))
    }, [])

    const callBackMaxValue = (max: string) => {
        const maxValue = Number(max)
        setMaxValue(maxValue)
        setButtonIndicator(false)
    }
    const callBackStartInputValue = (start: string) => {
        const startValue = Number(start)
        setStartValue(startValue)
        setButtonIndicator(false)
    }
    const setValue = () => {
        setButtonIndicator(true)
        setCounter(startValue)
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }
    const setCounterHandler = (c: number) => {
        setCounter(c)
    }
    const noticeMessage = (start: number, max: number) => {
        let err: boolean
        if (max <= start) {
            err = true
        } else {
            err = start < 0;
        }

        return err
    }
    let error = noticeMessage(startValue, maxValue)

    return (
        <div className={s.container}>
            <Settings
                setValue={setValue}
                callBackMaxValue={callBackMaxValue}
                callBackStartValue={callBackStartInputValue}
                buttonIndicator={buttonIndicator}
                startValue={startValue}
                maxValue={maxValue}
                error={error}
            />
            <Counter
                counter={counter}
                maxValue={maxValue}
                startValue={startValue}
                setCounter={setCounterHandler}
                buttonIndicator={buttonIndicator}
                error={error}
            />
        </div>
    )
}

export default App;
