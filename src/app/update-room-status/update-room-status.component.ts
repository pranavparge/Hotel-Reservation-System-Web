import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-update-room-status',
  templateUrl: './update-room-status.component.html',
  styleUrls: ['./update-room-status.component.css']
})
export class UpdateRoomStatusComponent {
  roomData = {
    roomNumber: '', // Room number input by user
    roomStatus: 'Available' // Default room status
  };
  roomStatuses = ['Available', 'Occupied', 'Unavailable']; // Dropdown options
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message
  isLoading: boolean = false; // Loading spinner

  constructor(private http: HttpClient) {}

  onUpdateRoomStatus(): void {
    if (!this.roomData.roomNumber) {
      this.errorMessage = 'Please enter a valid Room Number.';
      this.successMessage = ''; // Clear success message
      return;
    }
  
    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';
  
    const jwtToken = localStorage.getItem('jwt'); // Retrieve JWT token from local storage
  
    if (!jwtToken) {
      this.isLoading = false;
      this.errorMessage = 'Unauthorized: Please log in first.';
      return;
    }
  
    const url = `http://localhost:8080/staff/rooms/${this.roomData.roomNumber}/status`;
    const payload = { status: this.roomData.roomStatus }; // Correct payload
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`); // Add Authorization header
  
    this.http.post(url, payload, { headers, responseType: 'text' }).subscribe({
      next: (response: any) => {
        // Handle an empty response or parse JSON if needed
        if (response) {
          try {
            const jsonResponse = JSON.parse(response); // If backend sends JSON as a string
            if (jsonResponse.success) {
              this.successMessage = jsonResponse.message;
              this.errorMessage = '';
            } else {
              this.errorMessage = jsonResponse.message || 'Failed to update room status.';
            }
          } catch {
            this.successMessage = 'Room status updated successfully!';
            this.errorMessage = '';
          }
        } else {
          this.successMessage = 'Room status updated successfully!';
          this.errorMessage = '';
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = `Error: ${error.message}`;
        console.error('Error:', error);
        this.isLoading = false;
      }
    });
  }
}