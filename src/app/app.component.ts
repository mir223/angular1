import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger, state, style, transition, animation, keyframes } from '@angular/animations';


@Component({
  selector: 'app-root',
  template: `
    <h1 [class.red-title]="isRedTitle">{{myObject.gender}}</h1>
    
    Property binding: sets databinding to the view
    <button [disabled]="buttonStatus" (mouseenter)="myEvent($event)" [ngClass]="buttonClasses">My Button</button>
    <div [style.background-color]="divBgColor">{{eventResult}}</div>
    <img src="{{angularLogo}}" [ngStyle]="ngLogo">
    <img [src]="angularLogo" [ngClass]="ngLogo">
    <img bind-src="angularLogo" [ngClass]="ngLogo">

    <div *ngIf='myVar; then tmpl1 else tmpl2'>Exists</div>
    <ng-template #tmpl1>Exists </ng-template>
    <ng-template #tmpl2>Is Empty or doesnt exists</ng-template>


  `,
  styles: [
    `
      h1 { text-decoration : underline}
      .red-title { color:red }
      .large-text { font-size : large}
    `
  ]
})
export class AppComponent  {
  angularLogo = "https://cdn.worldvectorlogo.com/logos/angular-icon.svg";
  eventResult:string =  "";
/**
 *
 */
  constructor(private dataService: DataService) {
  
  }

  ngOnInit(){
    this.eventResult = this.dataService.cars.join(', ');
  }

  ngLogo = {width: 'auto', height: '50px'}
  myObject = {
    gender : 'male',
    age: 33
  }
  myVar = 'qsd';
  buttonStatus = false;
  buttonClasses = {'red-title': true, 'large-text': true};
  divBgColor = 'lightblue';

  isRedTitle = false;

  myEvent = (e)=> this.eventResult+= JSON.stringify(e)+'<br>';
}
