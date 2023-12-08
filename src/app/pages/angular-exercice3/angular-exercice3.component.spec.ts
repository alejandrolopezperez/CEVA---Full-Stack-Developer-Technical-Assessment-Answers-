import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularExercice3Component } from './angular-exercice3.component';

describe('AngularExercice3Component', () => {
  let component: AngularExercice3Component;
  let fixture: ComponentFixture<AngularExercice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularExercice3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularExercice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
