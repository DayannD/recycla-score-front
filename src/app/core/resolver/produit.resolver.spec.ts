import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { produitResolver } from './produit.resolver';
import { Observable } from "rxjs";
import { InfosProduit } from "../models/infos-produit/infos-produit";

describe('produitResolver', () => {
  const executeResolver: ResolveFn<Observable<InfosProduit>> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => produitResolver(...resolverParameters));
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
