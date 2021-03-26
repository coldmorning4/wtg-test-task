import { createStore } from 'redux';
import users  from '../redusers/reducer'

const saveToLocalStorage = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("key", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

const loadFromLocalStorage = () =>{
    try {
        const serialisedState = localStorage.getItem("key");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}
const store = createStore(users, loadFromLocalStorage());
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
