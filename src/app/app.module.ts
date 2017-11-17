import { BrowserModule } from '@angular/platform-browser';
import { APP_ID, Inject, NgModule, PLATFORM_ID } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatDialogModule} from '@angular/material';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { isPlatformBrowser, APP_BASE_HREF } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import { AuthGuard } from './guards/auth-guard.service';
import {LoginDialogComponent} from "./login.dialog/login.dialog.component";



@NgModule({
    declarations: [
        AppComponent,MainComponent, LoginDialogComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'chat-app' }),
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        HttpClientModule,
        AdminRoutingModule,
        RouterModule,
        MatDialogModule
    ],
    providers: [DataService,AuthGuard],
       entryComponents:[
           LoginDialogComponent
       ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        @Inject(APP_ID) private appId: string) {
        const platform = isPlatformBrowser(platformId) ?
            'on the server' : 'in the browser';
        console.log(`Running ${platform} with appId=${appId}`);
    }
}
