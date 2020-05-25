import { createStore, combineReducers } from "redux";
import {EditorReduser} from './editor-reducer';

let reducers = combineReducers({
    dataPage: EditorReduser,
});

let store = createStore(reducers);

export default store;