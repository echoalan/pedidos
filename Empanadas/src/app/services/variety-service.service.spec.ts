import { TestBed } from '@angular/core/testing';

import { VarietyServiceService } from './variety-service.service';

describe('VarietyServiceService', () => {
  let service: VarietyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VarietyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
