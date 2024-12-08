import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cust-view-rooms',
  templateUrl: './cust-view-rooms.component.html',
  styleUrls: ['./cust-view-rooms.component.css']
})
export class CustViewRoomsComponent implements OnInit {
  rooms: any[] = []; // Holds the fetched room data
  isLoading: boolean = true; // Loading state

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchRooms();
  }

  fetchRooms(): void {
    const jwtToken = localStorage.getItem('jwt'); // Get JWT token from local storage
    if (!jwtToken) {
      alert('Unauthorized: Please log in first.');
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);

    this.http.get<any[]>('http://localhost:8080/customer/rooms', { headers }).subscribe({
      next: (response) => {
        this.rooms = response;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching rooms:', error);
        this.isLoading = false;
        alert('Failed to load rooms. Please try again later.');
      }
    });
  }
}