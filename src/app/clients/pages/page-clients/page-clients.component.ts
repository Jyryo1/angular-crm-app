import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/shared/models/client';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { ClientI } from 'src/app/shared/interfaces/client-i';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientsComponent implements OnInit {

  public headers: string[];
  public collection: Client[];
  public states = ClientState;

  constructor(private clientsService: ClientsService) {}

  ngOnInit() {
    this.headers = [
      'Nom',
      'Email',
      'State'
    ];

    this.collection = this.clientsService.collection;
  }

  public updateState(item: ClientI, event) {
    this.clientsService.update(item, event.target.value);
  }
}
