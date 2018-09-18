import { TestBed } from '@angular/core/testing';

import { RolinService } from './rolin.service';

describe('RolinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RolinService = TestBed.get(RolinService);
    expect(service).toBeTruthy();
  });
});
