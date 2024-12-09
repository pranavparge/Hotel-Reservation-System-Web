import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-room-price',
  templateUrl: './room-price.component.html',
  styleUrls: ['./room-price.component.css']
})
export class RoomPriceComponent {
  startDate: string = ''; // Date input for startDate
  roomPrices: any = null; // To store the response prices
  errorMessage: string = ''; // To handle errors
  isLoading: boolean = false; // For loading spinner

  constructor(private http: HttpClient) {}

  getRoomPrices(): void {
    if (!this.startDate) {
      this.errorMessage = 'Please select a valid date.';
      this.roomPrices = null; // Clear previous prices
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    const url = 'http://localhost:8080/customer/rooms/price';
    const payload = { startDate: this.startDate };

    const jwtToken = localStorage.getItem('jwt'); // Retrieve JWT token from localStorage
    if (!jwtToken) {
      this.errorMessage = 'Unauthorized: Please log in first.';
      this.isLoading = false;
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`); // Add Authorization header

    this.http.post(url, payload, { headers }).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.roomPrices = response;
        this.errorMessage = ''; // Clear any previous errors
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Failed to fetch room prices. Please try again.';
        this.roomPrices = null; // Clear previous prices
        console.error('Error:', error);
      }
    });
  }
}