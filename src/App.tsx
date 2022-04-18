import React, {useEffect, useState} from "react";
import s from './App.module.css'
import {Button} from "./components/Button/Button";
import "./components/Button/Button.module.css"
import DisplayValue from "./components/DisplayValue/DisplayValue";
import displayValue from "./components/DisplayValue/DisplayValue";


function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    let [error, setError] = useState<string>('')

    const increment = () => {
        setStartValue(startValue + 1)
    }

    const reset = () => {
        setStartValue(0)
    }

    const inputStarValue = (value: number) => {
        setStartValue(value)
        if (startValue > value || startValue < 0) {
            error = 'incorrect value'
            setError(error)
        } else setError('enter values and press "set"')
    }

    useEffect( ()=> {
        let valueAsString = localStorage.getItem('startValue')  // вначале получаем значение и присваиваем переменной
        if (valueAsString) {          //делаем проверку на NULL, затем нам нужно в useState отправить то что получили, для это делаем преобразование
            let newValue = JSON.parse(valueAsString)   //JSON.parse  преобразовывает строку в объект
            setStartValue(newValue)
        }
    }, [])

    useEffect( ()=> {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])

    useEffect( ()=> {
        let valueAsString = localStorage.getItem('maxValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setStartValue(newValue)
        }
    }, [])

    useEffect( ()=> {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])

    const onClickStart = () => {
        setStartValue(startValue+1)
    }
    const onClickMax = () => {
        setMaxValue(maxValue+1)
    }


    return (
        <div className={s.wrapper}>
            <div className={s.Counter}>
                <DisplayValue value={startValue}/>
                <div className={s.buttons_container}>
                    <Button disabled={startValue > 4} callback={increment} name={'INC'}/>
                    <Button disabled={startValue === 0} callback={reset} name={'RESET'}/>
                </div>
            </div>
            <div className={s.containerInput}>
                <div>{startValue}</div>
                <button onClick={onClickStart}>start</button>
                <div>{maxValue}</div>
                <button onClick={onClickMax}>max</button>
            </div>
        </div>
    )
}

export default App;
