import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularExercice2Component } from './angular-exercice2.component';

describe('AngularExercice2Component', () => {
  let component: AngularExercice2Component;
  let fixture: ComponentFixture<AngularExercice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularExercice2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularExercice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
