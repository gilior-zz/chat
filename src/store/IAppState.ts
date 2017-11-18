import {Message} from "./Message";
import {User} from "./User";

export interface IAppState {
    msgs: Message[];
    user: User,
    isLoggedIn:boolean;
}

