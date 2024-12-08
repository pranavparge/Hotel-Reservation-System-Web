import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent {
  bookingData = {
    customerID: '',
    roomTypeToQuantity: { SINGLE: 1 },
    startDate: '',
    endDate: '',
    totalNumberOfGuests: '',
    addBreakfast: false,
    addLunch: false,
    addDinner: false
  };
  roomTypes = ['SINGLE', 'DOUBLE', 'SUITE']; // Room type options
  bookingResponse: any = null; // To hold the API response
  isLoading = false; // For loading spinner
  errorMessage: string = ''; // To handle errors

  constructor(private http: HttpClient) {}

  onCreateBooking(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.http.post('http://localhost:8080/customer/bookings/create', this.bookingData).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.bookingResponse = response;
        alert('Booking created successfully!');
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Failed to create booking. Please try again.';
        console.error('Error creating booking:', error);
      }
    });
  }
}