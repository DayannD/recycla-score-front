import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonoMaterialFormComponent } from './mono-material-form.component';

describe('MonoMaterialFormComponent', () => {
  let component: MonoMaterialFormComponent;
  let fixture: ComponentFixture<MonoMaterialFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MonoMaterialFormComponent]
    });
    fixture = TestBed.createComponent(MonoMaterialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
