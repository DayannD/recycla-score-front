import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMateriauComponent } from './edit-materiau.component';

describe('EditMateriauComponent', () => {
  let component: EditMateriauComponent;
  let fixture: ComponentFixture<EditMateriauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMateriauComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditMateriauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
