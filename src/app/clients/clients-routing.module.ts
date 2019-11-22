import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';

const modRoutes: Routes = [
  {
    path: '',
    component: PageClientsComponent,
    data: {title: 'Clients', subtitle: 'Tous les clients'}
  },
  {
    path: 'new',
    component: PageAddClientComponent,
    data: {title: 'Clients', subtitle: 'Ajouter un client'}
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(modRoutes)
  ]
})
export class ClientsRoutingModule { }
