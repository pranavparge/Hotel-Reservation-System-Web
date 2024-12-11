import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  
    // Retrieve JWT (adjust based on how your token is stored, e.g., localStorage or sessionStorage)
    const token = localStorage.getItem('jwt');
  
    if (!token) {
      this.isLoading = false;
      this.errorMessage = 'User is not authenticated. Please log in.';
      return;
    }
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    this.http.put(`http://localhost:8080/staff/bookings/update?bookingID=${this.bookingID}`, this.bookingData, { headers }).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.updatedBooking = response;
        alert('Booking updated successfully!');
      },
      error: (error) => {
        this.isLoading = false;
        if (error.status === 403) {
          this.errorMessage = 'You do not have permission to update this booking.';
        } else {
          this.errorMessage = 'Failed to update booking. Please try again.';
        }
        console.error('Error updating booking:', error);
      }
    });
  }
}