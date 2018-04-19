import { TestBed, inject } from '@angular/core/testing';

import { CrudsService } from './cruds.service';

describe('CrudsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudsService]
    });
  });

  it('should be created', inject([CrudsService], (service: CrudsService) => {
    expect(service).toBeTruthy();
  }));
});
