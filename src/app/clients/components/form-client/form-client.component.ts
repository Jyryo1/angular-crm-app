import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientState } from 'src/app/shared/enums/client-state.enum';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  public form: FormGroup;
  public init = new Client();
  public states = ClientState;
  @Output() data: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      name: [
        this.init.name,
        Validators.required
      ],
      email: [
        this.init.email,
        Validators.required
      ],
      state: [this.init.state]
    });
  }

  private onSubmit() {
    this.data.emit(this.form.value);
  }
}
