import React, {useState} from "react";
import style from "./Counter.module.css"
import {Button} from "./Button";


function App() {
  let [counter, setCounter] = useState(0)

  const IncButton = () => {
    setCounter(counter + 1)
  }

  const ResetButton = () => {
    setCounter(0)
  }


  return (
      <div className={style.wrapper}>
        <h2>{counter}</h2>
        <div className={style.button}>
          <Button disabled={counter > 4} callback={IncButton} name={'inc'}/>
          <Button disabled={counter === 0} callback={ResetButton} name={'reset'}/>
        </div>
      </div>
  )
}

export default App;
