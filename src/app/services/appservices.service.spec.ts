import { TestBed } from '@angular/core/testing';

import { AppservicesService } from './appservices.service';

describe('AppservicesService', () => {
  let service: AppservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
