import { TestBed } from '@angular/core/testing';

import { Commercial } from './commercial';

describe('Commercial', () => {
  let service: Commercial;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Commercial);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
