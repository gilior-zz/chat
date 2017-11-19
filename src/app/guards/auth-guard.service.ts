import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

import {transformMenu} from '@angular/material/menu/typings/menu-animations';
import {MatDialog, MatDialogRef} from "@angular/material";
import {LoginDialogComponent} from "../login.dialog/login.dialog.component";

import {NgRedux, select} from "@angular-redux/store";
import {IAppState} from "../../store/IAppState";
import {Action} from "../../store/action";
import {User} from "../../store/User";
import {Observable} from "rxjs/Observable";


@Injectable()
export class AuthGuard implements CanActivate {
    @select('isLoggedIn') isLoggedIn$: Observable<boolean>;
    isLoggedIn: boolean = false;
    goTo: string;
    showLogin: boolean = false;
    private dialogRef: MatDialogRef<LoginDialogComponent>;

    constructor(private router: Router, private activatedRoute: ActivatedRoute, public dialog: MatDialog, private ngRedux: NgRedux<IAppState>,
                private action: Action) {
        this.isLoggedIn$.subscribe(i => this.isLoggedIn = i)
    }

    goToUrl(url: string) {
        this.router.navigate([url])
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('AuthGuard#canActivate called');
        if (this.isLoggedIn) return true;
        this.goTo = state.url;
        this.showLogin = true;
        this.dialogRef = this.dialog.open(LoginDialogComponent,{disableClose:true});

        this.dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    onLoginSuccess(user: User) {
        this.dialogRef.close();
        this.action.getData();
        this.action.setLoggedInUser(user);
        this.goToUrl(this.goTo);
    }

    onSignOut() {
        this.action.signOutUser();
    }
}