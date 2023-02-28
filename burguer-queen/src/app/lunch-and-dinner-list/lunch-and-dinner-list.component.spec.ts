import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchAndDinnerListComponent } from './lunch-and-dinner-list.component';

describe('LunchAndDinnerListComponent', () => {
  let component: LunchAndDinnerListComponent;
  let fixture: ComponentFixture<LunchAndDinnerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LunchAndDinnerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LunchAndDinnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
