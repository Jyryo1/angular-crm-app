import { Injectable } from '@angular/core';
import { ClientI } from 'src/app/shared/interfaces/client-i';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { fakeClients } from './mock-clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private pCollection: ClientI[];

  constructor() {
    this.collection = fakeClients;
  }

  public get collection(): ClientI[] {
    return this.pCollection;
  }

  public set collection(collection: ClientI[]) {
    this.pCollection = collection;
  }

  public update(item: ClientI, state: ClientState) {
    item.state = state;
  }

  public add(item: ClientI) {
    this.collection.push(item);
  }
}
