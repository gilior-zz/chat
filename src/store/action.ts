import {NgRedux} from '@angular-redux/store'
import {Injectable} from "@angular/core";
import {DataService} from '../app/services/data.service'
import {IAppState} from "./IAppState";
import {User} from "./User";

export const Update_User = 'user/Update';
export const Out_User = 'user/Out';
export const REQUEST_DATA_SUCCESS = 'data/REQUEST_SUCCESS';

@Injectable()
export class Action {
    constructor(private ngRedux: NgRedux<IAppState>, private dataService: DataService) {
    }

    getData() {
        this.dataService.loadMsgs()
            .subscribe(response => {
                this.ngRedux.dispatch({
                    type: REQUEST_DATA_SUCCESS,
                    data: response
                })
            })
    }

    setLoggedInUser(user: User) {
        this.ngRedux.dispatch({
            type: Update_User,
            user,
        })
    }

    signOutUser() {
        this.ngRedux.dispatch({
            type: Out_User
        })
    }
}