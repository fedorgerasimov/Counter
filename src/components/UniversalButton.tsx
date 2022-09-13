import React, {memo} from "react";
import s from "./UniversalButton.module.css"

type UniversalButtonPropsType = {
    name: string
    callback: () => void
    disabled: boolean
}

export const UniversalButton = memo(({callback, disabled, name }: UniversalButtonPropsType) => {
  return (
    <button className={s.button} onClick={callback} disabled={disabled}>
      {name}
    </button>
  )
})