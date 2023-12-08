import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostrapExerciceComponent } from './boostrap-exercice.component';

describe('BoostrapExerciseComponent', () => {
  let component: BoostrapExerciceComponent;
  let fixture: ComponentFixture<BoostrapExerciceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoostrapExerciceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoostrapExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
