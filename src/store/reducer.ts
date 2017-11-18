import {IAppState} from "./IAppState";

import {Out_User, REQUEST_DATA_SUCCESS, Update_User} from "./action";


function storeData(state, action): IAppState {
    const c = {...state, msgs: action.data};
    return <IAppState>c;
}


function updateUser(state, action): IAppState {
    const c = {...state, user: action.user, isLoggedIn: true};
    return <IAppState>c;
}

function logOutUser(state, action) {
    const c = {...state, user: null, isLoggedIn: false,msgs:null};
    return <IAppState>c;
}

function  returnState(state){
    return state;
}


export function reducer(state: IAppState = {user: null, msgs: null, isLoggedIn: false}, action) {
    switch (action.type) {

        case REQUEST_DATA_SUCCESS:
            return storeData(state, action);
        case Update_User:
            return updateUser(state, action)
        case Out_User:
            return logOutUser(state, action)
        default:
            return state;
    }
}


