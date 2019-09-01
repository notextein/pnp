/*
 * define all action types here
 * we do this verbosely so that all actions are intentional
 */
export const SET_USERNAME = 'SET_USERNAME';
export const SET_USER = 'SET_USER';
export const SET_USER_TOKEN = 'SET_USER_TOKEN';




/*
 * define all action creators here
 */
export function setUserName(username) {
    return { type: SET_USERNAME, username };
};

export function setUser(user) {
    return { type: SET_USER, user };
};

export function setUserToken(token) {
    return { type: SET_USER_TOKEN, token };
};
