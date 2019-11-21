import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';

const modRoutes: Routes = [
  {
    path: '',
    component: PagePrestationsComponent,
    data: {title: 'Prestations', subtitle: 'Toutes les prestas'}
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(modRoutes)
  ]
})
export class PrestationsRoutingModule { }
