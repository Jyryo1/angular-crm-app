import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-form-presta',
  templateUrl: './form-presta.component.html',
  styleUrls: ['./form-presta.component.scss']
})
export class FormPrestaComponent implements OnInit {
  public form: FormGroup;
  public init = new Prestation();
  public states = State;
  @Output() data: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      typePresta: [
        this.init.typePresta,
        Validators.required
      ],
      client: [
        this.init.client,
        Validators.compose([
          Validators.required,
          Validators.minLength(2)
        ])
      ],
      nbJours: [this.init.nbJours],
      tjmHt: [this.init.tjmHt],
      tauxTva: [this.init.tauxTva],
      state: [this.init.state],
      comment: [this.init.comment]
    });
  }

  private onSubmit() {
    console.log(this.form.value);
    this.data.emit(this.form.value);
  }
}
