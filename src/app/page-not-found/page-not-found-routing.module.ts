import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';

const modRoutes: Routes = [
  { path: '', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(modRoutes)
  ]
})
export class PageNotFoundRoutingModule { }
