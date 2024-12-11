import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-delete-booking',
  templateUrl: './delete-booking.component.html',
  styleUrls: ['./delete-booking.component.css']
})
export class DeleteBookingComponent {
  bookingID: string = ''; // Booking ID to be deleted
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message
  isLoading: boolean = false; // Loading spinner

  constructor(private http: HttpClient) {}

  onDeleteBooking(): void {
    if (!this.bookingID) {
      this.errorMessage = 'Please enter a valid Booking ID.';
      return;
    }
  
    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';
  
    // Retrieve the JWT from local storage (or session storage)
    const jwtToken = localStorage.getItem('jwt'); // Adjust the key based on your implementation
  
    if (!jwtToken) {
      this.isLoading = false;
      this.errorMessage = 'Unauthorized: Please log in first.';
      return;
    }
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
  
    this.http.delete(`http://localhost:8080/staff/bookings/delete?bookingID=${this.bookingID}`, { headers }).subscribe({
      next: () => {
        this.isLoading = false;
        this.successMessage = `Booking ID ${this.bookingID} deleted successfully!`;
        this.errorMessage = '';
        this.bookingID = ''; // Reset the input field
      },
      error: (error) => {
        this.isLoading = false;
        if (error.status === 403) {
          this.errorMessage = 'You do not have permission to delete this booking.';
        } else {
          this.errorMessage = 'Failed to delete the booking. Please try again.';
        }
        console.error('Error deleting booking:', error);
      }
    });
  }
}