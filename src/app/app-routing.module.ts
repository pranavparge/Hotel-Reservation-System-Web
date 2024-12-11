import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustLoginComponent } from './cust-login/cust-login.component';
import { CustViewRoomsComponent } from './cust-view-rooms/cust-view-rooms.component';
import { CustLogoutComponent } from './cust-logout/cust-logout.component';
import { AboutCustComponent } from './about-cust/about-cust.component';
import { CustRegisterComponent } from './cust-register/cust-register.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StaffRegisterComponent } from './staff-register/staff-register.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { AboutStaffComponent } from './about-staff/about-staff.component';
import { StaffLogoutComponent } from './staff-logout/staff-logout.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { DeleteBookingComponent } from './delete-booking/delete-booking.component';
import { UpdateRoomStatusComponent } from './update-room-status/update-room-status.component';
import { RoomPriceComponent } from './room-price/room-price.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { ViewAllBookingsComponent } from './view-all-bookings/view-all-bookings.component';

const routes: Routes = [
  { path: '', redirectTo: 'staff-login', pathMatch: 'full' },
  { path: 'cust-login', component: CustLoginComponent },
  { path: 'create-booking', component: CreateBookingComponent },
  { path: 'cust-view-rooms', component: CustViewRoomsComponent },
  { path: 'cust-logout', component: CustLogoutComponent },
  { path: 'about-cust', component: AboutCustComponent },
  { path: 'cust-register', component: CustRegisterComponent },
  { path: 'room-price', component: RoomPriceComponent },
  { path: 'staff-login', component: StaffLoginComponent },
  { path: 'staff-register', component: StaffRegisterComponent },
  { path: 'create-room', component: CreateRoomComponent },
  { path: 'about-staff', component: AboutStaffComponent },
  { path: 'staff-logout', component: StaffLogoutComponent },
  { path: 'view-all-bookings', component: ViewAllBookingsComponent },
  { path: 'view-booking', component: ViewBookingComponent },
  { path: 'update-booking', component: UpdateBookingComponent },
  { path: 'delete-booking', component: DeleteBookingComponent },
  { path: 'update-room-status', component: UpdateRoomStatusComponent },
  { path: 'payment-page', component: PaymentPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}