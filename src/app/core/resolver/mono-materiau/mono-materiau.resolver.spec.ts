import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { monoMateriauResolver } from './mono-materiau.resolver';

describe('monoMateriauResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => monoMateriauResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
