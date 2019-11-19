import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';

const modRoutes: Routes = [
  { path: 'prestations', component: PagePrestationsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(modRoutes)
  ]
})
export class PrestationsRoutingModule { }
