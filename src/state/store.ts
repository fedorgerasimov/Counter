import {combineReducers, legacy_createStore, legacy_createStore as createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "./localStorage";


const rootReducer = combineReducers({
    counter: counterReducer,
})


//legacy_createStore as createStore
export const store = legacy_createStore(rootReducer, loadState())

store.subscribe(() => saveState(store.getState()))
/*store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})*/

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;

