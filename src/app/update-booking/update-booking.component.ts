import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent {
  bookingID: string = ''; // Booking ID to be updated
  bookingData = {
    startDate: '',
    endDate: '',
    totalNumberOfGuests: '',
    additionalServices: [],
    roomTypeToQuantity: { SINGLE: 1 } // Default room type and quantity
  };
  roomTypes = ['SINGLE', 'DOUBLE', 'SUITE']; // Room type options
  updatedBooking: any = null; // To hold the updated booking response
  isLoading: boolean = false; // Loading spinner
  errorMessage: string = ''; // Error handling

  constructor(private http: HttpClient) {}

  onUpdateBooking(): void {
    if (!this.bookingID) {
      this.errorMessage = 'Please enter a valid Booking ID.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.http.put(`http://localhost:8080/staff/bookings/update?bookingID=${this.bookingID}`, this.bookingData).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.updatedBooking = response;
        alert('Booking updated successfully!');
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Failed to update booking. Please try again.';
        console.error('Error updating booking:', error);
      }
    });
  }
}