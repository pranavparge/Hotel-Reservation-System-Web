import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-logout',
  templateUrl: './staff-logout.component.html',
  styleUrls: ['./staff-logout.component.css']
})
export class StaffLogoutComponent {
  constructor(private http: HttpClient, private router: Router) {}

  logout(): void {
    // alert('Logged out successfully.');
    const jwtToken = localStorage.getItem('jwt'); // Retrieve JWT token from local storage

    if (!jwtToken) {
      alert('You are not logged in.');
      this.router.navigate(['/staff-login']); // Redirect to login
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);

    this.http.post('http://localhost:8080/auth/staff/log-out', {}, { headers }).subscribe({
      next: () => {
        alert('Logged out successfully.');
        localStorage.clear(); // Clear all local storage
        this.router.navigate(['/staff-login']); // Redirect to staff login page
      },
      error: (error) => {
        console.error('Logout error:', error);
        // alert('Failed to log out. Please try again.');
        localStorage.clear(); 
        this.router.navigate(['/staff-login']); 
      }
    });
  }
}