import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMonoMaterialComponent } from './list-mono-material.component';

describe('ProduitComponent', () => {
  let component: ListMonoMaterialComponent;
  let fixture: ComponentFixture<ListMonoMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMonoMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMonoMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
