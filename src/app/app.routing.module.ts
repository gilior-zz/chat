import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth-guard.service";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";



const routes: Routes = [
  {
    path: 'main',
    canActivate: [AuthGuard],
    component: MainComponent
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'

  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AdminRoutingModule { }