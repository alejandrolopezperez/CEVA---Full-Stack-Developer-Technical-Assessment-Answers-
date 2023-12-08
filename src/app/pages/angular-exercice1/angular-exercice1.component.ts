import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-angular-exercice1',
  templateUrl: './angular-exercice1.component.html',
  styleUrls: ['./angular-exercice1.component.css'],
})
export class AngularExercice1Component {
  @Input() users: { name: string }[] = [
    {
      name: 'alex',
    },
    {
      name: 'luis',
    },
    {
      name: 'kevin',
    },
  ];

  constructor() {}

  getCapitalizeFirstWord(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}
