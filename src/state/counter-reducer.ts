import {Status} from "../enums/status";

export type ActionsType =
    ReturnType<typeof increaseValueAC>
    | ReturnType<typeof resetValueAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setSettingAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setCounterAC>

const initialState = {
    counter: 0,
    maxValue: 5,
    startValue: 0,
    //status: 'setting' as StatusType
    status: Status.SET as Status
}
export type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "INCREASE-VALUE":
            return {...state, counter: state.counter + 1}
        case "RESET-VALUE":
            return {...state, counter: action.startValue}
         case "SET-START-VALUE":
            return {...state, startValue: action.startValue}
        case "SET-MAX-VALUE":
            return {...state, maxValue: action.maxValue}
        case "SET-SETTING":
            return {...state, status: Status.SET}
        case "SET-ERROR":
            return {...state, status: Status.ERROR}
        case "SET-COUNTER":
            return {...state, status: Status.COUNTER}
        default:
            return state
    }
}
export const increaseValueAC = () => ({type: "INCREASE-VALUE"} as const)
export const resetValueAC = (startValue: number) => ({type: "RESET-VALUE", startValue: startValue} as const)
export const setMaxValueAC = (newValue: number) => ({type: "SET-MAX-VALUE", maxValue: newValue} as const)
export const setStartValueAC = (newValue: number) => ({type: "SET-START-VALUE", startValue: newValue} as const)
export const setSettingAC = () => ({type: "SET-SETTING"} as const)
export const setErrorAC = () => ({type: "SET-ERROR"} as const)
export const setCounterAC = () => ({type: "SET-COUNTER"} as const)