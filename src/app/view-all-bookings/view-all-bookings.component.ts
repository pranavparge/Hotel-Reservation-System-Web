import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-view-all-bookings',
  templateUrl: './view-all-bookings.component.html',
  styleUrls: ['./view-all-bookings.component.css']
})
export class ViewAllBookingsComponent implements OnInit {
  bookings: any[] = []; // To store the bookings
  isLoading = true; // For loading spinner
  errorMessage = ''; // To handle errors

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchBookings();
  }

  fetchBookings(): void {
    const url = 'http://localhost:8080/staff/bookings';
    const jwtToken = localStorage.getItem('jwt'); // Retrieve JWT token

    if (!jwtToken) {
      this.errorMessage = 'Unauthorized: Please log in first.';
      this.isLoading = false;
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);

    this.http.get(url, { headers }).subscribe({
      next: (response: any) => {
        this.bookings = response; // Store the bookings
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching bookings:', error);
        this.errorMessage = 'Failed to fetch bookings. Please try again.';
        this.isLoading = false;
      }
    });
  }
}