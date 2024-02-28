import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { materiauResolver } from './materiau.resolver';

describe('materiauResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => materiauResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
