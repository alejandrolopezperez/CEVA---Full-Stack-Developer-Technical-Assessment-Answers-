import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodejsExerciseComponent } from './nodejs-exercise.component';

describe('NodejsExerciseComponent', () => {
  let component: NodejsExerciseComponent;
  let fixture: ComponentFixture<NodejsExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodejsExerciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodejsExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
