import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestations } from './mock-prestations';
import { PrestationI } from 'src/app/shared/interfaces/prestation-i';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private pCollection: PrestationI[];

  constructor() {
    // automatically use getter/setter (cf. magic keywords)
    this.collection = fakePrestations;
  }

  // magic keywords get/set create a fake property to use : collection.
  public get collection(): PrestationI[] {
    return this.pCollection;
  }

  public set collection(collection: PrestationI[]) {
    this.pCollection = collection;
  }
}
