import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';
import { PrestationI } from 'src/app/shared/interfaces/prestation-i';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
  public collection: Prestation[];
  public headers: string[];
  public states = State;
  public title: string;
  public subtitle: string;
  public addBtnText: string;
  public addBtnRoute: string;
  public addBtnFragment: string;

  constructor(
    private route: ActivatedRoute,
    private prestationsService: PrestationsService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data) => {
        this.title = data.title;
        this.subtitle = data.subtitle;
      }
    );

    // this.title = 'Prestations';
    // this.subtitle = 'Toutes les prestas';
    this.headers = [
      'Type',
      'Client',
      'Nb Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State'
    ];
    this.addBtnText = 'Ajouter Presta';
    // this.addBtnRoute = './';
    this.addBtnRoute = 'new';
    // this.addBtnFragment = 'new';

    // this.collection = this.prestationsService.collection;
    this.prestationsService.collection.subscribe(
      (data) => {
        this.collection = data;
      },
      (err) => {
        console.log(err);
      }
    );

    // console.log('DEBUG', this.collection);
  }

  public updateState(item: PrestationI, event) {
    // console.log('DEBUG', item, event);
    this.prestationsService.update(item, event.target.value);
  }

}
