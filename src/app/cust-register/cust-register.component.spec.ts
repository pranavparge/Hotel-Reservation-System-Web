import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustRegisterComponent } from './cust-register.component';

describe('CustRegisterComponent', () => {
  let component: CustRegisterComponent;
  let fixture: ComponentFixture<CustRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
