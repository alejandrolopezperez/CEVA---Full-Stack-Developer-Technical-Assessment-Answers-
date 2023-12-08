import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MongodbExcersiceComponent } from './mongodb-excersice.component';

describe('MongodbExcersiceComponent', () => {
  let component: MongodbExcersiceComponent;
  let fixture: ComponentFixture<MongodbExcersiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MongodbExcersiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MongodbExcersiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
