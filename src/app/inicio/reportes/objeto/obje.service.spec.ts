import { TestBed } from '@angular/core/testing';

import { ObjeService } from './obje.service';

describe('ObjeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObjeService = TestBed.get(ObjeService);
    expect(service).toBeTruthy();
  });
});
