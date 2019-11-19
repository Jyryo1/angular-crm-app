import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationI {
  id: string;
  typePresta: string;
  client: string;
  nbJours = 1;
  tjmHt = 600;
  tauxTva = 20;
  state = State.OPTION;
  comment: string;

  constructor(obj?: Partial<Prestation>) {
    // obj partial, to define only subset of properties.
    // Ex: let test = new Prestation({id='feojfozj'});
    if (obj) {
      // Copy all obj Properties to this
      Object.assign(this, obj);
    }
  }

  totalHt(): number {
    return this.nbJours * this.tjmHt;
  }

  totalTtc(tva?: number): number {
    if (tva) {
      if (tva <= 0) {
        return this.totalHt();
      }

      return this.totalHt() * (1 + tva / 100);
    }

    return this.totalHt() * (1 + this.tauxTva / 100);
  }
}
