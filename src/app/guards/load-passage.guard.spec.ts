import { TestBed } from '@angular/core/testing';

import { LoadPassageGuard } from './load-passage.guard';

describe('LoadPassageGuard', () => {
  let guard: LoadPassageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoadPassageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
