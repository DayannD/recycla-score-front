import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosItemComponent } from './infos-item.component';

describe('InfosItemComponent', () => {
  let component: InfosItemComponent;
  let fixture: ComponentFixture<InfosItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfosItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
