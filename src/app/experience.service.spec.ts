import { TestBed } from '@angular/core/testing';

import { ExpierenceService } from './experience.service';

describe('ExpierenceService', () => {
  let service: ExpierenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpierenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
