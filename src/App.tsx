import React, {useState} from "react";
import s from './App.module.css'
import {Button} from "./components/Button/Button";
import "./components/Button/Button.module.css"
import DisplayValue from "./components/DisplayValue/DisplayValue";


function App() {
  const [value, setValue] = useState(0)

  const Increment = () => {
    setValue(value + 1)
  }

  const Reset = () => {
    setValue(0)
  }


  return (
      <div className={s.container}>
        <DisplayValue value={value}/>
        <div className={s.buttons_container}>
          <Button disabled={value > 4} callback={Increment} name={'INC'}/>
          <Button disabled={value === 0} callback={Reset} name={'RESET'}/>
        </div>

      </div>
  )
}

export default App;
