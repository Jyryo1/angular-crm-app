import { Directive, Input, HostBinding, OnChanges } from '@angular/core';
import { ClientState } from '../enums/client-state.enum';

@Directive({
  selector: '[appClientState]'
})
export class ClientStateDirective implements OnChanges {

  @Input() appClientState: ClientState;
  @HostBinding('class') hostClass: string;

  constructor() {
  }

  ngOnChanges(): void {
    // console
    this.hostClass = this.formatClass(this.appClientState);
  }

  private formatClass(state: any): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }
}
