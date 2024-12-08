import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRoomStatusComponent } from './update-room-status.component';

describe('UpdateRoomStatusComponent', () => {
  let component: UpdateRoomStatusComponent;
  let fixture: ComponentFixture<UpdateRoomStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateRoomStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateRoomStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
