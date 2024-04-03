import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() { }


  dataEmployees = signal<any>({})
  
}
