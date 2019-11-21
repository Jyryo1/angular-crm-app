import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {

  public title: string;
  public subtitle: string;

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data) => {
        this.title = data.title;
        this.subtitle = data.subtitle;
      }
    );
  }

}
