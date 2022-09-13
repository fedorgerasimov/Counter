import React, {ChangeEvent, memo} from 'react';
import s from './UniversalInput.module.css'

type UniversalInputPropsType = {
    callback: (value: number) => void
    error: boolean
    value: number
}

export const UniversalInput: React.FC<UniversalInputPropsType> = memo(({callback, error, value}) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) =>
        callback(event.currentTarget.valueAsNumber ? event.currentTarget.valueAsNumber : 0)

    const inputClassName = error ? s.error : s.input

    return <div>
        <input className={inputClassName}
               onChange={onChangeInputHandler }
               type="number"
               value={value.toFixed()}
        />
    </div>
})