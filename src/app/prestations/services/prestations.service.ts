import { Injectable } from '@angular/core';
import { PrestationI } from 'src/app/shared/interfaces/prestation-i';
import { State } from 'src/app/shared/enums/state.enum';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Prestation } from 'src/app/shared/models/prestation';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private apiUrl = environment.apiUrl;
  private pCollection: Observable<any>;

  constructor(
    private http: HttpClient
  ) {
    // automatically use getter/setter (cf. magic keywords)
    // use pipe() to transform data
    this.collection = this.http.get<any[]>(`${this.apiUrl}/prestations`).pipe(
      // short version
      map(tab => tab.map(obj => new Prestation(obj)))
      // long version
      /* map(
        (data) => {
          return data.map(
            (obj) => {
              return new Prestation(obj);
            }
          );
        }
      ) */
    );
  }

  // magic keywords get/set create a fake property to use : collection.
  public get collection(): Observable<any[]> {
    return this.pCollection;
  }

  public set collection(collection: Observable<any[]>) {
    this.pCollection = collection;
  }

  public update(item: PrestationI, state: State) {
  }

  public add(item: PrestationI) {
  }
}
