import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExerciceComponent } from './test-exercice.component';

describe('TestExerciceComponent', () => {
  let component: TestExerciceComponent;
  let fixture: ComponentFixture<TestExerciceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestExerciceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('1. test', async function () {
    // Arrange
    const name = 'hello world';

    // Act
    const result = component.getCapitalizeFirstWord(name);

    // Assert
    expect(result).toBe('Hello World');
  });
});
