import { createStore, combineReducers } from "redux";
import editorReduser from './reducers';
let reducers = combineReducers({
    datas: editorReduser,
});

let store = createStore(reducers);

export default store;