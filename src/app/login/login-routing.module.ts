import { NgModule } from '@angular/core';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { Routes, RouterModule } from '@angular/router';

const modRoutes: Routes = [
  { path: 'login', component: PageLoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(modRoutes)
  ]
})
export class LoginRoutingModule { }
