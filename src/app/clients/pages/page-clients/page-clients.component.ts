import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/shared/models/client';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { ClientI } from 'src/app/shared/interfaces/client-i';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientsComponent implements OnInit {

  public headers: string[];
  public collection: Client[];
  public states = ClientState;
  public title: string;
  public subtitle: string;
  public addBtnText: string;
  public addBtnRoute: string;
  public addBtnFragment: string;

  constructor(
    private route: ActivatedRoute,
    private clientsService: ClientsService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data) => {
        this.title = data.title;
        this.subtitle = data.subtitle;
      }
    );

    // this.title = 'Clients';
    // this.subtitle = 'Tous les clients';

    this.headers = [
      'Nom',
      'Email',
      'State'
    ];

    this.addBtnText = 'Ajouter Client';
    // this.addBtnRoute = './';
    this.addBtnRoute = 'new';
    this.addBtnFragment = 'new';

    this.collection = this.clientsService.collection;
  }

  public updateState(item: ClientI, event) {
    this.clientsService.update(item, event.target.value);
  }
}
