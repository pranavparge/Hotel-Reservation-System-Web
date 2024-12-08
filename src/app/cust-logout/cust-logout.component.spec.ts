import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustLogoutComponent } from './cust-logout.component';

describe('CustLogoutComponent', () => {
  let component: CustLogoutComponent;
  let fixture: ComponentFixture<CustLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustLogoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
