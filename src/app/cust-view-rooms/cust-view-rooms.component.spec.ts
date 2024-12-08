import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustViewRoomsComponent } from './cust-view-rooms.component';

describe('CustViewRoomsComponent', () => {
  let component: CustViewRoomsComponent;
  let fixture: ComponentFixture<CustViewRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustViewRoomsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustViewRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
