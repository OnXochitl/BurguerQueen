import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastListComponent } from './breakfast-list.component';

describe('BreakfastListComponent', () => {
  let component: BreakfastListComponent;
  let fixture: ComponentFixture<BreakfastListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakfastListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakfastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
