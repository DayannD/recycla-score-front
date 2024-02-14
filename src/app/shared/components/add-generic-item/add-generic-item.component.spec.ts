import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGenericItemComponent } from './add-generic-item.component';

describe('AddGenericItemComponent', () => {
  let component: AddGenericItemComponent;
  let fixture: ComponentFixture<AddGenericItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddGenericItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddGenericItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
