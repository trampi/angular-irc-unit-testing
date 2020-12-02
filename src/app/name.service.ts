import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor() { }

  get(): Observable<string> {
    return of('cadabrax');
  }

}