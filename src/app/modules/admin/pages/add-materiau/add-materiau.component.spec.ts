import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMateriauComponent } from './add-materiau.component';

describe('AddMateriauComponent', () => {
  let component: AddMateriauComponent;
  let fixture: ComponentFixture<AddMateriauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMateriauComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMateriauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
