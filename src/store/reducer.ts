import {IAppState} from "./IAppState";

import {REQUEST_DATA_SUCCESS, Update_User} from "./action";
import {userInfo} from "os";


function storeData(state, action): IAppState {
    const c = {...state, msgs: action.data};
    return <IAppState>c;
}


function updateUser(state, action): IAppState {

    const c = {...state, user: action};
    return <IAppState>c;


}


export function reducer(state = {}, action) {
    switch (action.type) {

        case REQUEST_DATA_SUCCESS:
            return storeData(state, action);
        case Update_User:
            return updateUser(state, action)
        default:
            return state;
    }
}


