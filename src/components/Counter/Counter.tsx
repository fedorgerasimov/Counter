import s from "./Counter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {DisplayCounter} from "../DisplayCounter/DisplayCounter";
import {increaseValueAC, resetValueAC} from "../../state/counter-reducer";
import {UniversalButton} from "../UniversalButton";
import {Status} from "../../enums/status";


export const Counter = () => {

    const counter = useSelector<AppRootStateType, number>(state => state.counter.counter)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const status = useSelector<AppRootStateType, Status>(state => state.counter.status)
    const dispatch = useDispatch()

    const resetButton = () => dispatch(resetValueAC(startValue))
    const increaseButton = () => counter < maxValue && dispatch(increaseValueAC())

    return (
        <div className={s.counter}>
            <div className={s.display}>
                <DisplayCounter counter={counter} maxValue={maxValue} status={status}/>
            </div>
            <div className={s.buttonArea}>
                <div>
                    <UniversalButton name={'INC'}
                                     callback={increaseButton}
                                     disabled={counter === maxValue || status === Status.ERROR || status === Status.SET}/>
                                     {/*disabled={counter === maxValue || status !== Status.COUNTER*/}
                </div>
                <div>
                    <UniversalButton name={'RESET'}
                                     callback={resetButton}
                                     disabled={counter === startValue || status !== Status.COUNTER}/>
                </div>
            </div>
        </div>
    )
}
