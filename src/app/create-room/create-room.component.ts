import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent {
  roomData = {
    roomNumber: '',
    roomCapacity: '',
    roomType: 'Single', // Default value
    roomStatus: 'Available' // Default value, not editable
  };
  roomTypes = ['Single', 'Double', 'Suite']; // Room type options
  isLoading = false; // For loading spinner

  constructor(private http: HttpClient, private router: Router) {}

  onCreateRoom(): void {
    const jwtToken = localStorage.getItem('jwt'); // Retrieve JWT token from local storage

    if (!jwtToken) {
      alert('Unauthorized: Please log in first.');
      this.router.navigate(['/staff-login']); // Redirect to login
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`); // Include JWT token in headers

    this.isLoading = true;

    this.http.post('http://localhost:8080/staff/rooms/create', this.roomData, { headers }).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        alert(`Room Created Successfully!
        Room Number: ${response.roomNumber}
        Room Capacity: ${response.roomCapacity}
        Room Type: ${response.roomType}
        Room Price: $${response.roomPrice}
        Room Status: ${response.roomStatus}`);
        // Optional: Reset the form
        this.resetForm();
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Room Creation Error:', error);
        alert('Failed to create room. Please try again.');
      }
    });
  }

  resetForm(): void {
    this.roomData = {
      roomNumber: '',
      roomCapacity: '',
      roomType: 'Single',
      roomStatus: 'Available'
    };
  }
}