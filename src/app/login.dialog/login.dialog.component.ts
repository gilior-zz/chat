import {Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {log} from "util";
import {AuthGuard} from "../guards/auth-guard.service";
import {User} from "../../store/User";
import {Action, Store} from "redux";
import {NgRedux, select} from "@angular-redux/store";
import {IAppState} from "../../store/IAppState";
import {Observable} from "rxjs/Observable";

declare var gapi

@Component({
    selector: 'app-login-dialog',
    templateUrl: './login.dialog.component.html',
    styleUrls: ['./login.dialog.component.scss'],

})
export class LoginDialogComponent implements OnInit, OnDestroy {
    ngOnDestroy(): void {
    }

    @select('isLoggedIn') isLoggedIn$: Observable<boolean>;
    @select('user') user$: Observable<User>;
    isLoggedIn: boolean = false;
    user: User;

    constructor(private authGuard: AuthGuard) {

        this.user$.subscribe(i=>this.user=i);
        this.isLoggedIn$.subscribe(i =>
        {
            this.isLoggedIn = i;
            if (!this.isLoggedIn) this.btnText = 'Sign in with Google';
            else return this.btnText = `Hello ${(this.user&&this.user.fullName)||''},sign out`;
        }
        )

    }


    ngOnInit() {



    }

    signIn() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signIn().then((res) => {
            const user: User = {
                Email: res.getBasicProfile().getEmail(),
                familyName: res.getBasicProfile().getFamilyName(),
                givenName: res.getBasicProfile().getGivenName(),
                imageUrl: res.getBasicProfile().getImageUrl(),
                fullName: res.getBasicProfile().getName(),
            }
            this.authGuard.onLoginSuccess(user);
        });
    }

    changeState() {
        if (this.isLoggedIn){
            this.signOut();
            location.reload();
        }
        else this.signIn();
    }

    btnText: string;

    get BtnText(): string {
        return this.btnText;
    }


    signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
            this.authGuard.onSignOut();
        });
    }

}
