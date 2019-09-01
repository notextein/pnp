
import {
    SET_USERNAME,
    SET_USER_TOKEN
} from 'ducks/actions';

const initialState = {
    username: 'root',
    tokens: {}
};


export function user(state = initialState, action) {
    switch (action.type) {
        case SET_USERNAME:
            return { 
                ...state,
                username: action.username
            }
        case SET_USER_TOKEN:
            return { 
                ...state,
                tokens: action.token
            };
            
        default:
            return state;
    }
};


