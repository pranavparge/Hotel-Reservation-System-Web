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
  
    this.http.post(url, payload, { headers }).subscribe({
      next: () => {
        this.isLoading = false;
        this.successMessage = `Room Number ${this.roomData.roomNumber} status updated to ${this.roomData.roomStatus} successfully!`;
        this.errorMessage = ''; // Clear any previous error message
        this.roomData.roomNumber = ''; // Reset the input field
        this.roomData.roomStatus = 'Available'; // Reset the dropdown to default
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Failed to update room status. Please try again.';
        this.successMessage = ''; // Clear any previous success message
        console.error('Error updating room status:', error);
      }
    });
  }
}