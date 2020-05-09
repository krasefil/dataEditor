import DATA_LOADING from './editor';

let initialState = {
    id: 1,
    name: 'Igor',
    email: 'igor@mil.ru',
    config_bool: 1,
    timer_integer: 455,
    flags: 0,
    dateactivate: "future date",
    dateupdate: 'any date'
};
console.log(initialState);
export const editorReduser = (state = initialState, action) => {
    switch (action.type) {
        case DATA_LOADING:
            return { ...state, action }
        default:
            return state;

    }
}