import { ClientI } from '../interfaces/client-i';
import { ClientState } from '../enums/client-state.enum';

export class Client implements ClientI {
  id: string;
  name: string;
  email: string;
  state = ClientState.ACTIF;

  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
