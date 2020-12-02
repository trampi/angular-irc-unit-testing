import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor() { }

  async get(): Promise<string> {
    return 'cadabrax';
  }

}
