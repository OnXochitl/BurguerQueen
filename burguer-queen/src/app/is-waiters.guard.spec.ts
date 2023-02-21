import { TestBed } from '@angular/core/testing';

import { IsWaitersGuard } from './is-waiters.guard';

describe('IsWaitersGuard', () => {
  let guard: IsWaitersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsWaitersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
