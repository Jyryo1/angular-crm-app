import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {

  public title: string;
  public subtitle: string;

  constructor(
    private route: ActivatedRoute,
    private prestationsService: PrestationsService) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data) => {
        this.title = data.title;
        this.subtitle = data.subtitle;
      }
    );
  }

  private add(item) {
    this.prestationsService.add(new Prestation(item));
  }

}
