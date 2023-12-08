import { Component } from '@angular/core';

@Component({
  selector: 'app-test-exercice',
  templateUrl: './test-exercice.component.html',
  styleUrls: ['./test-exercice.component.css'],
})
export class TestExerciceComponent {
  getCapitalizeFirstWord(name: string): string {
    if (name == null) {
      throw new Error('Failed to capitalize first word with null');
    }
    if (!name) {
      return name;
    }
    return name
      .split(' ')
      .map((n) =>
        n.length > 1
          ? n.substring(0, 1).toUpperCase() + n.substring(1).toLowerCase()
          : n
      )
      .join(' ');
  }
}
