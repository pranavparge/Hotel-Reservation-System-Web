import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCustComponent } from './about-cust.component';

describe('AboutCustComponent', () => {
  let component: AboutCustComponent;
  let fixture: ComponentFixture<AboutCustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutCustComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
