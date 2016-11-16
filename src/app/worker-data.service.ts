import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkerDataService {

  constructor(private http: Http) { }

  getArchetypes() : Observable<ICharacterEntry[]> {
    return this.http.get('/api/archetypes')
        .map((res: Response) => res.json());
  }
}

export class ICharacterEntry {
  'name': string;
  'birthday': string;
  'weight': string;
  'height': number;
  'strength': number;
  'dexterity': number;
  'hair color': string;
  'race': string;
  'sex': string;
  'statPref': string;
}
