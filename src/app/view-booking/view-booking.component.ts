import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent {
  bookingId: string = '';
  bookingDetails: any = null; // Holds the booking details
  isLoading: boolean = false; // Loading spinner
  errorMessage: string = ''; // Error message

  constructor(private http: HttpClient) {}

  fetchBookingDetails(): void {
    if (!this.bookingId) {
      this.errorMessage = 'Please enter a valid booking ID.';
      return;
    }
  
    this.isLoading = true;
    this.errorMessage = '';
  
    // Retrieve JWT (adjust as per your storage mechanism, e.g., localStorage or sessionStorage)
    const token = localStorage.getItem('jwt'); 
  
    if (!token) {
      this.isLoading = false;
      this.errorMessage = 'User is not authenticated. Please log in.';
      return;
    }
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    this.http.get(`http://localhost:8080/staff/bookings?bookingID=${this.bookingId}`, { headers }).subscribe({
      next: (response: any) => {
        this.bookingDetails = response;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        if (error.status === 403) {
          this.errorMessage = 'You do not have permission to access this resource.';
        } else {
          this.errorMessage = 'Failed to fetch booking details. Please try again.';
        }
        console.error('Error fetching booking details:', error);
      }
    });
  }
}