import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent {
  bookingData = {
    customerId: 1, // Assuming this is retrieved or hardcoded for now
    startDate: '',
    endDate: '',
    totalNumberOfGuests: '',
    addBreakfast: false,
    addLunch: false,
    addDinner: false,
    roomTypeToQuantity: {
      SINGLE: 0,
      DOUBLE: 0,
      SUITE: 0
    }
  };

  responseMessage: any = null; // To store the response
  isLoading = false; // Loading spinner
  errorMessage: string = ''; // Error message

  constructor(private http: HttpClient) {}

  incrementRoomCount(type: keyof typeof this.bookingData.roomTypeToQuantity): void {
    this.bookingData.roomTypeToQuantity[type]++;
  }
  
  decrementRoomCount(type: keyof typeof this.bookingData.roomTypeToQuantity): void {
    if (this.bookingData.roomTypeToQuantity[type] > 0) {
      this.bookingData.roomTypeToQuantity[type]--;
    }
  }

  onCreateBooking(): void {
    if (!this.bookingData.startDate || !this.bookingData.endDate || !this.bookingData.totalNumberOfGuests) {
      this.errorMessage = 'Please fill all required fields.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    const url = 'http://localhost:8080/customer/bookings/create';

    this.http.post(url, this.bookingData).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.responseMessage = response;
        alert('Booking created successfully!');
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Failed to create booking. Please try again.';
        console.error('Error:', error);
      }
    });
  }
}