import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';
import { PrestationI } from 'src/app/shared/interfaces/prestation-i';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
  public collection: Prestation[];
  public headers: string[];
  public states = State;

  constructor(private prestationsService: PrestationsService) { }

  ngOnInit() {
    this.headers = [
      'Type',
      'Client',
      'Nb Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State'
    ];
    this.collection = this.prestationsService.collection;
    // console.log('DEBUG', this.collection);
  }

  public updateState(item: PrestationI, event) {
    // console.log('DEBUG', item, event);
    this.prestationsService.update(item, event.target.value);
  }

}
