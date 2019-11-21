import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
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
    this.router.navigate(['prestations']); // navigate with full path
    this.router.navigate(['../'], {relativeTo: this.route}); // navigate relative to the current route
  }

}
