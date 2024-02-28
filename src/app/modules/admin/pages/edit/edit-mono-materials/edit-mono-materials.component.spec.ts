import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMonoMaterialsComponent } from './edit-mono-materials.component';

describe('EditMonoMaterialsComponent', () => {
  let component: EditMonoMaterialsComponent;
  let fixture: ComponentFixture<EditMonoMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMonoMaterialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditMonoMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
