import { TestBed } from '@angular/core/testing';

import { MonoMaterialService } from './mono-material.service';

describe('MonoMaterialService', () => {
  let service: MonoMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonoMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
