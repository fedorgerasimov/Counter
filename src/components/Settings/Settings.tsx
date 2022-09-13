import React, {useEffect} from "react";
import s from "./Settings.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {
    resetValueAC,
    setCounterAC,
    setErrorAC,
    setMaxValueAC,
    setSettingAC,
    setStartValueAC
} from "../../state/counter-reducer";
import {UniversalInput} from "../UniversalInput";
import {UniversalButton} from "../UniversalButton";
import {Status} from "../../enums/status";
import {Counter} from "../../enums/counter";

export const Settings = () => {

    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const status = useSelector<AppRootStateType, Status>(state => state.counter.status)
    const dispatch = useDispatch()

    const changeStartValue = (value: number) => {
        if (value > Counter.MAX_VALUE) {
            dispatch(setStartValueAC(Counter.MAX_VALUE))
        } else {
            dispatch(setStartValueAC(value))
        }
        dispatch(setSettingAC())
        //status !== Status.SET && dispatch(setSettingAC())
    }

    const changeMaxValue = (value: number) => {
        if (value > Counter.MAX_VALUE) {
            dispatch(setMaxValueAC(Counter.MAX_VALUE))
        } else {
            dispatch(setMaxValueAC(value))
        }
        dispatch(setSettingAC())
        //status !== Status.SET && dispatch(setSettingAC())
    }

    const onChangeButtonHandler = () => {
        dispatch(setCounterAC())
        dispatch(resetValueAC(startValue))
    }

    useEffect(() => {
        ((maxValue <= startValue || startValue < 0 || maxValue <= 0) && status !== Status.ERROR) && dispatch(setErrorAC())
    }, [status, maxValue, startValue, dispatch])

    return (
        <div className={s.container}>
            <div className={s.blockOfSettings}>
                <span>max value:</span>
                <div className={s.input}>
                    <UniversalInput value={maxValue}
                                    callback={changeMaxValue}
                                    error={maxValue <= startValue || maxValue <= 0}
                    />
                </div>
                <span>start value:</span>
                <div className={s.input}>
                    <UniversalInput value={startValue}
                                    callback={changeStartValue}
                                    error={status === Status.ERROR}
                    />
                </div>
            </div>
            <div className={s.buttonArea}>
                <div>
                    <UniversalButton name={'SET'}
                                     callback={onChangeButtonHandler}
                                     disabled={status !== Status.SET}/>
                </div>
            </div>
        </div>
    )
}

 // let error: any;
    // if (maxValue <= startValue) {
    //     error = s.settingsError;
    // } else {
    //     error = s.settings;
    // }
    //const error = maxValue <= startValue ? s.settingsError : s.settings
    //  if (maxValue <= startValue || startValue < Counter.MIN_VALUE) {
    //dispatch(setErrorAC())
  //}

 /*return (
        <div className={s.container}>
            <div className={s.settings}>
                <div className={error}>
                    <span>max value:</span>
                    <div className={s.input}>
                        <UniversalInput value={maxValue}
                                        callback={changeMaxValue}
                                         error={status === Status.ERROR}
                        />
                    </div>
                </div>
            </div>
            <div className={s.settings}>
                <div className={error}>
                    <span>start value:</span>
                    <div className={s.input}>
                        <UniversalInput value={startValue}
                                        callback={changeStartValue}
                                         error={status === Status.ERROR}
                        />
                    </div>
                </div>
            </div>
            <div className={s.buttonArea}>
                <div>
                    <UniversalButton name={'SET'}
                                     callback={onChangeButtonHandler}
                                     disabled={status === Status.SET}/>
                </div>
            </div>
        </div>
    )*/