import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  cars=['Porsche', 'Dacia'];

  myData(){
    return 'this is my data';
  }
}
