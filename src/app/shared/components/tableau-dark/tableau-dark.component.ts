import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tableau-dark',
  templateUrl: './tableau-dark.component.html',
  styleUrls: ['./tableau-dark.component.scss'],
  encapsulation: ViewEncapsulation.None // remove scss Encapsulation
})
export class TableauDarkComponent implements OnInit {
  @Input() headers: string[];

  constructor() { }

  ngOnInit() {
  }

}
