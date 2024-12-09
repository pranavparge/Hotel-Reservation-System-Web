import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustLoginComponent } from './cust-login/cust-login.component';

// Angular Material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustViewRoomsComponent } from './cust-view-rooms/cust-view-rooms.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CustLogoutComponent } from './cust-logout/cust-logout.component';
import { AboutCustComponent } from './about-cust/about-cust.component';
import { CustRegisterComponent } from './cust-register/cust-register.component';
import { MatSelectModule } from '@angular/material/select';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StaffRegisterComponent } from './staff-register/staff-register.component';
import { StaffSidebarComponent } from './staff-sidebar/staff-sidebar.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { AboutStaffComponent } from './about-staff/about-staff.component';
import { StaffLogoutComponent } from './staff-logout/staff-logout.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { DeleteBookingComponent } from './delete-booking/delete-booking.component';
import { UpdateRoomStatusComponent } from './update-room-status/update-room-status.component';
import { RoomPriceComponent } from './room-price/room-price.component';


@NgModule({
  declarations: [
    AppComponent,
    CustLoginComponent,
    SidebarComponent,
    CustViewRoomsComponent,
    CustLogoutComponent,
    AboutCustComponent,
    CustRegisterComponent,
    StaffLoginComponent,
    StaffRegisterComponent,
    StaffSidebarComponent,
    CreateRoomComponent,
    AboutStaffComponent,
    StaffLogoutComponent,
    ViewBookingComponent,
    CreateBookingComponent,
    UpdateBookingComponent,
    DeleteBookingComponent,
    UpdateRoomStatusComponent,
    RoomPriceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}