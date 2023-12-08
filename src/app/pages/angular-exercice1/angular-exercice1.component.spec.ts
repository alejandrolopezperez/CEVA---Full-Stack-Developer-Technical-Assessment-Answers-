import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularExercice1Component } from './angular-exercice1.component';

describe('AngularExercice1Component', () => {
  let component: AngularExercice1Component;
  let fixture: ComponentFixture<AngularExercice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularExercice1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularExercice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
