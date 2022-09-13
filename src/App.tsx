import s from './App.module.css'
import {Settings} from "./components/Settings/Settings";
import {Counter} from "./components/Counter/Counter";


function App() {

    return (
        <div className={s.container}>
            <Settings/>
            <Counter/>
        </div>
    )
}

export default App;
