//функция для сохранения объектов в память браузера
import {useEffect} from "react";

export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state)
    localStorage.setItem(key, stateAsString)
}

//функция для получения сохранённого объекта в памяти браузера:
export function restoreState<T>(key: string, defaultState: T) {
    let state = defaultState
    const stateAsString = localStorage.getItem(key)
    if (stateAsString !== null) state = JSON.parse(stateAsString) as T
    return state
}
/*

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
}*/
