import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';

const modRoutes: Routes = [
  {
    path: '',
    component: PagePrestationsComponent,
    data: {title: 'Prestations', subtitle: 'Toutes les prestas'}
  },
  {
    path: 'new',
    component: PageAddPrestationComponent,
    data: {title: 'Prestations', subtitle: 'Ajouter une Prestation'}
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(modRoutes)
  ]
})
export class PrestationsRoutingModule { }
