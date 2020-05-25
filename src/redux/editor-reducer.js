const DATA_LOADING = 'DATA_LOADING';
const SET_USERS = 'SET_USERS';

let initialState = {
    
};


const EditorReduser = (state = initialState, action) => {
    switch (action.type) {
        case DATA_LOADING:
            return {
                ...state,
                users: [...state.users]
            };
        case SET_USERS: {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state;

    }
}

export const dataLoadingAC = () => ({ type: DATA_LOADING });
export const setUsercAC = (users) => ({ type: SET_USERS, users })


export default EditorReduser;