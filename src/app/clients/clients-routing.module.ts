import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';

const modRoutes: Routes = [
  { path: '', component: PageClientsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(modRoutes)
  ]
})
export class ClientsRoutingModule { }
