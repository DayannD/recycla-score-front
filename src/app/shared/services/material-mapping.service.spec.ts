import { TestBed } from '@angular/core/testing';

import { MaterialMappingService } from './material-mapping.service';

describe('MaterialMappingServiceService', () => {
  let service: MaterialMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
