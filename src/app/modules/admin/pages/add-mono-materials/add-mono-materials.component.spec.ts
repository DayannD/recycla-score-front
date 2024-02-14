import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMonoMaterialsComponent } from './add-mono-materials.component';

describe('AddMonoMaterialsComponent', () => {
  let component: AddMonoMaterialsComponent;
  let fixture: ComponentFixture<AddMonoMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMonoMaterialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMonoMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
