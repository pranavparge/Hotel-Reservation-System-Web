import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLogoutComponent } from './staff-logout.component';

describe('StaffLogoutComponent', () => {
  let component: StaffLogoutComponent;
  let fixture: ComponentFixture<StaffLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffLogoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
